"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Social {
  name: string
  image: string
  href: string
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[]
}

export function SocialLinks({ socials, className, ...props }: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null)
  const [rotation, setRotation] = React.useState<number>(0)
  const [clicked, setClicked] = React.useState<boolean>(false)

  const animation = {
    scale: clicked ? [1, 1.2, 1] : 1,
    transition: { duration: 0.25 },
  }

  React.useEffect(() => {
    const handleClick = () => {
      setClicked(true)
      const t = setTimeout(() => setClicked(false), 180)
      return () => clearTimeout(t)
    }
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className={cn("flex items-center justify-start gap-2", className)} {...props}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative cursor-pointer px-4 py-2 transition-opacity duration-200 rounded-md",
            hoveredSocial && hoveredSocial !== social.name ? "opacity-60" : "opacity-100"
          )}
          onMouseEnter={() => {
            setHoveredSocial(social.name)
            setRotation(Math.random() * 20 - 10)
          }}
          onMouseLeave={() => setHoveredSocial(null)}
        >
          <span className="block text-sm md:text-base font-medium text-foreground/90 hover:text-foreground">
            {social.name}
          </span>
          <AnimatePresence>
            {hoveredSocial === social.name && (
              <motion.div
                className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-full w-full items-center justify-center pointer-events-none"
                animate={animation}
              >
                <motion.img
                  key={social.name}
                  src={social.image}
                  alt={social.name}
                  className="h-8 w-8 md:h-10 md:w-10 drop-shadow"
                  initial={{ y: -8, rotate: rotation, opacity: 0, filter: "blur(2px)" }}
                  animate={{ y: -12, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -8, opacity: 0, filter: "blur(2px)" }}
                  transition={{ duration: 0.18 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      ))}
    </div>
  )}


