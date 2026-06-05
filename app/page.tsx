import Link from 'next/link';
import HomeGallerySlider from '@/components/HomeGallerySlider';
import Scripts from '@/components/Scripts';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { galleryImages } from './gallery-images';
import { services } from '@/data/services';

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="relative">
        <div className="relative h-screen w-full">
          <section id="top" className="fixed inset-0 w-full h-screen overflow-hidden bg-brown z-0">
            <div id="hero-parallax" className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
              <div className="hero-slide active">
                <img src="/assets/hero1.jpg" alt="Naj-strecha s.r.o." className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="hero-slide">
                <img src="/assets/hero2.jpg" alt="Naj-strecha s.r.o." className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="hero-slide">
                <img src="/assets/hero3.jpg" alt="Naj-strecha s.r.o." className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10 pb-16 pt-64 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
              <div className="site-container w-full flex flex-col justify-end pointer-events-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                  <div className="max-w-7xl">
                    <div className="flex gap-4 mb-10" id="slide-indicators">
                      <button
                        className="slide-ind h-[2px] rounded-full bg-white w-20 transition-all duration-500"
                        data-i="0"
                      ></button>
                      <button
                        className="slide-ind h-[2px] rounded-full bg-white/30 w-8 hover:bg-white/60 transition-all duration-500"
                        data-i="1"
                      ></button>
                      <button
                        className="slide-ind h-[2px] rounded-full bg-white/30 w-8 hover:bg-white/60 transition-all duration-500"
                        data-i="2"
                      ></button>
                    </div>
                    <h1
                      id="hero-title"
                      className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-white mb-8 leading-[1.05] tracking-tight font-bold"
                    >
                      Strechy Rožňava
                    </h1>
                    <p id="hero-sub" className="text-lg md:text-xl text-white/90 font-light max-w-3xl leading-relaxed">
                      Kvalitné materiály a priame ceny od výrobcu.
                    </p>
                  </div>
                  <div className="shrink-0 lg:pb-2">
                    <a
                      href="#kontakt"
                      className="group flex justify-center bg-primary/95 hover:bg-primary-dark backdrop-blur-md text-white text-center px-16 py-6 rounded-md transition-colors border border-white/10 uppercase tracking-[0.2em] text-sm font-medium w-full sm:w-auto min-w-[280px]"
                    >
                      <span className="hover-split-text">
                        <span className="hover-split-text-inner" data-text="Informujte sa u nás">
                          Informujte sa u nás
                        </span>
                      </span>
                      <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="relative z-10 bg-[#fafaf8]">
          <section className="bg-brown text-white py-12 relative z-10">
            <div className="site-container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="fade-in">
                  <div className="text-4xl md:text-5xl font-bold font-heading">15</div>
                  <div className="text-sm text-white/80 mt-1 tracking-wide">rokov na trhu (od 2011)</div>
                </div>
                <div className="fade-in delay-100">
                  <div className="text-4xl md:text-5xl font-bold font-heading">1-2</div>
                  <div className="text-sm text-white/80 mt-1 tracking-wide">dni realizácie</div>
                </div>
                <div className="fade-in delay-200">
                  <div className="text-4xl md:text-5xl font-bold font-heading">15</div>
                  <div className="text-sm text-white/80 mt-1 tracking-wide">rokov písomná záruka</div>
                </div>
                <div className="fade-in delay-300">
                  <div className="text-4xl md:text-5xl font-bold font-heading">Východné Slovensko</div>
                  <div className="text-sm text-white/80 mt-1 tracking-wide">oblasť pôsobenia</div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="o-nas"
            className="section-large relative grain-overlay"
            style={{ backgroundImage: "url('/assets/texture.svg'),linear-gradient(to bottom,#F5F0EB,#fafaf8)" }}
          >
            <div className="site-container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <div className="divider mb-6"></div>
                  <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">O našej firme</h2>
                  <p className="text-muted leading-relaxed text-lg mb-6 font-medium">
                    „Zásadne sa zaoberáme len kvalitnými materiálmi a spoločnosťami s ktorými už dlhodobo
                    spolupracujeme.“
                  </p>
                  <p className="text-muted leading-relaxed mb-4">
                    Spoločnosť Naj-strecha s.r.o. bola založená v roku 2011 a na trhu pôsobí už 15 rokov. Ceny určujeme
                    individuálne na základe osobného stretnutia a presného zamerania strechy.
                  </p>
                  <p className="text-muted leading-relaxed mb-4">
                    Máme vlastných zamestnancov a materiály objednávame priamo od výrobcu, čo nám umožňuje ponúknuť
                    výrazne lepšie ceny. Sme flexibilní, zabezpečujeme priame stretnutia a ponúkame dôchodcovskú zľavu.
                  </p>
                  <p className="text-muted leading-relaxed mb-8">
                    Na nami vykonané izolácie a renovačné práce poskytujeme <strong>15-ročnú písomnú záruku</strong>.
                    Renovácia strechy priemerného rodinného domu trvá len 1 – 2 dni, bez zbytočného narušenia vášho
                    každodenného života.
                  </p>
                  <a
                    href="#kontakt"
                    className="btn-primary group uppercase tracking-widest text-xs font-medium"
                  >
                    <span className="hover-split-text">
                      <span className="hover-split-text-inner" data-text="Zavolajte nám">
                        Zavolajte nám
                      </span>
                    </span>
                  </a>
                </div>
                <div className="fade-in-right">
                  <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl relative">
                    <img
                      src="/assets/about.jpg"
                      alt="O našej firme"
                      className="w-full aspect-[4/3] md:h-[500px] object-cover"
                    />
                    <div
                      className="image-curtain absolute inset-0 bg-brown z-20"
                      style={{ transition: 'opacity 1.2s ease-out' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="tvorba" className="section-large">
            <div className="site-container">
              <div className="fade-in text-center mb-16">
                <div className="divider mx-auto mb-6"></div>
                <h2 className="font-heading text-5xl md:text-7xl mb-6 font-bold tracking-tight">Naše služby</h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Zabezpečujeme komplexné riešenia pre šikmé aj ploché strechy, komíny a izolácie – s dôrazom na
                  kvalitu, rýchlosť a priame ceny od výrobcu.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Link
                    key={service.slug}
                    href={`/sluzby/${service.slug}`}
                    className={`fade-in group bg-brown text-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                      index % 3 === 1 ? 'delay-100' : index % 3 === 2 ? 'delay-200' : ''
                    }`}
                  >
                    <div className="img-hover-zoom h-72 relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div
                        className="image-curtain absolute inset-0 bg-brown z-20"
                        style={{ transition: 'opacity 1s ease-out' }}
                      ></div>
                      <span className="absolute top-4 left-4 z-30 text-[11px] uppercase tracking-widest bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                        {service.eyebrow}
                      </span>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{service.summary}</p>

                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section
            id="referencie"
            className="section-large relative grain-overlay"
            style={{
              backgroundImage: "url('/assets/texture.svg'),linear-gradient(to bottom,#fafaf8,#F9FAFB,#fafaf8)",
            }}
          >
            <div className="site-container">
              <div className="fade-in">
                <HomeGallerySlider images={galleryImages} />
              </div>
            </div>
          </section>

          <section id="clanok" className="section-large relative grain-overlay" style={{ backgroundColor: '#fafaf8' }}>
            <div className="site-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left order-2 lg:order-1">
                  <span className="text-muted text-xs uppercase tracking-[0.2em] mb-4 block">Z médií · Odborný článok</span>
                  <div className="divider mb-6"></div>
                  <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Najlepšia oprava strechy
                  </h2>
                  <p className="text-muted leading-relaxed text-lg mb-4 font-medium">
                    Bezdemontážna renovácia bridlicových striech bitúmenovou izoláciou s efektom škridle.
                  </p>
                  <p className="text-muted leading-relaxed mb-8">
                    Ľahká, vodeodolná a UV odolná izolácia, žiadny nebezpečný azbestový odpad a strecha, ktorá nie je ani
                    na chvíľu odkrytá. Renovácia priemernej strechy trvá len 1 – 2 dni a poskytujeme na ňu 15-ročnú
                    písomnú záruku.
                  </p>
                  <Link
                    href="/clanok"
                    className="btn-primary group uppercase tracking-widest text-xs font-medium"
                  >
                    <span className="hover-split-text">
                      <span className="hover-split-text-inner" data-text="Čítať celý článok">
                        Čítať celý článok
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="fade-in-right order-1 lg:order-2">
                  <Link href="/clanok" className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl relative block">
                    <img
                      src="/assets/clanok-strecha.jpg"
                      alt="Článok – Najlepšia oprava strechy"
                      className="w-full h-[420px] md:h-[560px] object-cover object-top"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>

      <Scripts />
    </>
  );
}
