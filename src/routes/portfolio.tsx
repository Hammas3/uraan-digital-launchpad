import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Pakistani Brands We've Grown | Uraan Digital" },
      {
        name: "description",
        content:
          "E-commerce, restaurant, real estate, clothing, software aur local business projects with real results.",
      },
      { property: "og:title", content: "Portfolio — Uraan Digital" },
      {
        property: "og:description",
        content: "Chhe Pakistani brands, unki services aur unke results.",
      },
    ],
  }),
  component: Portfolio;
});

function Portfolio() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const shown = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Kaam jo numbers mein nazar aata hai"
        description="Har project ke saath services, results aur poori case study — taake aap khud faisla kar sakein."
      />

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 font-body text-sm transition-colors ${
                  active === c
                    ? "bg-ink text-cream"
                    : "bg-cream text-inksoft ring-1 ring-sandline hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60} className="h-full">
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col rounded-[24px] bg-cream p-3 ring-1 ring-black/5 transition-transform hover:-translate-y-1"
                >
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category} project`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full rounded-[16px] object-cover"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <div className="font-body text-xs uppercase tracking-[0.15em] text-clay">
                      {p.category}
                    </div>
                    <h2 className="mt-1 font-body text-lg font-semibold text-ink">{p.name}</h2>
                    <p className="mt-1 font-body text-sm text-pretty text-inksoft">
                      {p.services.join(" + ")}
                    </p>
                    <p className="mt-3 font-body text-sm font-medium text-sagedeep">{p.headline}</p>
                    <span className="mt-5 font-body text-sm font-medium text-ink">
                      Case study parhein →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Aapka brand agla ho sakta hai"
        description="Batayein aap kya bechte hain — hum 48 ghanton mein ek growth plan bhejenge."
      />
    </>
  );
}
