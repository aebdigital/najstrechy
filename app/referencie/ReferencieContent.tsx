'use client';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SubpageHero from '@/components/SubpageHero';
import GalleryLightbox from '@/components/GalleryLightbox';
import { galleryImages } from '@/app/gallery-images';

export default function ReferencieContent() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#fafaf8]">
        <SubpageHero
          eyebrow="Galéria"
          title="Naše realizácie"
          summary="Prehľad vybraných prác, opráv a rekonštrukcií striech na celom východnom Slovensku."
          image="/assets/hero2.jpg"
        />

        <section className="section-large fade-up-on-load load-delay-100">
          <div className="site-container">
            <GalleryLightbox images={galleryImages} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
