import { footerContent } from "@/lib/staticContent/footer";

const iconPaths: Record<string, React.ReactNode> = {
  twitter: (
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
  ),
  instagram: (
    <path d="M12 2.2c2.7 0 3 0 4 .1 1 0 1.7.2 2.1.4a4.2 4.2 0 0 1 1.5 1c.5.4.8.9 1 1.5.2.4.4 1.1.4 2.1.1 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.7-.4 2.1a4.2 4.2 0 0 1-1 1.5 4.2 4.2 0 0 1-1.5 1c-.4.2-1.1.4-2.1.4-1 .1-1.3.1-4 .1s-3 0-4-.1c-1 0-1.7-.2-2.1-.4a4.2 4.2 0 0 1-1.5-1 4.2 4.2 0 0 1-1-1.5c-.2-.4-.4-1.1-.4-2.1-.1-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.7.4-2.1a4.2 4.2 0 0 1 1-1.5 4.2 4.2 0 0 1 1.5-1c.4-.2 1.1-.4 2.1-.4 1-.1 1.3-.1 4-.1ZM12 0C9.3 0 8.9 0 7.9.1c-1.1.1-1.9.2-2.5.5a6.4 6.4 0 0 0-2.3 1.5A6.4 6.4 0 0 0 1.6 4.4C1.3 5 1.2 5.8 1.1 6.9 1 7.9 1 8.3 1 12s0 4.1.1 5.1c.1 1.1.2 1.9.5 2.5a6.4 6.4 0 0 0 1.5 2.3 6.4 6.4 0 0 0 2.3 1.5c.6.3 1.4.4 2.5.5 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1.1-.1 1.9-.2 2.5-.5a6.4 6.4 0 0 0 2.3-1.5 6.4 6.4 0 0 0 1.5-2.3c.3-.6.4-1.4.5-2.5.1-1 .1-1.4.1-5.1s0-3.1-.1-4.1c-.1-1.1-.2-1.9-.5-2.5a6.4 6.4 0 0 0-1.5-2.3A6.4 6.4 0 0 0 19.1.6c-.6-.3-1.4-.4-2.5-.5C15.6 0 15.2 0 12 0Zm0 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 0 0 12 5.8Zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.5a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z" />
  ),
  location: (
    <path d="M12 0C7.6 0 4 3.6 4 8c0 5.6 7 15.3 7.3 15.7a.8.8 0 0 0 1.4 0C13 23.3 20 13.6 20 8c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
  ),
};

export function Footer() {
  return (
    <footer className="w-full bg-ink text-paper px-6 sm:px-10 py-14">
      <div className="flex gap-4">
        {footerContent.socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:border-white/70 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              {iconPaths[link.platform]}
            </svg>
          </a>
        ))}
      </div>
      <div className="mt-8 h-px w-full bg-white/15" />
      <div className="mt-6 flex flex-col gap-1 text-xs leading-relaxed text-footer-muted">
        <p>{footerContent.business.name}</p>
        <p>{footerContent.business.representative}</p>
        <p>{footerContent.business.address}</p>
        <p>{footerContent.business.contact}</p>
        <p>
          {footerContent.business.emailLabel}
          <strong className="font-bold">{footerContent.business.emailValue}</strong>
        </p>
        <p>
          {footerContent.business.registrationNumber}{" "}
          <a
            href={footerContent.business.registrationCheckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-paper transition-colors"
          >
            [사업자정보확인]
          </a>
        </p>
        <p>{footerContent.business.mailOrderNumber}</p>
      </div>
    </footer>
  );
}
