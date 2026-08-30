import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-display text-xl font-semibold text-ink">Uraan</span>
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-clay">
              Digital
            </span>
          </Link>

          <div className="hidden items-center gap-7 font-body text-sm text-inksoft lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-ink font-medium" }}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-body text-sm font-medium text-cream ring-1 ring-ink/10 transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Free Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex size-10 items-center justify-center rounded-full text-ink ring-1 ring-sandline lg:hidden"
            >
              <span className="grid gap-1.5">
                <span
                  className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span className={`block h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
                <span
                  className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="border-t border-sandline bg-cream lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-ink font-medium" }}
                className="rounded-xl px-3 py-2.5 font-body text-sm text-inksoft transition-colors hover:bg-sand"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 font-body text-sm font-medium text-cream"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
