"use client";

import Link from "next/link";

const SERVICES = [
  {
    id: "01",
    title: "AI Workflow Audit",
    description:
      "Mappatura dei processi aziendali per identificare dove l'AI può automatizzare, ridurre costi e accelerare decisioni. Consegno un report con priorità, effort stimato e ROI atteso.",
    rate: "A partire da €2.500",
  },
  {
    id: "02",
    title: "Custom AI Agents",
    description:
      "Progetto e sviluppo di agenti AI verticali per il tuo dominio: customer support automation, lead qualification, content operations, compliance review. Architetture multi-agente con orchestrazione MCP/A2A.",
    rate: "Progetto, da €5.000",
  },
  {
    id: "03",
    title: "AI System Integration",
    description:
      "Integrazione di modelli LLM e agenti AI nei tuoi sistemi esistenti (CRM, ERP, piattaforme no-code). Node-based workflow design con Weavy o custom orchestration layer.",
    rate: "Progetto, da €3.000",
  },
  {
    id: "04",
    title: "Team Training & Adoption",
    description:
      "Workshop pratici per team operativi e manageriali: prompt engineering, AI tooling, governance e uso responsabile. Formazione su Claude, ChatGPT, Gemini, e custom agent interni.",
    rate: "€1.500–€3.000 / workshop",
  },
  {
    id: "05",
    title: "AI Governance & Compliance",
    description:
      "Framework di governance per AI Act EU: risk assessment, trasparenza, human oversight, audit trail. Policy aziendali per l'uso etico e sicuro dell'AI generativa e agentica.",
    rate: "A partire da €4.000",
  },
  {
    id: "06",
    title: "Prototyping & MVP",
    description:
      "Dall'idea a un prototipo funzionante in 3-6 settimane. Per startup o team interni che vogliono validare un concept AI prima di scalare. Stack: LangGraph, Hermes, Weavy, RAG su misura.",
    rate: "Da €3.000",
  },
];

