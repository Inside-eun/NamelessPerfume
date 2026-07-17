import Image from "next/image";

type HeroProps = {
  imageUrl: string | null;
};

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section className="relative aspect-video w-full bg-hero-bg sm:aspect-21/9">
      {imageUrl ? (
        <Image src={imageUrl} alt="" fill className="object-cover" priority />
      ) : (
        <div className="h-full w-full bg-linear-to-br from-zinc-300 via-zinc-400 to-zinc-500" />
      )}
    </section>
  );
}
