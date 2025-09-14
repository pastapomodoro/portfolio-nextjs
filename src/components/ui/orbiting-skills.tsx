"use client"

import React, { useEffect, useState, memo } from "react"
import { cn } from "@/lib/utils"

type IconType =
  | "photoshop"
  | "blender"
  | "openai"
  | "figma"
  | "aftereffects"
  | "illustrator"
  | "indesign"

type GlowColor = "cyan" | "green"

interface SkillIconProps {
  type: IconType
}

interface SkillConfig {
  id: string
  orbitRadius: number
  size: number
  speed: number
  iconType: IconType
  phaseShift: number
  glowColor: GlowColor
  label: string
}

interface OrbitingSkillProps {
  config: SkillConfig
  angle: number
}

const iconSources: Record<IconType, { srcs: string[]; color: string }> = {
  photoshop: {
    srcs: [
      "https://cdn.simpleicons.org/adobephotoshop/31A8FF",
      "https://cdn.simpleicons.org/adobephotoshop/ffffff",
    ],
    color: "#31A8FF",
  },
  blender: {
    srcs: ["https://cdn.simpleicons.org/blender/F5792A", "https://cdn.simpleicons.org/blender/ffffff"],
    color: "#F5792A",
  },
  openai: {
    srcs: ["https://cdn.simpleicons.org/openai/00A67D", "https://cdn.simpleicons.org/openai/ffffff"],
    color: "#00A67D",
  },
  figma: {
    srcs: ["https://cdn.simpleicons.org/figma/0ACF83", "https://cdn.simpleicons.org/figma/ffffff"],
    color: "#0ACF83",
  },
  aftereffects: {
    srcs: [
      "https://cdn.simpleicons.org/adobeaftereffects/9999FF",
      "https://cdn.simpleicons.org/adobeaftereffects/ffffff",
    ],
    color: "#9999FF",
  },
  illustrator: {
    srcs: [
      "https://cdn.simpleicons.org/adobeillustrator/FF9A00",
      "https://cdn.simpleicons.org/adobeillustrator/ffffff",
    ],
    color: "#FF9A00",
  },
  indesign: {
    srcs: [
      "https://cdn.simpleicons.org/adobeindesign/FF3366",
      "https://cdn.simpleicons.org/adobeindesign/ffffff",
    ],
    color: "#FF3366",
  },
}

const SkillIcon = memo(({ type }: SkillIconProps) => {
  const data = iconSources[type]
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const src = data.srcs[index]
  const abbrev: Record<IconType, string> = {
    photoshop: 'Ps',
    illustrator: 'Ai',
    indesign: 'Id',
    aftereffects: 'Ae',
    figma: 'F',
    blender: 'B',
    openai: 'AI',
  }
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-full" style={{ backgroundColor: `${data.color}20` }} />
      {!failed && (
        <img
          src={src}
          alt={type}
          className="w-full h-full relative z-10"
          decoding="async"
          loading="lazy"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (index < data.srcs.length - 1) {
              setIndex(index + 1)
            } else {
              setFailed(true)
            }
          }}
          style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.35))" }}
        />
      )}
      {(!loaded || failed) && (
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white/90">
          {abbrev[type]}
        </div>
      )}
    </div>
  )
})
SkillIcon.displayName = "SkillIcon"

const skillsConfig: SkillConfig[] = [
  { id: "photoshop", orbitRadius: 110, size: 50, speed: 1, iconType: "photoshop", phaseShift: 0, glowColor: "cyan", label: "Photoshop" },
  { id: "illustrator", orbitRadius: 110, size: 48, speed: 1, iconType: "illustrator", phaseShift: (2 * Math.PI) / 3, glowColor: "green", label: "Illustrator" },
  { id: "indesign", orbitRadius: 110, size: 46, speed: 1, iconType: "indesign", phaseShift: (4 * Math.PI) / 3, glowColor: "cyan", label: "InDesign" },
  { id: "figma", orbitRadius: 185, size: 52, speed: -0.6, iconType: "figma", phaseShift: 0, glowColor: "green", label: "Figma" },
  { id: "aftereffects", orbitRadius: 185, size: 50, speed: -0.6, iconType: "aftereffects", phaseShift: (2 * Math.PI) / 3, glowColor: "cyan", label: "After Effects" },
  { id: "blender", orbitRadius: 185, size: 50, speed: -0.6, iconType: "blender", phaseShift: (4 * Math.PI) / 3, glowColor: "green", label: "Blender" },
  { id: "openai", orbitRadius: 235, size: 48, speed: 0.4, iconType: "openai", phaseShift: Math.PI / 3, glowColor: "cyan", label: "OpenAI" },
]

const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { orbitRadius, size, iconType, label } = config
  const x = Math.cos(angle) * orbitRadius
  const y = Math.sin(angle) * orbitRadius

  const glow = iconSources[iconType]?.color || "#22C55E"

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{ width: `${size}px`, height: `${size}px`, transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`, zIndex: isHovered ? 20 : 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative w-full h-full p-2 rounded-full flex items-center justify-center",
          "bg-black/60 backdrop-blur-sm shadow-lg"
        )}
        style={{ boxShadow: isHovered ? `0 0 24px ${glow}60, 0 0 48px ${glow}30` : `0 0 12px ${glow}30` }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs text-white whitespace-nowrap bg-black/80 backdrop-blur-sm">
            {label}
          </div>
        )}
      </div>
    </div>
  )
})
OrbitingSkill.displayName = "OrbitingSkill"

export default function OrbitingSkills() {
  const [time, setTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isPaused) return
    let id: number
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      setTime((t) => t + dt)
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [isPaused])

  if (!mounted) {
    return (
      <div className="relative w-[min(80vw,520px)] h-[min(80vw,520px)] md:w-[520px] md:h-[520px]" />
    )
  }

  return (
    <div className="relative w-full flex items-center justify-center overflow-visible">
      <div
        className="relative w-[min(80vw,520px)] h-[min(80vw,520px)] md:w-[520px] md:h-[520px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle center glow to match palette */}
        <div className="absolute w-40 h-40 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute w-24 h-24 rounded-full bg-cyan-400/15 blur-2xl" />

        {/* Glowing orbit rings for visibility */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 220, height: 220, boxShadow: "0 0 24px rgba(34,197,94,0.35), inset 0 0 24px rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.3)" }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 370, height: 370, boxShadow: "0 0 24px rgba(6,182,212,0.35), inset 0 0 24px rgba(6,182,212,0.2)", border: "1px solid rgba(6,182,212,0.3)" }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 470, height: 470, boxShadow: "0 0 24px rgba(34,197,94,0.35), inset 0 0 24px rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.3)" }}
        />

        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0)
          return <OrbitingSkill key={config.id} config={config} angle={angle} />
        })}
      </div>
    </div>
  )
}


