'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import GalleryLightbox from './GalleryLightbox';
import { GalleryImage } from '@/app/gallery-images';

type HomeGallerySliderProps = {
  images: GalleryImage[];
};

export default function HomeGallerySlider({ images }: HomeGallerySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  // We clone images to make the scroll loop "infinite"
  const tripleImages = [...images, ...images, ...images];
  const totalCount = images.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start in the middle set of cloned images
    // Assume average item width of 350px + 24px gap
    const estimateItemWidth = 374;
    el.scrollLeft = estimateItemWidth * totalCount;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const oneSetWidth = el.scrollWidth / 3;

      if (el.scrollLeft < 100) {
        el.scrollLeft += oneSetWidth;
      } else if (el.scrollLeft > maxScroll - 100) {
        el.scrollLeft -= oneSetWidth;
      }
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [totalCount]);

  // Handle drag/swipe scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    el.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.touches[0].pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    el.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleItemClick = (index: number) => {
    if (hasMoved) return; // Don't trigger lightbox if user was dragging
    const originalIndex = index % totalCount;
    setLightboxIndex(originalIndex);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="divider mb-6"></div>
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tight">Realizácie</h2>
          <p className="text-muted mt-3">
            Pracujeme na celom východnom Slovensku, vrátane Liptova a Oravy.
          </p>
        </div>

        <div className="carousel-controls shrink-0 pb-2">
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => scroll('left')}
            aria-label="Predchádzajúca"
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-nav-btn"
            onClick={() => scroll('right')}
            aria-label="Nasledujúca"
          >
            →
          </button>
          <Link href="/referencie" className="carousel-link-btn">
            Referencie <span>→</span>
          </Link>
        </div>
      </div>

      <div className="home-gallery-carousel-wrapper">
        <div
          ref={scrollRef}
          className="home-gallery-carousel"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {tripleImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="home-gallery-item"
              onClick={() => handleItemClick(index)}
            >
              <img src={image.src} alt={image.alt} draggable="false" />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          hideGrid={true}
        />
      )}
    </>
  );
}
