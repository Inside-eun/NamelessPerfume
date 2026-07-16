import { brandIntro } from "@/lib/staticContent/brandIntro";

function CircularLogo() {
  return (
    <svg viewBox="0 0 120 120" className="h-40 w-40 sm:h-48 sm:w-48 shrink-0">
      <defs>
        <path id="brandTopArc" d="M 12,60 A 48,48 0 1 1 108,60" />
        <path id="brandBottomArc" d="M 12,60 A 48,48 0 1 0 108,60" />
      </defs>
      <circle
        cx="60"
        cy="60"
        r="59"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <text fontSize="6.5" letterSpacing="1.5" fill="currentColor" className="font-serif">
        <textPath href="#brandTopArc" startOffset="10%">
          NAME:LESS PERFUME
        </textPath>
      </text>
      <text fontSize="6.5" letterSpacing="1.5" fill="currentColor" className="font-serif">
        <textPath href="#brandBottomArc" startOffset="12%">
          PERSONALIZED SCENT CRAFT
        </textPath>
      </text>
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fontSize="26"
        fill="currentColor"
        className="font-serif"
      >
        NP
      </text>
    </svg>
  );
}

export function BrandIntro() {
  return (
    <section className="w-full px-6 sm:px-10 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-16">
        <CircularLogo />
        <div className="flex flex-col gap-5 text-center sm:text-left">
          <h2 className="font-serif text-sm tracking-[0.2em] text-ink">
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
