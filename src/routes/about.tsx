import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Reveal, SectionHeading, Eyebrow } from "../components/primitives";
import { FinalCTA } from "./index";
import { Compass, Eye, Handshake, ShieldCheck, Sparkles, Layers } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Otax Technologies" },
      { name: "description", content: "Meet Otax Technologies — a senior AI automation consultancy building intelligent systems for operators who measure everything." },
    ],
  }),
});

const VALUES = [
  { icon: Sparkles, title: "Innovation", desc: "We stay on the frontier — but we ship what actually works in production, not what looks good in a demo." },
  { icon: ShieldCheck, title: "Reliability", desc: "The systems we build run mission-critical workflows. Reliability is a design constraint, not an afterthought." },
  { icon: Eye, title: "Transparency", desc: "Fixed scope, honest timelines, plain-English updates. You always know what's happening and why." },
  { icon: Layers, title: "Security", desc: "Private deployments, SOC 2 aligned processes, role-based access and audit trails on everything we ship." },
  { icon: Handshake, title: "Long-term Partnership", desc: "We build to be replaced by internal teams — and stay engaged for the years of iteration that follow." },
  { icon: Compass, title: "Craft", desc: "We treat automation as a design discipline. Fewer moving parts, better observability, better outcomes." },
];

const TIMELINE = [
  { y: "2022", t: "Founded", d: "Otax started as a two-person consultancy shipping GPT-3 integrations for early adopters in finance and healthcare." },
  { y: "2023", t: "First platform partnerships", d: "Deep integrations with OpenAI, Anthropic and n8n. First voice AI agents deployed for enterprise support teams." },
  { y: "2024", t: "Scaled the team", d: "Grew to a senior team of engineers, ML specialists and business analysts across three time zones." },
  { y: "2025", t: "100+ automations in production", d: "Crossed 100 systems live in production across healthcare, logistics, real estate and professional services." },
  { y: "2026", t: "Enterprise practice", d: "Launched dedicated enterprise practice — private model deployments, SOC 2 program, custom AI infrastructure." },
];

const TEAM = [
  { n: "Adaeze Okoro", r: "Founder & Principal", hue: "from-primary/40 to-primary/10" },
  { n: "Julian Reyes", r: "Head of AI Engineering", hue: "from-fuchsia-500/30 to-primary/10" },
  { n: "Nadia Berg", r: "Head of Automation", hue: "from-emerald-500/30 to-primary/10" },
  { n: "Samir Farouk", r: "Solutions Architect", hue: "from-amber-500/30 to-primary/10" },
  { n: "Maya Chen", r: "Design Systems Lead", hue: "from-sky-500/30 to-primary/10" },
  { n: "Ethan Voss", r: "Client Partner", hue: "from-violet-500/30 to-primary/10" },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Otax"
        title={<>We build the automation layer <span className="text-muted-foreground">modern businesses run on.</span></>}
        description="Otax Technologies is a senior AI automation consultancy. We help operators eliminate repetitive work, ship intelligent systems, and grow without adding headcount."
      />

      {/* Mission / Vision */}
      <section className="pb-20">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card-elevated p-10 h-full">
              <Eyebrow>Mission</Eyebrow>
              <p className="mt-6 text-2xl md:text-3xl font-medium tracking-tight leading-snug text-balance">
                Give every business the operational leverage of a company ten times its size — through AI systems that actually work in production.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-elevated p-10 h-full">
              <Eyebrow>Vision</Eyebrow>
              <p className="mt-6 text-2xl md:text-3xl font-medium tracking-tight leading-snug text-balance">
                A world where teams focus on the work that requires judgment, and everything else runs quietly in the background.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 hairline-t">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Our story" title="Started with a simple observation." />
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>Most businesses know exactly where their operational drag lives. What they don't have is a partner who can turn that instinct into a system — one that ships, runs reliably, and improves with time.</p>
            <p>We started Otax because the market was full of two extremes: agencies selling generic "AI transformation" decks, and freelancers duct-taping automations that broke the moment a business grew. We wanted the honest middle: a senior team, embedded in the details, treating automation as engineering discipline.</p>
            <p>Four years later, we've shipped hundreds of systems for operators who care about the numbers. This is the work we love.</p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 hairline-t">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="Small, senior teams. Clear scopes. Systems that actually ship."
            description="We don't sell you a junior team behind a slide deck. Every engagement is led by a principal engineer with delivery accountability."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { t: "Embedded, not remote", d: "We work as an extension of your team — same tools, same standups, same accountability." },
              { t: "Fixed-scope engagements", d: "Every phase is bounded, priced and measured. No open-ended retainers, no scope drift." },
              { t: "Built to be handed off", d: "Documentation, runbooks and internal enablement are part of every deliverable." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <div className="card-elevated p-8 h-full">
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">0{i + 1}</div>
                  <h3 className="mt-4 text-xl font-medium tracking-tight">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 hairline-t">
        <div className="container-x">
          <SectionHeading eyebrow="Core values" title="Non-negotiables." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 40}>
                <div className="card-elevated card-elevated-hover p-8 h-full">
                  <v.icon size={20} className="text-primary" />
                  <h3 className="mt-6 text-lg font-medium tracking-tight">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 hairline-t">
        <div className="container-x">
          <SectionHeading eyebrow="Timeline" title="From two people to a senior automation practice." />
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hairline" />
            <div className="space-y-10">
              {TIMELINE.map((e, i) => (
                <Reveal key={e.y} delay={i * 40}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                    <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                      <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-primary shadow-[0_0_16px_var(--color-primary)]" />
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{e.y}</div>
                      <div className="mt-2 text-xl font-medium tracking-tight">{e.t}</div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md md:inline-block">{e.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 hairline-t">
        <div className="container-x">
          <SectionHeading eyebrow="Team" title="The people you'll actually work with." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <div key={m.n} className="card-elevated card-elevated-hover p-6">
                <div className={`aspect-[4/5] rounded-xl bg-gradient-to-br ${m.hue} relative overflow-hidden border border-hairline`}>
                  <div className="absolute inset-0 grid-lines opacity-30" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div className="h-16 w-16 rounded-full bg-background/50 backdrop-blur border border-hairline" />
                  </div>
                </div>
                <div className="mt-5 text-lg font-medium tracking-tight">{m.n}</div>
                <div className="text-sm text-muted-foreground">{m.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24 hairline-t">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why businesses trust us"
            title="We treat your business like our own."
            description="Senior delivery, private deployments, security by default. That's the baseline — not the pitch."
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
