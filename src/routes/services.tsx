import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Reveal, SectionHeading } from "../components/primitives";
import { FinalCTA } from "./index";
import {
  ArrowRight, Bot, Workflow, MessageSquare, Mic, Users, Cog,
  Brain, FileText, Headphones, Target, CalendarClock, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — AI, Automation & Custom Systems | Otax Technologies" },
      { name: "description", content: "Purpose-built AI automation services: workflow automation, AI chatbots, voice agents, CRM automation, document AI and custom AI systems." },
    ],
  }),
});

const SERVICES = [
  {
    icon: Bot,
    name: "AI Automation",
    desc: "Custom AI systems designed around your business — not generic tools bolted onto your workflow.",
    benefits: ["Eliminate 40–70% of repetitive knowledge work", "Faster, more consistent decisions", "Reduce human error at scale"],
    ideal: "Operators drowning in repetitive knowledge work — support, ops, analysis.",
    stack: ["OpenAI", "Anthropic", "LangChain", "Supabase", "LangGraph"],
  },
  {
    icon: Workflow,
    name: "Workflow Automation",
    desc: "Reliable, observable pipelines that connect your tools and remove the manual glue between them.",
    benefits: ["Cut turnaround time by 60–90%", "Full audit trail on every run", "Scale without adding headcount"],
    ideal: "Teams stitching together Notion, Slack, HubSpot, Airtable and spreadsheets.",
    stack: ["n8n", "Zapier", "Make", "Node.js", "Python", "JavaScript"],
  },
  {
    icon: MessageSquare,
    name: "AI Chatbots",
    desc: "Conversational agents trained on your data, your tone and your policies — deployed anywhere your customers are.",
    benefits: ["Deflect 50–75% of Tier-1 tickets", "Instant answers, 24/7", "Handoffs into human when it matters"],
    ideal: "Support-heavy businesses with predictable question surface area.",
    stack: ["OpenAI", "Pinecone", "Next.js", "Vercel"],
  },
  {
    icon: Mic,
    name: "Voice AI Agents",
    desc: "Human-quality voice agents for inbound and outbound calls — booking, qualification, follow-up and support.",
    benefits: ["Answer 100% of inbound calls", "Consistent qualification and handoff", "Scale outbound without an SDR army"],
    ideal: "Healthcare, real estate, home services and any business with heavy phone volume.",
    stack: ["ElevenLabs", "Vapi", "Retell", "Twilio", "OpenAI"],
  },
  {
    icon: Users,
    name: "CRM Automation",
    desc: "Turn your CRM into a self-driving pipeline — enrichment, scoring, routing and follow-up on autopilot.",
    benefits: ["Higher pipeline coverage per rep", "No leads left cold in the queue", "Cleaner data, better forecasts"],
    ideal: "Sales teams on HubSpot, Salesforce or Pipedrive with pipeline leakage.",
    stack: ["HubSpot API", "Salesforce", "GoHighLevel", "Clay", "n8n"],
  },
  {
    icon: Cog,
    name: "Business Process Automation",
    desc: "Redesign end-to-end processes with automation, AI and clear ownership — from procurement to onboarding.",
    benefits: ["Structural cost reduction, not one-off wins", "Cross-team visibility on every step", "Compounding operational leverage"],
    ideal: "Ops leaders responsible for measurable efficiency targets.",
    stack: ["Custom", "n8n", "Supabase", "PostgreSQL"],
  },
  {
    icon: Brain,
    name: "Internal AI Assistants",
    desc: "Private assistants trained on your company knowledge — accessible to your team, invisible to the outside world.",
    benefits: ["Cut onboarding time in half", "Instant answers on policy, product and process", "Search that actually understands your business"],
    ideal: "Teams over 50 with fragmented internal knowledge.",
    stack: ["Anthropic", "Chroma", "Supabase", "React"],
  },
  {
    icon: FileText,
    name: "Document Processing AI",
    desc: "Extract, classify and route documents at human-level accuracy — invoices, contracts, forms, medical records.",
    benefits: ["90%+ straight-through processing", "Massively reduce manual review", "Structured data from anywhere"],
    ideal: "Finance, legal, healthcare, insurance — anywhere paper still slows the business.",
    stack: ["OpenAI Vision", "Textract", "Python", "PostgreSQL"],
  },
  {
    icon: Headphones,
    name: "Customer Support Automation",
    desc: "AI-first support that answers, escalates and learns — deployed across chat, email and voice.",
    benefits: ["Sub-minute median response", "Consistent tone and quality", "Free up humans for the hard cases"],
    ideal: "Support teams handling >500 tickets per week.",
    stack: ["OpenAI", "Zendesk", "Intercom", "Next.js"],
  },
  {
    icon: Target,
    name: "Lead Qualification Systems",
    desc: "Automated qualification that scores, enriches and routes every inbound lead — before a human touches it.",
    benefits: ["Sales talks only to qualified conversations", "Same-day follow-up on every lead", "Marketing sees what actually converts"],
    ideal: "B2B companies with high inbound volume and long sales cycles.",
    stack: ["Clay", "HubSpot", "OpenAI", "n8n"],
  },
  {
    icon: CalendarClock,
    name: "Appointment Booking Automation",
    desc: "End-to-end scheduling — from first message to calendar invite — across chat, voice and web.",
    benefits: ["Zero no-shows with automated reminders", "24/7 booking coverage", "Sync across every calendar you use"],
    ideal: "Clinics, agencies, service businesses and consultants.",
    stack: ["Cal.com", "Twilio", "Stripe", "Supabase"],
  },
  {
    icon: Sparkles,
    name: "Custom AI Solutions",
    desc: "When off-the-shelf doesn't fit — bespoke AI systems built from the model layer up.",
    benefits: ["Own your IP and your model behavior", "Private deployment, your infrastructure", "Fits your business, not the other way around"],
    ideal: "Companies with proprietary data and regulatory constraints.",
    stack: ["OpenAI", "Anthropic", "AWS", "PostgreSQL"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>Twelve ways to give your team <span className="text-muted-foreground">back its time.</span></>}
        description="Every service is a system, not a feature. Every engagement ends with something running in production — documented, monitored, and owned by your team."
      />

      <section className="pb-24">
        <div className="container-x space-y-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 40}>
              <article className="card-elevated card-elevated-hover overflow-hidden">
                <div className="grid lg:grid-cols-[1.4fr_1fr]">
                  <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-hairline">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg border border-hairline bg-surface flex items-center justify-center">
                        <s.icon size={18} className="text-primary" />
                      </div>
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Service · 0{(i + 1).toString().padStart(2, "0")}</div>
                    </div>
                    <h2 className="mt-6 text-3xl md:text-4xl font-medium tracking-tight">{s.name}</h2>
                    <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">{s.desc}</p>
                    <div className="mt-8">
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">Business benefits</div>
                      <ul className="space-y-2">
                        {s.benefits.map((b) => (
                          <li key={b} className="text-sm flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8">
                      <Link to="/contact" className="btn-primary">Discuss this service <ArrowRight size={14} /></Link>
                    </div>
                  </div>
                  <div className="p-8 md:p-10 bg-surface/30 space-y-8">
                    <div>
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">Ideal for</div>
                      <p className="text-sm text-foreground/90 leading-relaxed">{s.ideal}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">Technology stack</div>
                      <div className="flex flex-wrap gap-2">
                        {s.stack.map((t) => (
                          <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-hairline bg-background text-muted-foreground">{t}</span>
                        ))}
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
