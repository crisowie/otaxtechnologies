import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal } from "../components/primitives";
import { FinalCTA } from "./index";
import {
  ShieldCheck, Home, GraduationCap, Truck, ShoppingBag,
  Factory, Scale, Landmark, UtensilsCrossed,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — AI Automation Across Sectors | Otax Technologies" },
      { name: "description", content: "How AI automation reshapes healthcare, real estate, education, logistics, retail, manufacturing, legal, finance and hospitality." },
    ],
  }),
});

const INDUSTRIES = [
  { icon: ShieldCheck, name: "Healthcare", head: "Take administrative work off the clinic.",
    body: "Automated intake, insurance verification, appointment reminders and post-visit follow-up — inside your EHR, compliant with your policies.",
    uses: ["Voice AI intake", "Automated triage", "Prior-auth workflows"] },
  { icon: Home, name: "Real Estate", head: "Never miss another lead.",
    body: "24/7 qualification, showing coordination and nurture — integrated with your CRM and calendar so every serious buyer gets a response in seconds.",
    uses: ["Lead qualification agents", "Showing automation", "Listing follow-up"] },
  { icon: GraduationCap, name: "Education", head: "Free your team from repetitive admin.",
    body: "Automated student support, enrollment workflows and personalized outreach — with instructors kept in the loop, not replaced.",
    uses: ["Enrollment bots", "Grading assistants", "Student support AI"] },
  { icon: Truck, name: "Logistics", head: "Turn dispatch from firefighting into system.",
    body: "Exception classification, carrier orchestration and shipment communication — automated across your entire network.",
    uses: ["Exception automation", "Carrier orchestration", "Shipment tracking bots"] },
  { icon: ShoppingBag, name: "Retail & Ecommerce", head: "Personalization at the scale of your catalog.",
    body: "AI merchandising, support automation and returns handling — deployed across your storefront, help center and internal ops.",
    uses: ["AI merchandising", "Support automation", "Returns handling"] },
  { icon: Factory, name: "Manufacturing", head: "Bring your shop floor into the data layer.",
    body: "Document AI for QA, procurement automation and workflow orchestration between ERP, MES and supplier systems.",
    uses: ["QA document AI", "Procurement automation", "ERP/MES orchestration"] },
  { icon: Scale, name: "Legal", head: "Where privacy and precision are non-negotiable.",
    body: "Private-deployment AI for intake, discovery, contract review and matter management — with full auditability.",
    uses: ["Intake automation", "Contract review", "Matter management AI"] },
  { icon: Landmark, name: "Finance", head: "Compliant AI, from onboarding to reporting.",
    body: "KYC automation, document processing, portfolio analytics and client communication — inside your compliance envelope.",
    uses: ["KYC & AML automation", "Statement processing", "Client comms AI"] },
  { icon: UtensilsCrossed, name: "Hospitality", head: "Guest experience that doesn't sleep.",
    body: "Voice AI concierge, reservation automation and post-stay outreach — across every property, in every language.",
    uses: ["AI concierge", "Reservation automation", "Guest feedback AI"] },
];

function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={<>Industry expertise is <span className="text-muted-foreground">the difference between a demo and production.</span></>}
        description="We've shipped automation across regulated, high-stakes environments. Here's how AI shows up in the industries we know best."
      />

      <section className="pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 60}>
              <div className="card-elevated card-elevated-hover p-8 h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg border border-hairline bg-surface flex items-center justify-center">
                    <ind.icon size={18} className="text-primary" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{ind.name}</div>
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-balance">{ind.head}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ind.body}</p>
                <div className="mt-auto pt-6">
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">Common use cases</div>
                  <ul className="space-y-1.5">
                    {ind.uses.map((u) => (
                      <li key={u} className="text-sm text-foreground/85 flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" /> {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
