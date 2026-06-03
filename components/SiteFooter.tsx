import Link from 'next/link';
import { services } from '@/data/services';

export default function SiteFooter() {
  return (
    <footer id="kontakt" className="relative text-white mt-auto overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/assets/footerBg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/40 via-brown/90 to-brown"></div>
      </div>
      <div className="relative z-10">
        <div className="site-container pt-28 pb-16 text-center">
          <div className="fade-up-on-load">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 font-bold tracking-tight">
              Máte záujem o strechu?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Kontaktujte nás pre osobné stretnutie a zameranie vašej strechy.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:+421940776203"
                className="btn-primary group uppercase tracking-widest text-xs font-medium"
                style={{ background: 'white', color: '#144269' }}
              >
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="Zavolajte nám">
                    Zavolajte nám
                  </span>
                </span>
              </a>
              <a
                href="mailto:najstrecha@centrum.sk"
                className="btn-outline group uppercase tracking-widest text-xs font-medium"
                style={{ borderColor: 'white', color: 'white' }}
              >
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="Napíšte e-mail">
                    Napíšte e-mail
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="site-container pb-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <span className="text-xl md:text-2xl font-extrabold text-white font-heading block mb-6">
                Naj-strecha s.r.o.
              </span>
              <p className="text-white/60 text-sm leading-relaxed">
                Naj-strecha s.r.o. je spoľahlivý partner pre strešné práce s dlhoročnou tradíciou a vlastným tímom.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-white/70">Navigácia</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-white/60 hover:text-white transition-colors text-base group block">
                    Úvod
                  </Link>
                </li>
                <li>
                  <Link href="/#o-nas" className="text-white/60 hover:text-white transition-colors text-base group block">
                    O nás
                  </Link>
                </li>
                <li>
                  <Link href="/#tvorba" className="text-white/60 hover:text-white transition-colors text-base group block">
                    Služby
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#referencie"
                    className="text-white/60 hover:text-white transition-colors text-base group block"
                  >
                    Galéria
                  </Link>
                </li>
                <li>
                  <Link href="/clanok" className="text-white/60 hover:text-white transition-colors text-base group block">
                    Článok
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-white/60 hover:text-white transition-colors text-base group block">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-white/70">Služby</h4>
              <ul className="space-y-4 text-base text-white/60">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/sluzby/${service.slug}`} className="hover:text-white transition-colors">
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-white/70">Kontakt</h4>
              <ul className="space-y-4 text-base text-white/60">
                <li>Kósu Schoppera 8</li>
                <li>Rožňava 048 01</li>
                <li className="pt-2">
                  <a href="tel:+421940776203" className="hover:text-white transition-colors block">
                    +421 940 776 203
                  </a>
                </li>
                <li>
                  <a href="mailto:najstrecha@centrum.sk" className="hover:text-white transition-colors block">
                    najstrecha@centrum.sk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">© 2024 Naj-strecha s.r.o. Všetky práva vyhradené.</p>
            <span className="text-white/40 text-xs">Zásady ochrany osobných údajov</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
