"use client"

// import { cn } from "@/lib/utils"
import Link from "next/link"

interface ImageSource {
  src: string
  alt: string
}

interface ShowImageListItemProps {
  text: string
  href: string
  images: [ImageSource, ImageSource]
}

function RevealImageListItem({ text, href }: ShowImageListItemProps) {

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="group block" prefetch={false}>
      <div className="group relative w-full overflow-hidden py-10 md:py-14 border-b border-border/50 flex items-center justify-between">
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-foreground/80 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-x-6 group-hover:text-foreground">
          {text}
        </h3>
        <span className="opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-foreground">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  )
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Web Design",
      href: "/works/web-design",
      images: [
        {
          src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Branding 1",
        },
        {
          src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Branding 2",
        },
      ],
    },
    {
      text: "Editorial Design",
      href: "/works/editorial-design",
      images: [
        {
          src: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Editorial 1",
        },
        {
          src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Editorial 2",
        },
      ],
    },
    {
      text: "UX/UI",
      href: "/works/ux-ui",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Web 1",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Web 2",
        },
      ],
    },
    {
      text: "Brand Design",
      href: "/works/branding",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Illust 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Illust 2",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-1 rounded-sm px-4 md:px-8 py-2 md:py-4 pb-10 md:pb-16">
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} href={item.href} />
      ))}
    </div>
  )
}

export { RevealImageList }


