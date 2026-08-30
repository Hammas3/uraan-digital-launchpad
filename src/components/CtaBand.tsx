import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function CtaBand({
  title = "Apni digital uraan aaj shuru karein",
  description = "Ek free consultation book karein — hum aapke business ke liye clear plan banayenge.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <Reveal>
          <div className="rounded-[28px] bg-ink px-8 py-14 text-center ring-1 ring-ink md:px-16">
            <h2 className="mx-auto max-w-[24ch] font-display text-3xl font-medium text-balance text-cream md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] font-body text-sm text-pretty text-cream/70 md:text-base">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-clay px-6 py-3 font-body text-sm font-medium text-cream ring-1 ring-clay transition-opacity hover:opacity-90"
              >
                Free Consultation
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full px-6 py-3 font-body text-sm font-medium text-cream ring-1 ring-cream/25 transition-colors hover:bg-cream/10"
              >
                WhatsApp par baat karein
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
