import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight, ArrowRight, Bot, Workflow, MessageSquare, Mic, Users,
  FileText, Target, CalendarClock,
  Truck, GraduationCap, Home, Landmark, Briefcase, ShoppingBag,
  ShieldCheck, Zap, LineChart, UserPlus, Sparkles, CalendarCheck,
  Mail, CreditCard, BarChart3, Check,
} from "lucide-react";
import { Reveal, Eyebrow, SectionHeading } from "../components/primitives";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Otax Technologies — Automate the Work. Accelerate the Business." },
      {
        name: "description",
        content:
          "AI systems, intelligent workflows and automation that eliminate repetitive work, improve customer experience and help businesses scale without adding cost.",
      },
    ],
  }),
});

const TECHS = ["OpenAI", "Anthropic", "n8n", "Supabase", "React", "Next.js", "ElevenLabs", "Stripe", "PostgreSQL"];

const STATS = [
  { v: "142K+", l: "Hours saved for clients" },
  { v: "380+", l: "Processes automated" },
  { v: "63%", l: "Avg. response time reduced" },
  { v: "4.9/5", l: "Customer satisfaction" },
];

const SERVICES = [
  { icon: Bot, title: "AI Automation", desc: "Custom AI systems tailored to how your business actually operates." },
  { icon: Workflow, title: "Workflow Automation", desc: "Replace repetitive ops with reliable, observable pipelines." },
  { icon: MessageSquare, title: "AI Chatbots", desc: "Conversational agents trained on your data and tone." },
  { icon: Mic, title: "Voice AI Agents", desc: "Human-quality voice agents for inbound and outbound calls." },
  { icon: Users, title: "CRM Automation", desc: "Turn your CRM into a self-driving pipeline of qualified revenue." },
  { icon: FileText, title: "Document Processing", desc: "Extract, classify and route documents with human-level accuracy." },
];

