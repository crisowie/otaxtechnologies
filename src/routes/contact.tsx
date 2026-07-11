import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal, Eyebrow } from "../components/primitives";
import { useState } from "react";
import { Mail, MapPin, Calendar, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Book a Strategy Call | Otax Technologies" },
      { name: "description", content: "Book a 30-minute strategy call with Otax Technologies. Discuss AI automation, workflow design and custom AI systems." },
    ],
  }),
});

const FAQ = [
  { q: "How quickly can you start?", a: "Typically within 1–2 weeks of the discovery call. We keep a small bench of senior engineers reserved for fast starts." },
  { q: "What does a typical engagement cost?", a: "Discovery is complimentary. Audit engagements start at $6,500. Delivery engagements are fixed-scope, typically $18k–$150k depending on system complexity." },
  { q: "Do you work with startups or only enterprise?", a: "Both. We work with well-funded startups from Series A onward and with mid-market and enterprise operators. We're transparent about fit on the first call." },
  { q: "Where does our data live?", a: "By default, inside your infrastructure. We support private deployments on AWS, GCP and Azure, and we can operate under your BAA / DPA." },
  { q: "Do you offer ongoing support?", a: "Yes — every delivery engagement includes 60 days of optimization. After that, monthly retainers or handoff to your internal team." },
  { q: "Which AI models do you use?", a: "The right one for the job. We regularly ship on OpenAI, Anthropic, ElevenLabs and select open-weights models. Model choice is part of the strategy." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={<>Let's talk about the work<br /><span className="text-muted-foreground">your team shouldn't be doing anymore.</span></>}
        description="30-minute call with a principal. No pitch, no obligation — you leave with a map of where automation actually pays off in your business."
      />

      {/* Contact grid */}
      <section className="pb-16">
        <div className="container-x grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="card-elevated p-8 md:p-10"
            >
              <Eyebrow>Send us a note</Eyebrow>
              <h2 className="mt-4 text-2xl md:text-3xl font-medium tracking-tight">Tell us about your business.</h2>
              <p className="mt-2 text-sm text-muted-foreground">We reply within one business day.</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Cole" />
                <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
                <Field label="Company" name="company" placeholder="Acme, Inc." />
                <Field label="Role" name="role" placeholder="COO" />
              </div>
              <div className="mt-5">
                <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground">What are you trying to solve?</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl bg-surface/60 border border-hairline px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-ring transition"
                  placeholder="A short description of the process, team or outcome you'd like to improve."
                />
              </div>
              <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs text-muted-foreground">By submitting, you agree to our privacy terms.</p>
                <button className="btn-primary" type="submit">
                  {sent ? "Message sent — thanks" : "Send message"} <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </Reveal>

          {/* Aside */}
          <div className="space-y-6">
            <Reveal>
              <div className="card-elevated p-8">
                <Eyebrow>Book a call</Eyebrow>
                <h3 className="mt-4 text-xl font-medium tracking-tight">Prefer a calendar?</h3>
                <p className="mt-2 text-sm text-muted-foreground">Grab a 30-minute strategy slot directly.</p>
                <div className="mt-6 rounded-xl border border-hairline bg-surface/40 p-6 grid gap-3 grid-cols-7 text-center text-xs text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <div key={i} className="opacity-60">{d}</div>)}
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div key={i} className={`aspect-square flex items-center justify-center rounded ${i === 12 ? "bg-primary text-primary-foreground" : "hover:bg-surface"}`}>{i + 1}</div>
                  ))}
                </div>
                <button className="mt-6 btn-ghost w-full justify-center">
                  <Calendar size={14} /> Open scheduler
                </button>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-elevated p-8">
                <div className="grid gap-5">
                  <Info icon={Mail} label="Email" value="hello@otax.tech" />
                  <Info icon={MapPin} label="Office" value="88 Wallace Street, Suite 1400 · New York, NY" />
                </div>
                <div className="mt-8 hairline-t pt-6 flex items-center gap-3">
                  <SocialLink icon={Linkedin} />
                  <SocialLink icon={Twitter} />
                  <SocialLink icon={Github} />
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="card-elevated overflow-hidden">
                <div className="relative aspect-[16/10] grid-lines bg-surface/40">
                  <div className="absolute inset-0 grain-bg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--color-primary)]" />
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-full bg-background/70 border border-hairline px-3 py-1 text-[10px] text-muted-foreground">
                    Map · Lower Manhattan
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 hairline-t">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Frequently asked</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight text-balance">Answers before you ask.</h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">Anything else? Drop us a note — a human will reply.</p>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline">
            {FAQ.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 list-none">
                  <span className="text-base md:text-lg font-medium tracking-tight">{f.q}</span>
                  <span className="text-primary text-xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 pr-10 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: any) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.14em] text-muted-foreground" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-surface/60 border border-hairline px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-ring transition"
      />
    </div>
  );
}
function Info({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-lg border border-hairline bg-surface flex items-center justify-center shrink-0">
        <Icon size={16} className="text-primary" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm">{value}</div>
      </div>
    </div>
  );
}
function SocialLink({ icon: Icon }: any) {
  return (
    <a href="#" className="h-9 w-9 rounded-full border border-hairline bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition">
      <Icon size={15} />
    </a>
  );
}
