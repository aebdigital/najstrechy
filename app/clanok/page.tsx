import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import SubpageHero from '@/components/SubpageHero';

export const metadata: Metadata = {
  title: 'Najlepšia oprava strechy – Naj-strecha s.r.o.',
  description:
    'Bezdemontážna renovácia a izolácia bridlicových striech bitúmenovou krytinou s efektom škridle. Renovácia za 1 – 2 dni a 15-ročná písomná záruka.',
  robots: { index: false, follow: false },
};

export default function ClanokPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#fafaf8]">
        <SubpageHero
          eyebrow="Z médií · Odborný článok"
          title="Najlepšia oprava strechy"
          summary="O problematike renovácie a opravy striech vám v tomto článku poskytuje informácie Attila Sivoš, konateľ spoločnosti Naj-strecha s.r.o."
          image="/assets/hero3.jpg"
        />

        {/* Body */}
        <section className="section-large fade-up-on-load load-delay-100">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <article className="lg:col-span-7 max-w-2xl">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  Výhody bitúmenovej izolácie
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Bitúmenová izolácia má mnoho výhod. Najdôležitejšie z nich je, že je ľahká – jej hmotnostná záťaž je len
                  4,5 kg/m², je dokonale vodeodolná a maximálne rieši problémy s premoknutím. Navyše je odolná voči ťahu
                  aj UV žiareniu a vďaka vystuženiu sklenenými vláknami je mimoriadne pružná a znáša vysoké teplotné
                  výkyvy. Po zateplení bude strecha mimoriadne estetická a vytvorí efekt podobný škridle.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  Postup je cenovo výhodnejší ako iné rekonštrukcie spojené s demontážou, pretože ušetríte na demontáži
                  starého plášťa a na vysokých nákladoch na dopravu a likvidáciu eternitu. Na rozdiel od demolácie
                  nevzniká nebezpečný bridlicovo-azbestový odpad a strecha nie je ani na chvíľu odkrytá, takže nebude
                  narušený váš každodenný život – renovácia trvá len 1 – 2 dni.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  Overená metóda a kvalitné materiály
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Naši špecialisti úspešne izolujú strechy touto metódou už viac ako 15 rokov. Pracujeme s kvalitnou,
                  priestorovo úspornou a vodotesnou bitúmenovou šindľovou doskou (Villas, INDEX), vyrobenou overenou
                  technológiou. Táto 4,5 mm hrubá doska vystužená sklenými vláknami je vhodná na izoláciu a renováciu
                  existujúcich bridlicových striech, starých šindľových krytín aj na prekrytie starej izolácie.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 tracking-tight">Postup renovácie</h2>
                <p className="text-muted leading-relaxed mb-8">
                  Prvým krokom je vyčistenie celej plochy strechy vhodným spôsobom. Nasleduje upevnenie odkvapového plechu
                  a odstránenie poškodených prvkov. Celý povrch je natretý výplňovým materiálom na bitúmenovej báze pre
                  dokonalú priľnavosť, pričom výplňový prášok je odolný voči UV žiareniu a stálofarebný. Šindľové dosky sa
                  fixujú technológiou tavenia plameňom. Po osadení odvetrania sa oplechujú komíny, svetlíky a strešné
                  výlezy, zakryje sa hrebeň strechy a strecha sa ukončí. Posledným krokom je zber a odvoz odpadu
                  vzniknutého pri obnove.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  Ďalšie dôležité veci, ktoré by ste mali vedieť
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  So zatepľovaním strechy začíname vo vopred dohodnutom čase po obhliadke. Strechu priemerne veľkého
                  rodinného domu vieme zaizolovať za dva dni, bez narušenia okolitého prostredia.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  Možno nepracujeme s najlacnejšími cenami na trhu, no dbáme na to, aby bola naša služba pri použití
                  kvalitnejších materiálov cenovo dostupná pre každého. Naše ceny zahŕňajú materiál aj mzdové náklady
                  súvisiace so stavbou.
                </p>

                <div className="border-l-2 border-accent pl-6 py-1">
                  <p className="text-dark leading-relaxed font-medium">
                    Na nami vykonanú izoláciu striech a renovačné práce poskytujeme 15-ročnú písomnú záruku.
                  </p>
                </div>
              </article>

              {/* Image + CTA */}
              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-28 space-y-8">
                  <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/assets/clanok-strecha.jpg"
                      alt="Najlepšia oprava strechy – článok Naj-strecha s.r.o."
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="bg-brown text-white rounded-2xl p-8">
                    <h3 className="font-heading text-2xl font-bold mb-3">Máte záujem o strechu?</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      Ak sme vzbudili váš záujem, zavolajte nám alebo napíšte e-mail a požiadajte o bezplatnú cenovú
                      ponuku.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="tel:+421 940 776 203"
                        className="btn-primary group uppercase tracking-widest text-xs font-medium text-center"
                        style={{ background: 'white', color: '#144269' }}
                      >
                        <span className="hover-split-text">
                          <span className="hover-split-text-inner" data-text="+421 940 776 203">
                            +421 940 776 203
                          </span>
                        </span>
                      </a>
                      <a
                        href="mailto:najstrecha@centrum.sk"
                        className="btn-outline group uppercase tracking-widest text-xs font-medium text-center"
                        style={{ borderColor: 'white', color: 'white' }}
                      >
                        <span className="hover-split-text">
                          <span className="hover-split-text-inner" data-text="najstrecha@centrum.sk">
                            najstrecha@centrum.sk
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="mt-16">
              <Link
                href="/"
                className="text-muted hover:text-dark transition-colors text-sm uppercase tracking-[0.2em] font-medium"
              >
                ← Späť na úvodnú stránku
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