const INDUSTRIES = [
  { icon: ShieldCheck, name: "Healthcare" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
  { icon: Home, name: "Real Estate" },
  { icon: Landmark, name: "Finance" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: ShoppingBag, name: "Ecommerce" },
];

const WHY = [
  { icon: Target, title: "Outcomes over features", desc: "Every engagement is measured in hours saved, response times reduced and revenue recovered — not features shipped." },
  { icon: ShieldCheck, title: "Enterprise-grade delivery", desc: "SOC 2 aligned processes, private deployments and role-based access built into every system we ship." },
  { icon: Zap, title: "In production in weeks", desc: "A structured 30-day path from discovery to a working system your team is already using." },
  { icon: LineChart, title: "Compounding ROI", desc: "Systems designed to improve as your data grows, not degrade as your business scales." },
];

const TESTIMONIALS = [
  { quote: "Otax rebuilt our entire lead qualification stack in five weeks. Sales productivity is up 41% and our SDRs finally focus on real conversations.", name: "Priya Anand", role: "VP Revenue, Northwind Health" },
  { quote: "The voice agent they deployed handles 68% of inbound support before it reaches a human. Our CSAT went up, not down.", name: "Marcus Reyes", role: "Head of Support, Loop Logistics" },
  { quote: "A serious team. They understood our regulatory constraints on day one and built an AI workflow we could actually put in front of clients.", name: "Elena Voss", role: "COO, Meridian Advisory" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 -top-40 h-[520px] grain-bg pointer-events-none" />
        <div className="container-x relative">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] items-center">
            <div>
              <Eyebrow>AI Automation Consultancy</Eyebrow>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-[4.75rem] font-medium tracking-tight leading-[1.02] text-balance animate-rise">
                Automate the work.<br />
                <span className="text-muted-foreground">Accelerate the business.</span>
              </h1>
              <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
                We design AI systems, intelligent workflows and automation that
                remove operational drag — so your team can focus on the work
                that actually moves the business forward.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary">
                  Book a strategy call <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-ghost">
                  View services <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="mt-14 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-7 w-7 rounded-full border border-hairline bg-surface-2" />
                  ))}
                </div>
                Trusted by operators shipping AI into production
              </div>
            </div>

            <WorkflowHero />
          </div>
        </div>
      </section>

      {/* TRUSTED TECHNOLOGIES */}
      <section className="py-14 hairline-t hairline-b">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14">
            <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground shrink-0">
              Built on trusted<br className="hidden md:block" /> technologies
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
              {TECHS.map((t) => (
                <span key={t} className="text-lg md:text-xl font-medium tracking-tight text-muted-foreground hover:text-foreground transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Impact by the numbers"
              title="Real systems. Real numbers. Real businesses."
              description="Across dozens of engagements our automation systems compound into measurable operational leverage — not slideware."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 60}>
                <div className="bg-background p-8 md:p-10">
                  <div className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">{s.v}</div>
                  <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32 hairline-t">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we build"
              title="Purpose-built AI systems, not generic tooling."
              description="Every engagement starts with a business outcome. We map the workflow, design the system, and ship it into production."
            />
            <Link to="/services" className="btn-ghost shrink-0">
              All services <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <Link to="/services" className="card-elevated card-elevated-hover p-8 h-full block group">
                  <s.icon size={22} className="text-primary" />
                  <h3 className="mt-6 text-xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    Learn more <ArrowUpRight size={12} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SHOWCASE */}
      <section className="py-24 md:py-32 hairline-t">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="In production"
              title="A glimpse of systems running today."
              description="Dashboards, agents and workflow automations we've shipped for clients across healthcare, logistics and finance."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <ShowcaseCard label="Revenue Ops Dashboard" tone="dashboard" span />
            <ShowcaseCard label="Support AI Agent" tone="agent" />
            <ShowcaseCard label="Workflow Orchestration" tone="workflow" />
            <ShowcaseCard label="CRM Automation" tone="crm" />
            <ShowcaseCard label="Voice Concierge" tone="voice" />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 md:py-32 hairline-t">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Built for the operators who actually run the business."
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
            {INDUSTRIES.map((i) => (
              <div key={i.name} className="bg-background p-6 flex flex-col items-start gap-4 min-h-[140px]">
                <i.icon size={20} className="text-primary" />
                <div className="text-sm font-medium">{i.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/industries" className="btn-ghost">
              Explore industries <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-32 hairline-t">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Otax"
            title="Serious systems, delivered by a team that's been in the room."
            description="We've built AI at scale inside product companies. Otax is what we wished existed on the consulting side — sharp, honest, technically deep."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="card-elevated card-elevated-hover p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg border border-hairline bg-surface flex items-center justify-center shrink-0">
                      <w.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-tight">{w.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 hairline-t">
        <div className="container-x">
          <SectionHeading eyebrow="Client voices" title="Trusted by teams that measure everything." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="card-elevated p-8 h-full flex flex-col">
                  <blockquote className="text-base leading-relaxed text-foreground/90">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 hairline-t">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

// ---------- Signature workflow animation ----------
const STAGES = [
  { key: "lead", label: "Lead", icon: UserPlus, sub: "captured" },
  { key: "qualify", label: "AI Qualify", icon: Sparkles, sub: "scored 92" },
  { key: "crm", label: "CRM", icon: Users, sub: "synced" },
  { key: "schedule", label: "Schedule", icon: CalendarCheck, sub: "booked" },
  { key: "email", label: "Email", icon: Mail, sub: "sent" },
  { key: "billing", label: "Billing", icon: CreditCard, sub: "invoiced" },
] as const;

function WorkflowHero() {
  // Live counters (subtle, slow updates)
  const [runs, setRuns] = useState(12480);
  const [saved, setSaved] = useState(1204);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRuns((r) => r + Math.floor(1 + Math.random() * 3));
      setSaved((s) => s + (Math.random() > 0.6 ? 1 : 0));
    }, 1400);
    const s = setInterval(() => {
      setActive((a) => (a + 1) % STAGES.length);
    }, 1600);
    return () => { clearInterval(t); clearInterval(s); };
  }, []);

  // Mouse parallax
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 6;
    setTilt({ x, y });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full max-w-[560px] mx-auto"
      style={{ perspective: 1200 }}
    >
      <div
        className="relative rounded-3xl border border-hairline bg-surface p-6 md:p-7 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.25),0_2px_6px_-2px_rgba(17,24,39,0.06)] transition-transform duration-300 ease-out"
        style={{ transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)` }}
      >
        {/* header chip */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium">
              Live workflow · revenue ops
            </span>
          </div>
          <span className="text-[11px] text-muted-foreground font-mono">run #{runs}</span>
        </div>

        {/* workflow nodes */}
        <div className="mt-6 grid grid-cols-3 gap-3 relative">
          {STAGES.map((s, i) => {
            const isActive = i === active;
            const isDone = (active + STAGES.length - i) % STAGES.length <= 2 && !isActive;
            return (
              <div
                key={s.key}
                className={`relative rounded-xl border p-3 transition-all duration-500 ${
                  isActive
                    ? "border-primary bg-[color-mix(in_oklab,var(--color-primary)_5%,var(--surface))] shadow-[0_0_0_4px_rgba(37,99,235,0.08)]"
                    : "border-hairline bg-surface"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-7 w-7 rounded-md border flex items-center justify-center transition-colors ${
                      isActive
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-hairline bg-surface-2 text-muted-foreground"
                    }`}
                  >
                    <s.icon size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-medium tracking-tight text-foreground truncate">
                      {s.label}
                    </div>
                    <div className="text-[10.5px] text-muted-foreground truncate">
                      {isActive ? "processing…" : isDone ? s.sub : "queued"}
                    </div>
                  </div>
                  <div className="ml-auto">
                    {isActive ? (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
                    ) : isDone ? (
                      <Check size={12} className="text-[var(--success)]" strokeWidth={3} />
                    ) : (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-hairline" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* animated connecting lines overlay */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            aria-hidden
          >
            <defs>
              <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0" />
                <stop offset="0.5" stopColor="var(--color-primary)" stopOpacity="0.9" />
                <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* analytics panel */}
        <div className="mt-6 rounded-xl border border-hairline bg-surface-2/60 p-4">
          <div className="flex items-center justify-between">
            <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium">
              Analytics · last 24h
            </div>
            <BarChart3 size={13} className="text-muted-foreground" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <Metric label="Runs" value={runs.toLocaleString()} />
            <Metric label="Hours saved" value={saved.toLocaleString()} />
            <Metric label="Success" value="99.6%" />
          </div>
          <div className="mt-4 h-12 relative overflow-hidden">
            <svg viewBox="0 0 300 48" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.25" />
                  <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,36 C30,28 55,40 85,26 C115,14 140,32 170,20 C200,10 230,22 260,14 C280,10 295,16 300,12"
                stroke="var(--color-primary)"
                strokeWidth="1.4"
                fill="none"
              />
              <path
                d="M0,36 C30,28 55,40 85,26 C115,14 140,32 170,20 C200,10 230,22 260,14 C280,10 295,16 300,12 L300,48 L0,48 Z"
                fill="url(#area)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating status chips */}
      <div className="hidden md:flex absolute -left-6 top-16 items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 shadow-[0_10px_30px_-12px_rgba(17,24,39,0.15)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
        <span className="text-[11px] text-foreground/80">Lead qualified</span>
      </div>
      <div className="hidden md:flex absolute -right-4 bottom-24 items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 shadow-[0_10px_30px_-12px_rgba(17,24,39,0.15)]">
        <Check size={11} className="text-[var(--success)]" strokeWidth={3} />
        <span className="text-[11px] text-foreground/80">Invoice sent</span>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-medium tracking-tight tabular-nums">{value}</div>
    </div>
  );
}

function ShowcaseCard({ label, tone, span }: { label: string; tone: string; span?: boolean }) {
  return (
    <div className={`card-elevated overflow-hidden ${span ? "lg:col-span-2 lg:row-span-2" : ""}`}>
      <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden grid-lines">
        <MockVisual tone={tone} />
        <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between hairline-t bg-background/60 backdrop-blur">
          <div className="text-sm font-medium">{label}</div>
          <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Live</span>
        </div>
      </div>
    </div>
  );
}

function MockVisual({ tone }: { tone: string }) {
  if (tone === "dashboard") {
    return (
      <div className="absolute inset-6 rounded-xl border border-hairline bg-background/70 p-6 grid grid-cols-4 gap-4">
        <div className="col-span-1 space-y-2">
          {["Overview", "Pipelines", "Agents", "Data", "Settings"].map((n) => (
            <div key={n} className="text-[10px] text-muted-foreground py-1.5 px-2 rounded bg-surface/40">{n}</div>
          ))}
        </div>
        <div className="col-span-3 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {[["Runs", "12.4K"], ["Saved", "1,204h"], ["Success", "99.6%"]].map(([l, v]) => (
              <div key={l} className="rounded-lg border border-hairline p-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                <div className="mt-1 text-lg font-medium">{v}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-hairline p-4 h-40 relative overflow-hidden">
            <div className="text-[10px] text-muted-foreground">Automation runs · last 30d</div>
            <svg viewBox="0 0 300 100" className="mt-2 w-full h-24">
              <path d="M0,80 C40,60 60,90 90,60 C120,30 150,70 180,50 C210,30 240,50 300,20" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" />
              <path d="M0,80 C40,60 60,90 90,60 C120,30 150,70 180,50 C210,30 240,50 300,20 L300,100 L0,100 Z" fill="url(#g)" opacity="0.25" />
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="var(--color-primary)" />
                  <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (tone === "workflow") {
    return (
      <div className="absolute inset-6 flex items-center">
        <div className="w-full grid grid-cols-5 items-center gap-2">
          {["Trigger", "Enrich", "Classify", "Route", "Respond"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className="flex-1 rounded-md border border-hairline bg-surface/60 p-2 text-[10px] text-center">{s}</div>
              {i < 4 && <div className="w-3 h-px bg-primary/60" />}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (tone === "agent") {
    return (
      <div className="absolute inset-6 flex flex-col gap-2 justify-end">
        {[
          { me: false, t: "Hi — can I move my appointment to Thursday?" },
          { me: true, t: "Of course. I see 10:30 or 14:00 open. Which works?" },
          { me: false, t: "14:00, please." },
          { me: true, t: "Booked. A confirmation is on the way." },
        ].map((m, i) => (
          <div key={i} className={`max-w-[75%] rounded-xl border border-hairline px-3 py-2 text-[11px] ${m.me ? "self-end bg-primary/20 text-foreground" : "self-start bg-surface/70"}`}>{m.t}</div>
        ))}
      </div>
    );
  }
  if (tone === "voice") {
    return (
      <div className="absolute inset-6 flex flex-col items-center justify-center gap-4">
        <div className="h-16 w-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
          <Mic size={22} className="text-primary" />
        </div>
        <div className="flex items-end gap-1 h-10">
          {[6, 14, 22, 30, 22, 14, 24, 32, 20, 12, 8].map((h, i) => (
            <div key={i} className="w-1 bg-primary/70 rounded" style={{ height: h }} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-6 grid grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="rounded border border-hairline bg-surface/40" />
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="dark-section relative overflow-hidden rounded-3xl p-10 md:p-20">
          <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
          <div className="relative max-w-2xl">
            <Eyebrow>Ready when you are</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-6xl font-medium tracking-tight text-balance text-foreground">
              Ready to automate your business?
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Book a 30-minute strategy call. We'll map the highest-ROI automations in your business — no pitch, no obligation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Book a consultation <ArrowRight size={16} /></Link>
              <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-transparent text-foreground px-[1.15rem] py-3 text-[0.9rem] font-medium hover:bg-[var(--surface)] transition-colors">
                See what we've built <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
