import Link from 'next/link';

const navLinks = [
  { href: '/#o-nas', label: 'O nás' },
  { href: '/#tvorba', label: 'Služby' },
  { href: '/#referencie', label: 'Galéria' },
  { href: '/clanok', label: 'Článok' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function SiteHeader() {
  return (
    <header id="site-header" className="site-header fixed top-0 left-0 right-0 z-50 bg-brown/95 backdrop-blur-md border-b border-white/10">
      <div className="site-container flex flex-wrap items-center gap-x-5 gap-y-3 py-3 md:min-h-20">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Naj-strecha s.r.o. - úvod">
          <img
            src="/logo.png"
            alt="Naj-strecha s.r.o."
            className="h-9 w-auto max-w-[205px] object-contain md:h-11 md:max-w-[260px]"
          />
        </Link>

        <nav
          aria-label="Hlavná navigácia"
          className="order-3 flex w-full items-center gap-5 overflow-x-auto whitespace-nowrap text-sm font-extrabold uppercase tracking-[0.1em] text-white/80 md:order-none md:w-auto md:flex-1 md:justify-center md:gap-8 md:overflow-visible md:text-base"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+421940776203"
          className="btn-primary shrink-0 !px-4 !py-2.5 text-xs font-semibold uppercase tracking-[0.16em] md:!px-5"
        >
          Zavolať
        </a>
      </div>
    </header>
  );
}
