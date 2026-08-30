import { Link } from "@tanstack/react-router";
import { WHATSAPP_DISPLAY } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[36ch]">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-cream">Uraan</span>
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-clay">
                Digital
              </span>
            </div>
            <p className="mt-4 font-body text-sm text-pretty text-cream/60">
              Aapke Business Ki Digital Uraan. Karachi, Pakistan se pooray Pakistan tak.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3 font-body text-sm">
            <Link to="/services" className="transition-colors hover:text-cream">
              Services
            </Link>
            <Link to="/portfolio" className="transition-colors hover:text-cream">
              Portfolio
            </Link>
            <Link to="/case-studies" className="transition-colors hover:text-cream">
              Case Studies
            </Link>
            <Link to="/pricing" className="transition-colors hover:text-cream">
              Pricing
            </Link>
            <Link to="/blog" className="transition-colors hover:text-cream">
              Blog
            </Link>
            <Link to="/contact" className="transition-colors hover:text-cream">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-cream/10 pt-6 font-body text-xs text-cream/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Uraan Digital. All rights reserved.</span>
          <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
        </div>
      </div>
    </footer>
  );
}
