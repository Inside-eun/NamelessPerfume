import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faIndustry, faCube } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { servicesSection } from '@/lib/staticContent/services';

const icons: Record<string, IconDefinition> = {
  flask: faFlask,
  industry: faIndustry,
  cube: faCube,
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

        <div className="relative mt-10 h-62.5 w-full overflow-hidden rounded-lg">
          <Image
            src="/image/banner.png"
            alt={servicesSection.title}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {servicesSection.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <FontAwesomeIcon icon={icons[item.icon]} className="h-6 w-6 text-ink" />
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
