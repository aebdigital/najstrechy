'use client';

import { useEffect, useState } from 'react';

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

type GalleryLightboxProps = {
  images: GalleryImage[];
};

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'center' | 'next' | 'prev'>('center');
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const currentIndex = activeIndex ?? 0;

  const open = (index: number) => {
    setDirection('center');
    setActiveIndex(index);
  };

  const show = (nextIndex: number, move: 'next' | 'prev') => {
    const last = images.length - 1;
    const normalized = nextIndex < 0 ? last : nextIndex > last ? 0 : nextIndex;
    setDirection(move);
    setActiveIndex(normalized);
  };

  const close = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') show(activeIndex + 1, 'next');
      if (event.key === 'ArrowLeft') show(activeIndex - 1, 'prev');
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, images.length]);

  return (
    <>
      <div id="ref-slider" className="ref-slider" aria-label="Galéria realizácií">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="ref-card group"
            aria-label={`Otvoriť fotografiu realizácie ${index + 1}`}
            onClick={() => open(index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Galéria realizácií">
          <button type="button" className="gallery-lightbox-backdrop" aria-label="Zavrieť galériu" onClick={close} />

          <div className="gallery-lightbox-stage">
            <button
              type="button"
              className="gallery-lightbox-close"
              aria-label="Zavrieť galériu"
              onClick={close}
            >
              ×
            </button>

            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-prev"
              aria-label="Predchádzajúca fotografia"
              onClick={() => show(currentIndex - 1, 'prev')}
            >
              ‹
            </button>

            <div className="gallery-lightbox-frame">
              <img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                className={`gallery-lightbox-image is-${direction}`}
              />
            </div>

            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-next"
              aria-label="Nasledujúca fotografia"
              onClick={() => show(currentIndex + 1, 'next')}
            >
              ›
            </button>

            <div className="gallery-lightbox-thumbs" aria-label="Výber fotografie">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={index === currentIndex ? 'active' : ''}
                  aria-label={`Zobraziť fotografiu realizácie ${index + 1}`}
                  onClick={() => show(index, index > currentIndex ? 'next' : 'prev')}
                >
                  <img src={image.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
