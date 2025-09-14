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
      <div className="group relative h-fit w-fit overflow-visible py-8">
        <h3 className="text-5xl md:text-7xl font-black text-foreground transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500">
          {text}
        </h3>
        {/* hover previews removed */}
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


