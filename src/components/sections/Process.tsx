import { processSection } from "@/lib/staticContent/process";

export function Process() {
  return (
    <section className="w-full bg-ink px-6 sm:px-10 py-20 text-paper">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-serif text-sm tracking-[0.2em]">
            {processSection.title}
          </h2>
          <p className="mt-2 text-xs text-subtitle">{processSection.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14">
          {processSection.steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="font-serif text-3xl text-subtitle">
                {step.number}
              </span>
              <h3 className="text-sm font-semibold">{step.title}</h3>
              <p className="text-xs leading-relaxed text-paper/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
