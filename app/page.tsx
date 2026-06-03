import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';
import Scripts from '@/components/Scripts';

export default function Home() {
  return (
    <>
      <header id="site-header" className="site-header fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="site-container flex items-center justify-between h-16 md:h-24">
          <div className="hidden md:flex w-1/3 items-center">
            <button className="text-white text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/10 backdrop-blur-sm group">
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text="SK">
                  SK
                </span>
              </span>
            </button>
          </div>
          <div className="flex-1 md:w-1/3 flex justify-start md:justify-center">
            <a href="#" className="text-xl md:text-2xl font-extrabold tracking-tight text-white font-heading">
              Naj-strecha s.r.o.
            </a>
          </div>
          <div className="flex md:w-1/3 justify-end items-center">
            <button
              id="menu-toggle"
              className="text-white text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-white/10 backdrop-blur-sm group"
            >
              <div className="w-4 flex flex-col gap-1">
                <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                <span className="w-full h-[1.5px] bg-white rounded-full"></span>
              </div>
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text="Menu">
                  Menu
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-overlay"
        className="fixed top-0 inset-x-0 h-screen md:h-[60vh] z-[60] bg-brown flex flex-col overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-b border-white/10"
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/assets/texture.svg')",
            backgroundSize: 'cover',
            filter: 'invert(1)',
            opacity: 0.3,
          }}
        ></div>
        <div className="relative z-10 site-container flex items-center justify-between h-24 shrink-0">
          <div className="w-1/3 flex items-center">
            <button className="text-white text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/10">
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text="SK">
                  SK
                </span>
              </span>
            </button>
          </div>
          <div className="w-1/3 flex justify-center">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white font-heading">
              Naj-strecha s.r.o.
            </span>
          </div>
          <div className="w-1/3 flex justify-end">
            <button
              id="menu-close"
              className="text-white text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-white/10 group"
            >
              <span className="relative w-4 h-4 flex items-center justify-center">
                <span className="absolute w-full h-[1.5px] bg-white rotate-45 rounded-full"></span>
                <span className="absolute w-full h-[1.5px] bg-white -rotate-45 rounded-full"></span>
              </span>
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text="Zavrieť">
                  Zavrieť
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="relative z-10 flex-1 flex items-center pb-8 overflow-y-auto">
          <div className="site-container w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            <div className="hidden md:flex flex-col gap-10 w-full md:w-1/2 md:pl-8 pt-4">
              <div>
                <span className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 block">Kontaktujte nás</span>
                <a
                  href="tel:+421 940 776 203"
                  className="text-white hover:text-white/70 transition-colors text-2xl font-light block group"
                >
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="+421 940 776 203">
                      +421 940 776 203
                    </span>
                  </span>
                </a>
                <a
                  href="mailto:najstrecha@centrum.sk"
                  className="text-white hover:text-white/70 transition-colors text-2xl font-light mt-3 block group"
                >
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="najstrecha@centrum.sk">
                      najstrecha@centrum.sk
                    </span>
                  </span>
                </a>
              </div>
              <div>
                <span className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 block">Sídlo firmy</span>
                <span className="text-white/80 text-xl font-light block">
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="Kósu Schoppera 8">
                      Kósu Schoppera 8
                    </span>
                  </span>
                </span>
                <span className="text-white/80 text-xl font-light block mt-2">
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="Rožňava 048 01">
                      Rožňava 048 01
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
              <nav className="flex flex-col gap-5">
                <a
                  href="#top"
                  className="menu-link text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight block group font-bold"
                >
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="O nás">
                      O nás
                    </span>
                  </span>
                </a>
                <a
                  href="#o-nas"
                  className="menu-link text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight block group font-bold"
                >
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="Naše služby">
                      Naše služby
                    </span>
                  </span>
                </a>
                <a
                  href="#tvorba"
                  className="menu-link text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight block group font-bold"
                >
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="Galeria">
                      Galeria
                    </span>
                  </span>
                </a>
                <a
                  href="#referencie"
                  className="menu-link text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight block group font-bold"
                >
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="Kontakt">
                      Kontakt
                    </span>
                  </span>
                </a>
                <a
                  href="#kontakt"
                  className="menu-link text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight block group font-bold"
                >
                  <span className="hover-split-text">
                    <span className="hover-split-text-inner" data-text="Ochrana údajov">
                      Ochrana údajov
                    </span>
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

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
                      className="group flex justify-center bg-brown/90 hover:bg-brown backdrop-blur-md text-white text-center px-16 py-6 rounded-md transition-colors border border-white/10 uppercase tracking-[0.2em] text-sm font-medium w-full sm:w-auto min-w-[280px]"
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
                    style={{ background: '#272220' }}
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
                <div className="fade-in group bg-brown text-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="img-hover-zoom h-72 relative">
                    <img
                      src="/assets/service4.jpg"
                      alt="Eternitové, plechové a šindľové strechy"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div
                      className="image-curtain absolute inset-0 bg-brown z-20"
                      style={{ transition: 'opacity 1s ease-out' }}
                    ></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3">Eternitové, plechové a šindľové strechy</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Pokrývame, opravujeme a izolujeme eternitové, plechové aj šindľové strechy. Postaráme sa o kompletnú
                      obnovu strešného plášťa – od zamerania až po finálnu krytinu.
                    </p>
                  </div>
                </div>
                <div className="fade-in delay-100 group bg-brown text-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="img-hover-zoom h-72 relative">
                    <img
                      src="/assets/service1.jpg"
                      alt="Izolácia striech"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div
                      className="image-curtain absolute inset-0 bg-brown z-20"
                      style={{ transition: 'opacity 1s ease-out' }}
                    ></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3">Izolácia striech</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Bezdemontážna renovácia a izolácia striech bitúmenovou krytinou s estetickým efektom škridle. Ľahká,
                      dokonale vodeodolná a odolná voči UV žiareniu.
                    </p>
                  </div>
                </div>
                <div className="fade-in delay-200 group bg-brown text-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="img-hover-zoom h-72 relative">
                    <img
                      src="/assets/sluzba-ploche.jpg"
                      alt="Ploché strechy a tepelná izolácia"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div
                      className="image-curtain absolute inset-0 bg-brown z-20"
                      style={{ transition: 'opacity 1s ease-out' }}
                    ></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3">Ploché strechy a tepelná izolácia</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Oprava a montáž plochých striech vrátane tepelnej izolácie. Zaistíme správne vyspádovanie,
                      spoľahlivú hydroizoláciu a dlhú životnosť strechy.
                    </p>
                  </div>
                </div>
                <div className="fade-in group bg-brown text-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="img-hover-zoom h-72 relative">
                    <img
                      src="/assets/service2.jpg"
                      alt="Oprava komínov"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div
                      className="image-curtain absolute inset-0 bg-brown z-20"
                      style={{ transition: 'opacity 1s ease-out' }}
                    ></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3">Oprava komínov</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Profesionálna oprava a údržba komínov a ostatných strešných prvkov pre tesnú a bezpečnú strechu.
                    </p>
                  </div>
                </div>
                <div className="fade-in delay-100 group bg-brown text-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="img-hover-zoom h-72 relative">
                    <img
                      src="/assets/service3.jpg"
                      alt="Odkvapové systémy"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div
                      className="image-curtain absolute inset-0 bg-brown z-20"
                      style={{ transition: 'opacity 1s ease-out' }}
                    ></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3">Odkvapové systémy</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Montáž a výmena odkvapových systémov pre správny odvod dažďovej vody a ochranu fasády domu.
                    </p>
                  </div>
                </div>
                {/* TODO: nahradiť obrázok fotkou z Facebooku (fúkaná/striekaná izolácia). Dočasne použitý existujúci záber. */}
                <div className="fade-in delay-200 group bg-brown text-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="img-hover-zoom h-72 relative">
                    <img
                      src="/assets/ref1.jpg"
                      alt="Fúkaná a striekaná izolácia"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div
                      className="image-curtain absolute inset-0 bg-brown z-20"
                      style={{ transition: 'opacity 1s ease-out' }}
                    ></div>
                    <span className="absolute top-4 left-4 z-30 text-[11px] uppercase tracking-widest bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                      Letná sezóna
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3">Fúkaná a striekaná izolácia</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Fúkaná a striekaná izolácia striech a podkroví – rýchle a efektívne zateplenie. Sezónna služba
                      dostupná iba počas letných mesiacov.
                    </p>
                  </div>
                </div>
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
                <div className="flex items-end justify-between mb-10">
                  <div>
                    <div className="divider mb-6"></div>
                    <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight">Realizácie</h2>
                    <p className="text-muted mt-3">
                      Pracujeme na celom východnom Slovensku, vrátane Liptova a Oravy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fade-in-scale relative">
                <button
                  id="slider-left"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  id="slider-right"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <div id="ref-slider" className="ref-slider">
                  <div className="ref-card group">
                    <img src="/assets/ref1.jpg" alt="Izolácia plechovej strechy" />
                    <div className="ref-card-overlay">
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Strecha</p>
                      <h3 className="text-lg font-medium">Izolácia plechovej strechy</h3>
                      <p className="text-sm text-white/80 mt-1">Rožňava</p>
                    </div>
                  </div>
                  <div className="ref-card group">
                    <img src="/assets/ref2.jpg" alt="Oprava komína" />
                    <div className="ref-card-overlay">
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Komín</p>
                      <h3 className="text-lg font-medium">Oprava komína</h3>
                      <p className="text-sm text-white/80 mt-1">Rimavská Sobota</p>
                    </div>
                  </div>
                  <div className="ref-card group">
                    <img src="/assets/ref3.jpg" alt="Montáž odkvapového systému" />
                    <div className="ref-card-overlay">
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Odkvapy</p>
                      <h3 className="text-lg font-medium">Montáž odkvapového systému</h3>
                      <p className="text-sm text-white/80 mt-1">Lučenec</p>
                    </div>
                  </div>
                  <div className="ref-card group">
                    <img src="/assets/ref4.jpg" alt="Rekonštrukcia eternitovej strechy" />
                    <div className="ref-card-overlay">
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Eternit</p>
                      <h3 className="text-lg font-medium">Rekonštrukcia eternitovej strechy</h3>
                      <p className="text-sm text-white/80 mt-1">Veľký Krtíš</p>
                    </div>
                  </div>
                  <div className="ref-card group">
                    <img src="/assets/ref5.jpg" alt="Izolácia bitumenovou kritinou" />
                    <div className="ref-card-overlay">
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Strecha</p>
                      <h3 className="text-lg font-medium">Izolácia bitumenovou kritinou</h3>
                      <p className="text-sm text-white/80 mt-1">Liptov</p>
                    </div>
                  </div>
                  <div className="ref-card group">
                    <img src="/assets/ref6.jpg" alt="Údržba komínového systému" />
                    <div className="ref-card-overlay">
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Komín</p>
                      <h3 className="text-lg font-medium">Údržba komínového systému</h3>
                      <p className="text-sm text-white/80 mt-1">Orava</p>
                    </div>
                  </div>
                </div>
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
                    style={{ background: '#272220' }}
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

          <footer id="kontakt" className="relative text-white mt-auto overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="/assets/footerBg.jpg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-brown/40 via-brown/90 to-brown"></div>
            </div>
            <div className="relative z-10">
              <div className="site-container pt-32 pb-16 text-center">
                <div className="fade-in">
                  <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 font-bold tracking-tight">
                    Máte záujem o strechu?
                  </h2>
                  <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                    Kontaktujte nás pre osobné stretnutie a zameranie vašej strechy.
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <a
                      href="tel:+421 940 776 203"
                      className="btn-primary group uppercase tracking-widest text-xs font-medium"
                      style={{ background: 'white', color: '#272220' }}
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
                        <a href="#top" className="text-white/60 hover:text-white transition-colors text-base group block">
                          <span className="hover-split-text">
                            <span className="hover-split-text-inner" data-text="O nás">
                              O nás
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#o-nas"
                          className="text-white/60 hover:text-white transition-colors text-base group block"
                        >
                          <span className="hover-split-text">
                            <span className="hover-split-text-inner" data-text="Služby">
                              Služby
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#tvorba"
                          className="text-white/60 hover:text-white transition-colors text-base group block"
                        >
                          <span className="hover-split-text">
                            <span className="hover-split-text-inner" data-text="Galeria">
                              Galeria
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#referencie"
                          className="text-white/60 hover:text-white transition-colors text-base group block"
                        >
                          <span className="hover-split-text">
                            <span className="hover-split-text-inner" data-text="Kontakt">
                              Kontakt
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <Link
                          href="/clanok"
                          className="text-white/60 hover:text-white transition-colors text-base group block"
                        >
                          <span className="hover-split-text">
                            <span className="hover-split-text-inner" data-text="Článok">
                              Článok
                            </span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-white/70">Služby</h4>
                    <ul className="space-y-4 text-base text-white/60">
                      <li>Izolácia striech</li>
                      <li>Oprava komínov</li>
                      <li>Montáž odkvapov</li>
                      <li>Bitumenová krytina</li>
                      <li>Eternitové strechy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm uppercase tracking-wider mb-6 text-white/70">Kontakt</h4>
                    <ul className="space-y-4 text-base text-white/60">
                      <li>Kósu Schoppera 8</li>
                      <li>Rožňava 048 01</li>
                      <li className="pt-2">
                        <a href="tel:+421 940 776 203" className="hover:text-white transition-colors block">
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
        </div>
      </main>

      <CtaBanner />
      <Scripts />
    </>
  );
}
