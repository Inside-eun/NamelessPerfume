import Image from "next/image";

type HeroProps = {
  headline: string;
  subcopy: string;
  imageUrl: string | null;
};

export function Hero({ headline, subcopy, imageUrl }: HeroProps) {
  return (
    <section className="w-full bg-hero-bg">
      <div className="mx-auto flex max-w-6xl flex-col-reverse sm:flex-row sm:items-center">
        <div className="flex flex-1 flex-col gap-4 px-6 py-12 sm:px-10 sm:py-24">
          <h1 className="whitespace-pre-line font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {headline}
          </h1>
          <p className="text-sm text-muted">{subcopy}</p>
        </div>
        <div className="relative aspect-[4/3] w-full flex-1 sm:aspect-auto sm:h-[420px]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500" />
          )}
        </div>
      </div>
    </section>
  );
}
