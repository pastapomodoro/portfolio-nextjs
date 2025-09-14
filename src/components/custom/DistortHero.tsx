"use client"

import { gsap } from "gsap"
import { useEffect, useRef, useState, useCallback, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Points, ShaderMaterial } from "three"
import type * as THREE from "three"
import { Button } from "@/components/ui/button"




interface DistortionBackgroundProps {
  mousePosition: { x: number; y: number }
}

function DistortionBackground({ mousePosition }: DistortionBackgroundProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: [0, 0] },
      uResolution: { value: [typeof window !== 'undefined' ? window.innerWidth : 0, typeof window !== 'undefined' ? window.innerHeight : 0] },
      uNoiseScale: { value: 8.0 },
      uDistortionStrength: { value: 0.3 },
    }),
    [],
  )

  const vertexShader = `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uDistortionStrength;
    
    float noise(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      float n1 = noise(uv * 10.0 + uTime * 0.5);
      float n2 = noise(uv * 20.0 - uTime * 0.3);
      pos.z += sin(pos.x * 5.0 + uTime * 2.0) * uDistortionStrength * n1;
      pos.z += cos(pos.y * 8.0 + uTime * 1.5) * uDistortionStrength * n2;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform float uNoiseScale;
    uniform float uDistortionStrength;
    varying vec2 vUv;

    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 6; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    vec3 distortedNoise(vec2 uv) {
      vec2 st = uv * uNoiseScale;
      float time = uTime * 0.5;
      vec2 q = vec2(fbm(st + vec2(0.0, 0.0)), fbm(st + vec2(5.2, 1.3)));
      vec2 r = vec2(fbm(st + 4.0 * q + vec2(1.7 - time * 0.15, 9.2)), fbm(st + 4.0 * q + vec2(8.3 - time * 0.126, 2.8)));
      float f = fbm(st + r);

      vec2 mouseInfluence = (uMouse - 0.5) * 2.0;
      float mouseDistance = length(uv - (uMouse * 0.5 + 0.5));
      float mouseEffect = 1.0 - smoothstep(0.0, 0.6, mouseDistance);

      float glitch = step(0.98, random(vec2(floor(uTime * 10.0), floor(uv.y * 50.0))));
      f += glitch * 0.5;

      vec3 color = vec3(0.0);
      color.r = f * f * f + 0.6 * f * f + 0.5 * f;
      color.g = f * f * f * f + 0.4 * f * f + 0.2 * f;
      color.b = f * f * f * f * f * f + 0.7 * f * f + 0.5 * f;

      float noiseTexture = random(uv * 100.0 + time);
      color += noiseTexture * 0.1;
      color += mouseEffect * vec3(0.2, 0.3, 0.25);
      float scanline = sin(uv.y * 800.0) * 0.04;
      color += scanline;
      return color;
    }

    void main() {
      vec2 uv = vUv;
      float aberration = 0.005;
      vec3 color;
      color.r = distortedNoise(uv + vec2(aberration, 0.0)).r;
      color.g = distortedNoise(uv).g;
      color.b = distortedNoise(uv - vec2(aberration, 0.0)).b;
      float grain = random(uv + uTime) * 0.1;
      color += grain;
      float vignette = 1.0 - length(uv - 0.5) * 1.2;
      color *= vignette;
      color = pow(color, vec3(1.2));
      color *= 1.2;
      gl_FragColor = vec4(color, 0.9);
    }
  `

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
      materialRef.current.uniforms.uMouse.value = [mousePosition.x, mousePosition.y]
      const distortion = 0.2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      materialRef.current.uniforms.uDistortionStrength.value = distortion
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <planeGeometry args={[25, 25, 100, 100]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  )
}

interface NoiseParticlesProps {
  count: number
  mousePosition: { x: number; y: number }
}

function NoiseParticles({ count, mousePosition }: NoiseParticlesProps) {
  const pointsRef = useRef<Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = (Math.random() - 0.5) * 20
      positions[i3 + 2] = (Math.random() - 0.5) * 10
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colors[i3] = 0.0; colors[i3 + 1] = 1.0; colors[i3 + 2] = 0.8
      } else if (colorChoice < 0.66) {
        colors[i3] = 1.0; colors[i3 + 1] = 1.0; colors[i3 + 2] = 1.0
      } else {
        colors[i3] = 0.0; colors[i3 + 1] = 0.6; colors[i3 + 2] = 1.0
      }
      sizes[i] = Math.random() * 0.03 + 0.01
    }
    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3] += (Math.random() - 0.5) * 0.02
        positions[i3 + 1] += (Math.random() - 0.5) * 0.02
        positions[i3 + 2] += Math.sin(state.clock.elapsedTime * 3 + i * 0.1) * 0.01
        const mouseInfluence = 1 / (1 + Math.abs(positions[i3] - mousePosition.x * 10) + Math.abs(positions[i3 + 1] - mousePosition.y * 10))
        if (mouseInfluence > 0.1) {
          positions[i3] += (Math.random() - 0.5) * 0.1
          positions[i3 + 1] += (Math.random() - 0.5) * 0.1
        }
        if (Math.abs(positions[i3]) > 10) positions[i3] *= -0.8
        if (Math.abs(positions[i3 + 1]) > 10) positions[i3 + 1] *= -0.8
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={particles.colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={particles.sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.8} sizeAttenuation blending={2} />
    </points>
  )
}
interface GlitchTextProps {
  text: string
  className?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
  color?: string
  glitchIntensity?: number
  glitchFrequency?: number
}

