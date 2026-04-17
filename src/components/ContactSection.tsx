"use client";

import { EmailMeButton } from "@/components/EmailMeButton";

const SOCIALS = [
  { label: "Instagram", handle: "@benzodiazepics", href: "https://instagram.com/benzodiazepics" },
  { label: "GitHub", handle: "pastapomodoro", href: "https://github.com/pastapomodoro" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="site-rhythm-header">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        {/* CTA */}
        <div className="site-rhythm-block flex max-md:py-8 flex-col space-y-5 border-b md:space-y-8 lg:border-b-0 lg:border-r border-border">
          <p className="text-2xl font-medium leading-[1.15] tracking-tight sm:text-3xl md:text-4xl md:leading-[1.2] lg:text-5xl">
            Want to talk
            <br />
            about a project?
          </p>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            I take freelance jobs when the schedule allows, and I&apos;m interested in internships
            or short-term help on a team. Send a short note and I&apos;ll reply when I can.
          </p>
          <EmailMeButton variant="large" className="max-md:w-full max-md:max-w-xs" />
        </div>

        {/* Links */}
        <div className="site-rhythm-block max-md:py-8">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground md:mb-6 lg:mb-8">
            Links
          </p>
          <div className="divide-y divide-border border border-border">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 py-3 transition-colors hover:bg-muted md:py-5"
              >
                <span className="text-sm md:text-base">{social.label}</span>
                <span className="shrink-0 text-xs text-muted-foreground tabular-nums md:text-sm">
                  {social.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="site-rhythm-header max-md:py-5">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Eugenio Bellini
        </p>
      </div>
    </section>
  );
}
