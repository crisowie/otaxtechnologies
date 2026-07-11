import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Reveal, SectionHeading } from "../components/primitives";
import { FinalCTA } from "./index";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
  head: () => ({
    meta: [
      { title: "Case Studies — Otax Technologies" },
      { name: "description", content: "Real automation engagements, real numbers. Selected case studies from Otax Technologies across healthcare, logistics, finance and professional services." },
    ],
  }),
});

const CASES = [
  {
    tag: "Healthcare",
    name: "Northwind Health",
    title: "Automated intake and triage for a 12-clinic network.",
    challenge: "Front-desk staff spent 60% of their time on paper intake, insurance verification and appointment routing — creating 40+ minute wait times and burning out the team.",
    solution: "Deployed a voice AI intake agent integrated with the EHR, plus an automated triage workflow that scored each patient interaction and routed to the right specialist queue.",
    tech: ["OpenAI", "ElevenLabs", "Twilio", "n8n", "Supabase"],
    impact: [
      ["Wait time", "-71%"],
      ["Staff hours saved / week", "218"],
      ["Patient satisfaction", "+34pt"],
    ],
    tone: "voice",
  },
  {
    tag: "Logistics",
    name: "Loop Logistics",
    title: "AI dispatch and shipment-exception automation.",
    challenge: "Dispatch team drowned in 800+ daily shipment exceptions across 14 carriers, each requiring judgment and manual follow-up.",
    solution: "Custom AI classification pipeline that reads exception events, decides remediation, and executes carrier-specific workflows automatically — with human escalation only for edge cases.",
    tech: ["Anthropic", "Python", "PostgreSQL", "n8n"],
    impact: [
      ["Exceptions auto-resolved", "68%"],
      ["Cost per shipment", "-22%"],
      ["Dispatcher headcount held flat while", "3x volume"],
    ],
    tone: "workflow",
  },
  {
    tag: "Financial Services",
    name: "Meridian Advisory",
    title: "Compliant document AI for a wealth advisory firm.",
    challenge: "Onboarding a new client required 6–9 days of manual document processing — statements, KYC, custody forms — with strict regulatory review.",
    solution: "A private document AI pipeline with role-based review queues, full audit trail and compliant handoff to the client relationship team.",
    tech: ["OpenAI Vision", "Python", "PostgreSQL", "AWS"],
    impact: [
      ["Onboarding time", "6 days → 11 hours"],
      ["Straight-through processing", "92%"],
      ["Manual review load", "-78%"],
    ],
    tone: "dashboard",
  },
  {
    tag: "Real Estate",
    name: "Arbor & Co.",
    title: "24/7 lead qualification and appointment booking.",
    challenge: "A high-volume brokerage was losing 30%+ of after-hours leads because there was no one to respond and qualify them in time.",
    solution: "A conversational agent trained on their listings, integrated with the CRM and calendar — qualifying every inbound lead and booking showings the moment they came in.",
    tech: ["OpenAI", "HubSpot", "Cal.com", "Next.js"],
    impact: [
      ["After-hours conversions", "+3.4x"],
      ["Speed-to-first-response", "8 min → 12 sec"],
      ["Booked showings / month", "+412"],
    ],
    tone: "agent",
  },
];

function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title={<>Systems in production. <span className="text-muted-foreground">Numbers we can defend.</span></>}
        description="A selection of engagements — the challenge, the system we shipped, and what changed in the business."
      />

      <section className="pb-24 space-y-8">
        <div className="container-x space-y-8">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 60}>
              <article className="card-elevated overflow-hidden">
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <span>{c.tag}</span><span>·</span><span>Case study · 0{i + 1}</span>
                    </div>
                    <div className="mt-6 text-2xl font-medium text-primary">{c.name}</div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-tight text-balance">{c.title}</h2>

                    <div className="mt-8 grid gap-6">
                      <Block label="Challenge" body={c.challenge} />
                      <Block label="Solution" body={c.solution} />
                    </div>

                    <div className="mt-8">
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">Technology used</div>
                      <div className="flex flex-wrap gap-2">
                        {c.tech.map((t) => (
                          <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-hairline bg-surface text-muted-foreground">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative border-t lg:border-t-0 lg:border-l border-hairline bg-surface/30 p-8 md:p-12">
                    <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
                    <div className="relative">
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Business impact</div>
                      <div className="mt-6 space-y-6">
                        {c.impact.map(([k, v]) => (
                          <div key={k} className="pb-6 hairline-b last:border-0 last:pb-0">
                            <div className="text-3xl md:text-4xl font-medium tracking-tight">{v}</div>
                            <div className="mt-1 text-sm text-muted-foreground">{k}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-10">
                        <Link to="/contact" className="btn-ghost">
                          Talk about a similar system <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">{label}</div>
      <p className="text-base text-foreground/90 leading-relaxed">{body}</p>
    </div>
  );
}
