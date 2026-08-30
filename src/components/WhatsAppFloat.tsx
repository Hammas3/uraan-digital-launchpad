import { whatsappLink } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="floaty fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp pl-4 pr-5 py-3 text-cream shadow-[0_20px_40px_-15px_color-mix(in_oklab,var(--whatsapp)_70%,transparent)] ring-1 ring-black/5"
    >
      <span className="grid size-6 place-items-center rounded-full bg-cream/25">
        <span className="block size-2.5 rounded-full bg-cream" />
      </span>
      <span className="font-body text-sm font-medium">WhatsApp</span>
    </a>
  );
}
