import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import SubpageHero from '@/components/SubpageHero';
import { getService, services } from '@/data/services';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getService(params.slug);

  if (!service) {
    return {
      title: 'Služba nebola nájdená – Naj-strecha s.r.o.',
    };
  }

  return {
    title: `${service.title} – Naj-strecha s.r.o.`,
    description: service.summary,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.slug);

  if (!service) notFound();

  const heroImages = ['/assets/hero1.jpg', '/assets/hero2.jpg', '/assets/hero3.jpg'];
  const serviceIndex = services.findIndex((item) => item.slug === service.slug);
  const heroImage = heroImages[Math.max(serviceIndex, 0) % heroImages.length];

  return (
    <>
      <SiteHeader />

      <main className="bg-[#fafaf8]">
        <SubpageHero eyebrow={service.eyebrow} title={service.title} summary={service.summary} image={heroImage} />

        <section className="section-large fade-up-on-load load-delay-100">
          <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-4 xl:col-span-3 fade-up-on-load load-delay-200">
              <div className="lg:sticky lg:top-32">
                <div className="rounded-lg border border-black/10 bg-white p-3 shadow-sm">
                  <p className="px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">Služby</p>
                  <nav className="space-y-1" aria-label="Prepínač služieb">
                    {services.map((item) => {
                      const isActive = item.slug === service.slug;

                      return (
                        <Link
                          key={item.slug}
                          href={`/sluzby/${item.slug}`}
                          className={`block rounded-md px-3 py-3 text-sm font-semibold transition-colors ${
                            isActive
                              ? 'bg-brown text-white'
                              : 'text-dark hover:bg-[#f1f4f6] hover:text-brown'
                          }`}
                        >
                          {item.shortTitle}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                <div className="mt-6 rounded-lg bg-brown p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Kontakt</p>
                  <h2 className="mt-3 font-heading text-2xl font-bold">Potrebujete obhliadku?</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Zavolajte nám a dohodneme osobné stretnutie so zameraním strechy.
                  </p>
                  <a href="tel:+421940776203" className="btn-primary mt-5 !px-5 !py-3 text-sm">
                    +421 940 776 203
                  </a>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-8 xl:col-span-9 fade-up-on-load load-delay-300">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
                <div>
                  <span className="text-muted text-xs uppercase tracking-[0.2em]">Prehľad služby</span>
                  <h2 className="mt-4 font-heading text-3xl md:text-5xl font-bold tracking-tight">{service.title}</h2>
                  <p className="mt-6 text-muted text-lg leading-relaxed">{service.intro}</p>

                  <div className="mt-8 space-y-5">
                    {service.details.map((detail) => (
                      <p key={detail} className="text-muted leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="img-hover-zoom rounded-lg overflow-hidden shadow-2xl">
                  <img src={service.image} alt={service.title} className="h-[360px] w-full object-cover md:h-[480px]" />
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="rounded-lg border border-black/10 bg-white p-5">
                    <span className="text-primary text-xl font-bold">✓</span>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-dark">{feature}</p>
                  </div>
                ))}
              </div>

              {service.beforeAfter && service.beforeAfter.length > 0 && (
                <div className="mt-12 border-t border-black/10 pt-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-8 text-dark">
                    Ukážky prác (Pred / Po)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.beforeAfter.map((item, idx) => (
                      <div key={idx} className="space-y-3">
                        <h3 className="font-semibold text-base text-dark">{item.title}</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative group overflow-hidden rounded-lg shadow-md border border-black/10 bg-white">
                            <span className="absolute top-2 left-2 z-10 bg-primary text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded shadow">
                              Pred
                            </span>
                            <div className="aspect-[4/3] w-full overflow-hidden">
                              <img
                                src={item.before}
                                alt={`${item.title} - pred`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          </div>
                          <div className="relative group overflow-hidden rounded-lg shadow-md border border-black/10 bg-white">
                            <span className="absolute top-2 left-2 z-10 bg-green-600 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded shadow">
                              Po
                            </span>
                            <div className="aspect-[4/3] w-full overflow-hidden">
                              <img
                                src={item.after}
                                alt={`${item.title} - po`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 rounded-lg bg-[#eef3f7] p-8">
                <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">Ako postupujeme</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-[0.2em]">01</p>
                    <h3 className="mt-2 font-semibold">Obhliadka</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">Strechu zameriame osobne a preveríme jej stav.</p>
                  </div>
                  <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-[0.2em]">02</p>
                    <h3 className="mt-2 font-semibold">Návrh riešenia</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Odporučíme vhodný materiál, rozsah prác a termín realizácie.
                    </p>
                  </div>
                  <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-[0.2em]">03</p>
                    <h3 className="mt-2 font-semibold">Realizácia</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Priemernú renováciu strechy zvládame za 1 – 2 dni.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
