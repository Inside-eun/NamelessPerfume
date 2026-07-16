import { servicesSection } from "@/lib/staticContent/services";

const icons: Record<string, React.ReactNode> = {
  droplet: (
    <path
      d="M12 2s7 8.2 7 12.5a7 7 0 1 1-14 0C5 10.2 12 2 12 2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  flask: (
    <path
      d="M9 2v6.5L4 18a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9.5V2M8 2h8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  package: (
    <path
      d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Zm0 0V16l9 4.5m0-9V21m9-13.5V16l-9 4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export function Services() {
  return (
    <section className="w-full px-6 sm:px-10 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-serif text-sm tracking-[0.2em]">
            {servicesSection.title}
          </h2>
          <p className="mt-2 text-xs text-muted">{servicesSection.subtitle}</p>
        </div>

        <div className="mt-10 aspect-[21/9] w-full overflow-hidden rounded-sm bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400" />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {servicesSection.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink">
                {icons[item.icon]}
              </svg>
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              <p className="text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
