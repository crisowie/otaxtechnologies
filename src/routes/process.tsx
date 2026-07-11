import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "../components/primitives";
import { FinalCTA } from "./index";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Process — How We Engage | Otax Technologies" },
      { name: "description", content: "The Otax engagement process: discovery, business audit, strategy, development, deployment and optimization." },
    ],
  }),
});

const STEPS = [
  {
    n: "01", t: "Discovery Call", d: "45 minutes with a principal — not a salesperson.",
    detail: "We understand the business, the constraints and the outcome you're trying to move. You leave with a clear read on whether we're the right team for the work.",
    deliverables: ["Opportunity map", "Fit assessment", "Suggested engagement shape"],
  },
  {
    n: "02", t: "Business Audit", d: "A structured look at where automation actually pays off.",
    detail: "We interview the operators, review the tools, and quantify the workflows. The output is a prioritized backlog of automations ranked by ROI and time-to-value.",
    deliverables: ["Workflow inventory", "ROI-ranked backlog", "Risk & compliance map"],
  },
  {
    n: "03", t: "Strategy", d: "Fixed scope, honest timelines, measurable targets.",
    detail: "We design the system architecture, pick the stack, and commit to a delivery plan with clear success metrics for each phase.",
    deliverables: ["System architecture", "Delivery plan", "Success metrics"],
  },
  {
    n: "04", t: "Development", d: "Senior engineering, weekly demos, no black boxes.",
    detail: "We build in your environment, integrated with your tools. Every week you see working software, not slideware — and every decision is explained.",
    deliverables: ["Working system in staging", "Weekly demos", "Documentation as we go"],
  },
  {
    n: "05", t: "Deployment", d: "Real users, real data, real monitoring.",
    detail: "We roll out in phases, with observability from day one — logs, alerts, dashboards. Nothing goes to production without a runbook.",
    deliverables: ["Phased rollout", "Runbooks & alerts", "Team training"],
  },
  {
    n: "06", t: "Optimization", d: "The work isn't done when it ships.",
    detail: "We stay engaged for the first months of production — tuning models, refining prompts, adding scope where the numbers justify it. Then we hand off.",
    deliverables: ["Monthly reviews", "Model & prompt tuning", "Structured handoff"],
  },
];

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engagement process"
        title={<>Six steps from<br />"we should probably automate this" <span className="text-muted-foreground">to a system running in production.</span></>}
        description="A structured, measurable process. No black boxes. No open-ended retainers. Every engagement ends with something your team owns."
      />

      <section className="pb-24">
        <div className="container-x">
          <div className="relative">
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-hairline" />
            <div className="space-y-6">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 40}>
                  <div className="relative pl-16 md:pl-24">
                    <div className="absolute left-6 md:left-10 top-8 -translate-x-1/2 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--color-primary)]" />
                    <div className="card-elevated card-elevated-hover p-8 md:p-10">
                      <div className="grid gap-8 lg:grid-cols-[auto_1fr_1fr] lg:items-start">
                        <div>
                          <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Step</div>
                          <div className="mt-1 text-4xl md:text-5xl font-medium tracking-tight">{s.n}</div>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{s.t}</h3>
                          <p className="mt-2 text-base text-muted-foreground">{s.d}</p>
                          <p className="mt-4 text-sm text-foreground/80 leading-relaxed max-w-lg">{s.detail}</p>
                        </div>
                        <div className="lg:border-l lg:border-hairline lg:pl-8">
                          <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">Deliverables</div>
                          <ul className="space-y-2">
                            {s.deliverables.map((d) => (
                              <li key={d} className="text-sm flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" /> {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
