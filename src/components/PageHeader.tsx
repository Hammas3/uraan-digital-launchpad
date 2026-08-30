import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_-10%,color-mix(in_oklab,var(--sage)_30%,transparent),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-[52ch]">
          <span className="anim-rise inline-flex rounded-full bg-cream px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-clay ring-1 ring-sandline">
            {eyebrow}
          </span>
          <h1 className="anim-rise mt-6 font-display text-4xl font-medium leading-[1.05] text-balance text-ink md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="anim-rise mt-5 font-body text-base text-pretty text-inksoft md:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
