import Link from "next/link"

export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-foreground">Illustration</h1>
      <div className="mt-6 flex gap-3">
        <Link href="/works/ux-ui" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Ux/Ui</Link>
        <Link href="/works/branding" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Brand design</Link>
        <Link href="/works/web-design" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Web Design</Link>
        <Link href="/works/editorial-design" className="rounded-md px-3 py-2 text-sm bg-primary text-black hover:bg-primary/90">Editorial design</Link>
      </div>
      <p className="text-foreground/70 mt-2">Selected illustrations and visual experiments.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" />
    </main>
  )
}




