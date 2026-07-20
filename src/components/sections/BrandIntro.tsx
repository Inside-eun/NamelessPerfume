import Image from "next/image";
import { brandIntro } from "@/lib/staticContent/brandIntro";

function CircularLogo() {
  return (
    <Image
      src="/logo/circular-logo.png"
      alt="Name:less Perfume — Personalized Scent Craft"
      width={800}
      height={800}
      className="h-40 w-40 sm:h-48 sm:w-48 shrink-0"
    />
  );
}

export function BrandIntro() {
  return (
    <section className="w-full px-6 sm:px-10 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-16">
        <CircularLogo />
        <div className="flex flex-col gap-5 text-center sm:text-left">
          <h2 className="font-serif text-sm font-bold tracking-[0.2em] text-ink">
            {brandIntro.heading}
          </h2>
          <p className="font-serif text-lg leading-relaxed text-ink">
            &ldquo;{brandIntro.quote}&rdquo;
          </p>
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted">
            {brandIntro.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
