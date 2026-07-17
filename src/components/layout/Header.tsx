import Image from 'next/image';

export function Header() {
  return (
    <header className="w-full py-3 px-3 sm:px-10">
      <Image src="/logo/wordmark.png" alt="Name:less Perfume" width={200} height={45} priority />
    </header>
  );
}
