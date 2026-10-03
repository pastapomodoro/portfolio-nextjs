"use client";

import Image from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type OpensourceFolderTabCardProps = Readonly<{
  appName?: string;
  cardLabel?: string;
  title?: string;
  subtitle?: string;
  primaryValue?: string;
  primaryLabel?: string;
  secondaryValue?: string;
  secondaryLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  canvasBg?: string;
} & ComponentPropsWithoutRef<"div">>;

// Adapted from the user's folder-tab component for portfolio project covers.
export const OpensourceFolderTabCard = forwardRef<HTMLDivElement, OpensourceFolderTabCardProps>(function OpensourceFolderTabCard({
  className, appName = "Eugenio Bellini", cardLabel = "Project", title = "Untitled",
  subtitle = "", primaryValue = "", primaryLabel = "", secondaryValue = "View", secondaryLabel = "project",
  imageSrc = "/minidev.png", imageAlt = "Project preview", imageFit = "cover", canvasBg, ...props
}, ref) {
  return (
    <div ref={ref} data-slot="opensource-folder-tab-card" className={cn("folder-card", className)} {...props}>
      <div className="folder-card-image" style={{ backgroundColor: canvasBg }}>
        <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 767px) 90vw, 44vw" className={imageFit === "contain" ? "object-contain" : "object-cover"} />
        <span className="folder-app-name">{appName}</span>
      </div>
      <div className="folder-front">
        <div className="folder-shape" aria-hidden="true">
          <div className="folder-body" /><div className="folder-tab" />
          <svg className="folder-curve" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0H20C30 0 36 6 42 18L80 82C86 94 92 100 100 100V100H0Z" fill="currentColor" /></svg>
        </div>
        <div className="folder-content">
          <span className="folder-label">{cardLabel}</span>
          <div><h3>{title}</h3><p className="folder-subtitle">{subtitle}</p></div>
          <div className="folder-meta"><p><span>{primaryValue}</span> {primaryLabel}</p><span className="folder-open">{secondaryValue} {secondaryLabel}<ArrowUpRight size={18} /></span></div>
        </div>
      </div>
    </div>
  );
});
OpensourceFolderTabCard.displayName = "OpensourceFolderTabCard";
