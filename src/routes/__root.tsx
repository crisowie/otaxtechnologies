import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Error 404</div>
        <h1 className="mt-4 text-6xl font-medium tracking-tight">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium tracking-tight">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Otax Technologies — Automate the Work. Accelerate the Business." },
      {
        name: "description",
        content:
          "AI systems, intelligent workflows and automation that eliminate repetitive work, improve customer experience and help businesses scale without adding cost.",
      },
      { name: "author", content: "Otax Technologies" },
      { property: "og:title", content: "Otax Technologies — Automate the Work. Accelerate the Business." },
      {
        property: "og:description",
        content:
          "AI systems, intelligent workflows and automation that eliminate repetitive work, improve customer experience and help businesses scale without adding cost.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@otaxtech" },
      { name: "twitter:title", content: "Otax Technologies — Automate the Work. Accelerate the Business." },
      { name: "twitter:description", content: "AI systems, intelligent workflows and automation that eliminate repetitive work, improve customer experience and help businesses scale without adding cost." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0794bef3-e3e5-42e7-ad18-177da16dff94/id-preview-eb5e4c79--a90d944e-c8df-49b3-9901-ba43a7d565df.lovable.app-1783782672531.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0794bef3-e3e5-42e7-ad18-177da16dff94/id-preview-eb5e4c79--a90d944e-c8df-49b3-9901-ba43a7d565df.lovable.app-1783782672531.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://www.otaxtechnologies.com/" },
      { rel: "icon", href: "/favicon.svg?v=2", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=2" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