const METRICS = [
  { value: "$236B", label: "AI Agents market entro il 2034", source: "Precedence Research" },
  { value: "45%", label: "CAGR annuo del settore", source: "Precedence Research" },
  { value: "171%", label: "ROI medio implementazioni riuscite", source: "Beam AI" },
  { value: "81%", label: "Aziende che pianificano agenti AI nel 2026", source: "Anthropic / Material" },
  { value: "$73B", label: "Mercato AI Consulting entro il 2033", source: "Persistence MR" },
  { value: "50-60%", label: "Risoluzione autonoma customer service", source: "Gartner 2026" },
];

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* ── Fixed Nav ───────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex h-16 items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity"
          >
            Eugenio Bellini
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="/services"
              className="text-sm text-foreground font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-16 min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="site-rhythm-block flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span aria-hidden className="inline-block size-1.5 bg-brand" />
              AI Consulting & Agent Development
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] mb-8">
              I turn workflows
              <br />
              into autonomous
              <br />
              <span className="text-brand">systems.</span>
            </h1>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Designer turned AI System Analyst. I design, build, and deploy AI agents and
              multi-agent orchestration systems for companies that need to move beyond
              chatbots and into production-grade automation.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-10">
            <a
              href="mailto:eugenio.bellini@example.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[--brand] text-[--brand-foreground] text-sm font-medium uppercase tracking-wider hover:opacity-80 transition-opacity"
            >
              Book a call
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium uppercase tracking-wider hover:bg-muted transition-colors"
            >
              View services
            </a>
          </div>
        </div>

        {/* Right — stat block */}
        <div className="site-rhythm-block flex flex-col justify-center bg-[#fafafa]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-8">
            Market Context
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-6xl md:text-7xl font-medium tracking-tight text-[--brand]">
                $236B
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                AI Agents market by 2034{" "}
                <span className="font-mono text-[10px]">— Precedence Research</span>
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-6xl md:text-7xl font-medium tracking-tight">
                171%<span className="text-2xl md:text-3xl text-muted-foreground"> avg ROI</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                on successful AI agent implementations{" "}
                <span className="font-mono text-[10px]">— Beam AI</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────── */}
      <section id="services" className="border-t border-border">
        <div className="border-b border-border">
          <div className="site-rhythm-header">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Services
            </p>
          </div>
        </div>

        <div className="divide-y divide-border">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border flex items-start justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                    {s.id} — {s.rate}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                    {s.title}
                  </h2>
                </div>
              </div>
              <div className="site-rhythm-block flex items-center">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Market Data ──────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="border-b border-border">
          <div className="site-rhythm-header flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              The market opportunity
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m, i) => (
            <div
              key={i}
              className={`site-rhythm-block-tight ${
                i % 3 < 2 ? "border-r border-border" : ""
              } ${i < 3 ? "border-b border-border" : ""}`}
            >
              <p className="text-4xl md:text-5xl font-medium tracking-tight text-[--brand] mb-2">
                {m.value}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {m.label}
              </p>
              <p className="text-[10px] text-muted-foreground/50 font-mono mt-1">
                {m.source}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Me ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="border-b border-border">
          <div className="site-rhythm-header">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              Why work with me
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
              Designer + Engineer
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              La maggior parte dei consulenti AI viene dalla sola ingegneria o dalla sola
              strategia. Io arrivo dal design —这意味着 che so progettare sistemi che le persone
              vogliono davvero usare, non solo che funzionano. UX e orchestrazione AI insieme.
            </p>
          </div>
          <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
              Node-Based Native
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Lavoro ogni giorno su Weavy, una piattaforma node-based per AI system. Multi-agent
              orchestration, MCP/A2A protocol design, RAG pipelines — non è teoria, è il mio
              stack quotidiano in Accenture.
            </p>
          </div>
          <div className="site-rhythm-block">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
              Ho già costruito un agente AI
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              <span className="text-foreground font-medium">Framey</span> — AI agent per
              Frame.io che cerca video per contenuto semantico. Dall&apos;idea al deployment. So cosa
              vuol dire portare un agente in produzione, con tutti i compromessi e le decisioni
              reali.
            </p>
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="border-b border-border">
          <div className="site-rhythm-header">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              How it works
            </p>
          </div>
        </div>
        <div className="divide-y divide-border">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "Parliamo del tuo business, dei processi che vuoi automatizzare e dei problemi reali. Niente jargon, niente vendita — solo capire se ha senso.",
            },
            {
              step: "02",
              title: "Audit & Roadmap",
              desc: "Mappo i flussi di lavoro, identifico i punti ad alto ROI per l'AI, stimo effort e tempi. Consegno un documento con priorità e architettura proposta.",
            },
            {
              step: "03",
              title: "Build & Iterate",
              desc: "Sviluppo in sprint settimanali con demo frequenti. MVP in 3-6 settimane. Uso il tuo stack o consiglio il migliore per il caso d'uso.",
            },
            {
              step: "04",
              title: "Deploy & Monitor",
              desc: "Messa in produzione con human-in-the-loop, metriche di performance, logging per audit. Mi assicuro che il sistema sia affidabile e migliorabile.",
            },
          ].map((p) => (
            <div key={p.step} className="grid grid-cols-1 lg:grid-cols-2">
              <div className="site-rhythm-block border-b lg:border-b-0 lg:border-r border-border">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                  Step {p.step}
                </p>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  {p.title}
                </h3>
              </div>
              <div className="site-rhythm-block">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="border-t border-border bg-[--brand] text-[--brand-foreground]">
        <div className="site-rhythm-block flex flex-col items-center text-center gap-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] font-mono opacity-60">
            Let&apos;s build something
          </p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-2xl">
            Ready to turn your workflows into autonomous systems?
          </h2>
          <a
            href="mailto:eugenio.bellini@example.com"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[--brand-foreground] text-[--brand] text-sm font-medium uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            Get in touch → 
          </a>
        </div>
      </section>
    </main>
  );
}