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
import { Nav } from "../components/Nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center bg-background px-6">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 md:col-start-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            404 — off-score
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,10vw,7rem)] leading-[0.9]">
            This measure is empty.
          </h1>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            The page you asked for isn't part of the current score. Return to the
            index and start again from the top.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 border-b border-copper pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-copper"
          >
            <span>Return to index</span>
            <span>→</span>
          </Link>
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
    <div className="flex min-h-screen items-center bg-background px-6">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 md:col-start-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-copper">
            System fault
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">
            The patch dropped a connection.
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Something went wrong on the wire. You can retry, or return to the index
            and re-enter the score.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="border-b border-copper pb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-copper"
            >
              Retry ↺
            </button>
            <a
              href="/"
              className="border-b border-espresso/40 pb-1 font-mono text-[11px] uppercase tracking-[0.22em]"
            >
              Return to index →
            </a>
          </div>
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
      { title: "Siddharth Biswas — Composer, Performer & Music Technology Researcher" },
      {
        name: "description",
        content:
          "Siddharth Biswas — composer, performer and PhD researcher working with gesture, EEG, camera tracking and interactive systems. Projects, performances, research and writings.",
      },
      { name: "author", content: "Siddharth Biswas" },
      { name: "theme-color", content: "#14100D" },
      { property: "og:title", content: "Siddharth Biswas — Composer & Music Technology Researcher" },
      {
        property: "og:description",
        content:
          "Gesture, EEG, camera tracking and interactive systems — composing new relationships between performer, technology and sound.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
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
      <Nav />
      <Outlet />
    </QueryClientProvider>
  );
}