// Componente riutilizzabile per overlay rumore/distorsione
interface NoiseOverlayProps {
  opacity?: number
  intensity?: number
}

export function NoiseOverlay({ opacity = 0.05, intensity = 0.65 }: NoiseOverlayProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${intensity}' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  )
}

export function GlitchText({
  text,
  className = "",
  fontSize = "4rem",
  fontFamily = "inherit",
  fontWeight = "900",
  color = "#ffffff",
  glitchIntensity = 0.8,
  glitchFrequency = 100,
}: GlitchTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current
    const originalText = text

    // Create glitch effect
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

    const glitchAnimation = () => {
      if (Math.random() > 1 - glitchIntensity * 0.05) {
        // Random glitch based on intensity
        const glitchedText = originalText
          .split("")
          .map((char) => {
            if (Math.random() > 1 - glitchIntensity * 0.2) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            }
            return char
          })
          .join("")

        element.textContent = glitchedText

        setTimeout(
          () => {
            element.textContent = originalText
          },
          50 + Math.random() * (100 * glitchIntensity),
        )
      }
    }

    const interval = setInterval(glitchAnimation, glitchFrequency)

    // GSAP glitch effects with intensity
    gsap.to(element, {
      textShadow: `${2 * glitchIntensity}px 0 #0088ff, ${-2 * glitchIntensity}px 0 #00ff88`,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    return () => {
      clearInterval(interval)
    }
  }, [text, glitchIntensity, glitchFrequency])

  return (
    <h1
      ref={textRef}
      className={`${className} relative`}
      style={{
        fontSize,
        fontFamily,
        fontWeight,
        color,
        textShadow: `2px 0 #0088ff, -2px 0 #00ff88, 0 0 20px rgba(255, 255, 255, 0.5)`,
      }}
    >
      {text}
    </h1>
  )
}

interface DistortHeroProps {
  backgroundUrl?: string
}

export default function DistortHero({ backgroundUrl }: DistortHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoaded) return

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 100,
        scale: 0.8,
        filter: "blur(10px)",
      })

      gsap.set(canvasRef.current, {
        opacity: 0,
        scale: 1.2,
      })

      // Create aggressive timeline
      const tl = gsap.timeline({ delay: 0.2 })

      // Canvas entrance with distortion
      tl.to(canvasRef.current, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power4.out",
      })

      // Aggressive text entrance
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "back.out(2)",
        },
        "-=1.5",
      )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1",
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )

      // Glitch effects
      const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
      glitchTl
        .to(heroRef.current, {
          filter: "hue-rotate(180deg) saturate(2)",
          duration: 0.1,
        })
        .to(heroRef.current, {
          filter: "none",
          duration: 0.1,
        })
        .to(heroRef.current, {
          x: 5,
          duration: 0.05,
        })
        .to(heroRef.current, {
          x: -5,
          duration: 0.05,
        })
        .to(heroRef.current, {
          x: 0,
          duration: 0.05,
        })

      // Floating animation for title
      gsap.to(titleRef.current, {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [isLoaded])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background layer: image (if provided) or gradient fallback */}
      <div ref={canvasRef} className="absolute inset-0 z-0">
        {backgroundUrl ? (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        )}

        {/* Color overlay to unify palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-green-500/20" />

        {/* WebGL glitch layer */}
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ background: "transparent" }}>
          <DistortionBackground mousePosition={mousePosition} />
          <NoiseParticles count={800} mousePosition={mousePosition} />
        </Canvas>
      </div>

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Content */}
      <div ref={heroRef} className="relative z-20 flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-5xl mx-auto pt-24 pb-20">
          <div ref={titleRef}>
            <GlitchText
              text="EUGENIO BELLINI"
              fontSize="clamp(4rem, 12vw, 12rem)"
              fontFamily="'Courier New', monospace"
              fontWeight="900"
              color="#ffffff"
              glitchIntensity={0.9}
              glitchFrequency={80}
              className="leading-none tracking-tighter"
            />
          </div>

          {/* Divider coerente con le altre sezioni */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 mb-2 rounded-full" />

          <div className="mt-4">
            <GlitchText
              text="CREATIVE PORTFOLIO"
              fontSize="clamp(1.5rem, 4vw, 3rem)"
              fontFamily="'Courier New', monospace"
              fontWeight="400"
              color="#22c55e"
              glitchIntensity={0.6}
              glitchFrequency={150}
              className="tracking-widest opacity-80"
            />
          </div>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-green-400 mb-12 max-w-3xl mx-auto leading-relaxed font-mono tracking-wider uppercase"
            style={{
              textShadow: "0 0 10px rgba(0, 255, 136, 0.5), 2px 0 #0088ff, -2px 0 #00ff88",
            }}
          >
            {">"} VISUAL.STORYTELLER {"<"}
            <br />
            {">"} DESIGN.INNOVATOR {"<"}
          </p>

          <div ref={buttonRef}>
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-0 px-10 py-4 text-lg font-mono uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">
                {">"} ESPLORA_PORTFOLIO {"<"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* Glitch UI Elements */}
      <div className="absolute top-8 left-8 z-30">
        <div className="text-blue-400 font-mono text-xs tracking-wider">{">"} CREATIVE.STATUS</div>
      </div>

      <div className="absolute top-8 right-8 z-30">
        <div className="text-green-400 font-mono text-xs tracking-wider">DESIGN.MODE {"<"}</div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-px h-16 bg-gradient-to-b from-blue-500/60 to-transparent animate-pulse" />
      </div>


    </div>
  )
}
