import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="dark-section mt-32">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white">
                <span className="h-1.5 w-1.5 rounded-[2px] bg-[var(--ink)]" />
              </span>
              <span className="text-[15px] font-medium tracking-tight text-foreground">
                Otax Technologies
              </span>
            </Link>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              An AI automation consultancy building intelligent systems that
              remove operational drag and let teams focus on the work that
              actually moves the business.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-7 flex items-center gap-2 rounded-full border border-hairline bg-[var(--surface)] p-1 pl-4 max-w-sm"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground text-foreground"
              />
              <button className="rounded-full bg-white text-[var(--ink)] px-4 py-2 text-xs font-medium hover:bg-white/90 transition">
                Subscribe
              </button>
            </form>
          </div>

          <FooterCol
            title="Services"
            links={[
              ["AI Automation", "/services"],
              ["Workflow Automation", "/services"],
              ["AI Chatbots", "/services"],
              ["Voice AI Agents", "/services"],
              ["CRM Automation", "/services"],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ["About", "/about"],
              ["Process", "/process"],
              ["Case Studies", "/case-studies"],
              ["Industries", "/industries"],
              ["Contact", "/contact"],
            ]}
          />
          <FooterCol
            title="Socials"
            links={[
              ["LinkedIn", "https://www.linkedin.com/company/otax-technologies/"],
            ]}
          />
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-[var(--hairline)]">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Otax Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>SOC 2 aligned</span>
            <span>GDPR ready</span>
            <Link to="/contact" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              hello@otax.tech <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-5 font-medium">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link
              to={to}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
