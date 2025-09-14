"use client"

import React, { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Home, User, Briefcase, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

type IconKey = "home" | "user" | "briefcase" | "fileText"

const iconMap: Record<IconKey, LucideIcon> = {
  home: Home,
  user: User,
  briefcase: Briefcase,
  fileText: FileText,
}

interface NavItem {
  name: string
  url: string
  iconKey: IconKey
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "")
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  const idToName = useMemo(() => ({ home: "Home", about: "About", projects: "Projects" }), [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Sync active tab with route/section
  useEffect(() => {
    if (pathname && pathname.startsWith("/works")) {
      setActiveTab("Projects")
      return
    }

    if (pathname === "/") {
      const sectionIds = ["home", "about", "projects"]
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id") as keyof typeof idToName
              if (id && idToName[id]) setActiveTab(idToName[id])
            }
          })
        },
        { rootMargin: "0px 0px -40% 0px", threshold: 0.4 }
      )
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
      const onHash = () => {
        const hash = window.location.hash.replace("#", "") as keyof typeof idToName
        if (hash && idToName[hash]) setActiveTab(idToName[hash])
      }
      window.addEventListener("hashchange", onHash)
      onHash()
      return () => {
        observer.disconnect()
        window.removeEventListener("hashchange", onHash)
      }
    }
  }, [pathname, idToName])

  return (
    <div className={cn("fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6", className)}>
      <div className="flex items-center gap-3 bg-background/70 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-sm">
        {items.map((item) => {
          const Icon = iconMap[item.iconKey]
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}


