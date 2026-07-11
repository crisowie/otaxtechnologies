import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Reveal } from "../components/primitives";
import { FinalCTA } from "./index";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
  head: () => ({
    meta: [
      { title: "Insights — AI, Automation & Business Growth | Otax Technologies" },
      { name: "description", content: "Practical writing on AI systems, automation architecture and business growth from the team at Otax Technologies." },
    ],
  }),
});

const CATEGORIES = ["All", "AI", "Automation", "Business Growth", "Technology", "Case Studies", "Tutorials"] as const;

const FEATURED = {
  cat: "AI",
  date: "March 12, 2026",
  read: "12 min",
  title: "The AI systems that actually get to production — and the ones that don't.",
  desc: "Most AI projects die between the prototype and the pilot. Here's the pattern behind the ones that survive, drawn from four years of shipping AI into real businesses.",
};

const POSTS = [
  { cat: "Automation", date: "Feb 28, 2026", read: "8 min", title: "Why 'agentic' workflows still need boring plumbing.",
    desc: "Observability, retries, dead-letter queues. Autonomy without engineering discipline is just an incident waiting to happen." },
  { cat: "Business Growth", date: "Feb 14, 2026", read: "6 min", title: "The ROI framework we use to price automation engagements.",
    desc: "How to translate hours saved and errors avoided into a number that survives a CFO conversation." },
  { cat: "Technology", date: "Jan 30, 2026", read: "10 min", title: "Voice AI in production: what actually works in 2026.",
    desc: "Latency budgets, model selection, handoff patterns and the small details that separate 'demo good' from 'call center good'." },
  { cat: "Case Studies", date: "Jan 21, 2026", read: "9 min", title: "How Loop Logistics cut dispatch cost 22% with AI classification.",
    desc: "A step-by-step teardown of a live exception-handling system running across 14 carriers." },
  { cat: "Tutorials", date: "Jan 12, 2026", read: "14 min", title: "Building a private company assistant on your own data.",
    desc: "A production-grade blueprint using Anthropic, Chroma, Supabase and a small React front end." },
  { cat: "AI", date: "Dec 20, 2025", read: "7 min", title: "Prompt engineering is a design discipline. Treat it that way.",
    desc: "Version control, evaluation harnesses and the review process we use on every client engagement." },
  { cat: "Business Growth", date: "Dec 4, 2025", read: "5 min", title: "The three automations every services business should ship first.",
    desc: "If you can only build three, build these — they compound faster than anything else." },
  { cat: "Technology", date: "Nov 20, 2025", read: "11 min", title: "Choosing the right model in a market that changes weekly.",
    desc: "Our internal rubric for picking OpenAI, Anthropic or an open-weights model — updated quarterly." },
];

function InsightsPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = cat === "All" ? POSTS : POSTS.filter((p) => p.cat === cat);

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={<>Notes from the field.</>}
        description="Practical writing on AI systems, automation architecture and the business decisions around them. Written by the people building the systems."
      />

      <section className="pb-8">
        <div className="container-x">
          <Reveal>
            <Link to="/insights" className="card-elevated card-elevated-hover overflow-hidden grid lg:grid-cols-[1.1fr_1fr] group">
              <div className="p-8 md:p-12 order-2 lg:order-1">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="text-primary">Featured</span><span>·</span><span>{FEATURED.cat}</span><span>·</span><span>{FEATURED.read}</span>
                </div>
                <h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-balance">{FEATURED.title}</h2>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">{FEATURED.desc}</p>
                <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{FEATURED.date}</span>
                  <span className="inline-flex items-center gap-1 text-foreground group-hover:text-primary transition-colors">Read article <ArrowUpRight size={12} /></span>
                </div>
              </div>
              <div className="relative order-1 lg:order-2 min-h-[280px] lg:min-h-0 border-b lg:border-b-0 lg:border-l border-hairline bg-surface/30 overflow-hidden">
                <div className="absolute inset-0 grid-lines opacity-40" />
                <div className="absolute inset-0 grain-bg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-40 w-40 rounded-full bg-primary/20 border border-primary/40 blur-md" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs transition-colors border ${
                  cat === c ? "bg-primary text-primary-foreground border-transparent" : "border-hairline text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 40}>
                <Link to="/insights" className="card-elevated card-elevated-hover p-8 h-full flex flex-col">
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-3">
                    <span className="text-primary">{p.cat}</span><span>·</span><span>{p.read}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-medium tracking-tight text-balance">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-auto pt-8 flex items-center justify-between text-xs text-muted-foreground hairline-t">
                    <span className="pt-4">{p.date}</span>
                    <span className="pt-4 inline-flex items-center gap-1 text-foreground">Read <ArrowUpRight size={12} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
