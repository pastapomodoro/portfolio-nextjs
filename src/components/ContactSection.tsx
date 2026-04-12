"use client";

const SOCIALS = [
  { label: "Instagram", handle: "@benzodiazepics", href: "https://instagram.com/benzodiazepics" },
  { label: "GitHub", handle: "pastapomodoro", href: "https://github.com/pastapomodoro" },
  { label: "Behance", handle: "eugnbll", href: "https://www.behance.net/eugnbll" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="p-6 md:p-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        {/* CTA */}
        <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-border">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] mb-8">
            Let&apos;s work
            <br />
            together.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Open to freelance projects, internships, and creative collaborations.
          </p>
          <a
            href="mailto:eugenio.bellini@yahoo.it"
            className="inline-block text-lg underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            eugenio.bellini@yahoo.it
          </a>
        </div>

        {/* Links */}
        <div className="p-6 md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Links
          </p>
          <div className="space-y-0">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-border hover:bg-muted transition-colors -mx-6 md:-mx-12 px-6 md:px-12"
              >
                <span>{social.label}</span>
                <span className="text-muted-foreground text-sm">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">Available for projects</span>
          </div>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eugenio Bellini
          </span>
        </div>
      </div>
    </section>
  );
}
