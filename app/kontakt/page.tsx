import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SubpageHero from '@/components/SubpageHero';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Kontakt – Naj-strecha s.r.o.',
  description: 'Kontakt na Naj-strecha s.r.o. Rožňava. Strešné práce, izolácie, komíny a odkvapové systémy.',
  robots: { index: false, follow: false },
};

export default function KontaktPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#fafaf8]">
        <SubpageHero
          eyebrow="Kontakt"
          title="Dohodnite si obhliadku strechy"
          summary="Zavolajte nám, napíšte e-mail alebo si pripravte základné informácie o streche. Cenu určujeme individuálne po osobnom stretnutí a presnom zameraní."
          image="/assets/hero1.jpg"
        />

        <section className="section-large fade-up-on-load load-delay-100">
          <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 fade-up-on-load load-delay-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <a href="tel:+421940776203" className="rounded-lg bg-white p-6 shadow-sm border border-black/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Telefón</p>
                  <p className="mt-3 font-heading text-2xl font-bold text-brown">+421 940 776 203</p>
                  <p className="mt-2 text-sm text-muted">Najrýchlejší spôsob pre dohodnutie obhliadky.</p>
                </a>
                <a href="mailto:najstrecha@centrum.sk" className="rounded-lg bg-white p-6 shadow-sm border border-black/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">E-mail</p>
                  <p className="mt-3 font-heading text-xl font-bold text-brown">najstrecha@centrum.sk</p>
                  <p className="mt-2 text-sm text-muted">Pošlite fotky strechy, rozmery alebo krátky popis problému.</p>
                </a>
                <div className="rounded-lg bg-white p-6 shadow-sm border border-black/10 md:col-span-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Sídlo firmy</p>
                  <p className="mt-3 font-heading text-2xl font-bold text-brown">Kósu Schoppera 8, Rožňava 048 01</p>
                  <p className="mt-2 text-sm text-muted">
                    Pracujeme na celom východnom Slovensku, vrátane Liptova, Oravy, Veľkého Krtíša, Lučenca a Rimavskej
                    Soboty.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-brown p-8 text-white">
                <h2 className="font-heading text-3xl font-bold">Čo si pripraviť pred telefonátom?</h2>
                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/75">
                  <li>Typ strechy alebo krytiny</li>
                  <li>Miesto realizácie</li>
                  <li>Približnú veľkosť strechy</li>
                  <li>Fotky poškodenia alebo celej strechy</li>
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-5 fade-up-on-load load-delay-300">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-black/10">
                <h2 className="font-heading text-2xl font-bold text-brown">Služby</h2>
                <div className="mt-5 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/sluzby/${service.slug}`}
                      className="block rounded-md border border-black/10 px-4 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 img-hover-zoom rounded-lg overflow-hidden shadow-2xl">
                <img src="/assets/footerBg.jpg" alt="Kontakt Naj-strecha s.r.o." className="h-[360px] w-full object-cover" />
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
