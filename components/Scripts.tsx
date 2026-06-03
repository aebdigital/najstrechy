'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

type SlideText = { title: string; subtitle: string };

const slideTexts: SlideText[] = [
  { subtitle: 'Kvalitné materiály a priame ceny od výrobcu.', title: 'Strechy Rožňava' },
  { subtitle: 'Eternitové, plechové strechy a komíny.', title: 'Izolácie a opravy' },
  { subtitle: 'Renovácia strechy len za 1 až 2 dni.', title: 'Rýchla realizácia' },
];

/**
 * Faithful port of the original scrape's `js/script.js`. All interactions are
 * wired to the markup rendered by the page via DOM ids/classes, then torn down
 * on unmount so React's dev double-invoke doesn't duplicate listeners.
 */
export default function Scripts() {
  useEffect(() => {
    // ----- Lenis smooth scroll -----
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // ----- Header background on scroll -----
    const header = document.getElementById('site-header');
    const onHeaderScroll = () => header?.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onHeaderScroll);

    // ----- Mobile menu -----
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menuLinks = document.querySelectorAll<HTMLElement>('.menu-link');
    const openMenu = () => {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      lenis.stop();
    };
    const closeMenu = () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      lenis.start();
    };
    menuToggle?.addEventListener('click', openMenu);
    menuClose?.addEventListener('click', closeMenu);
    menuLinks.forEach((l) => l.addEventListener('click', closeMenu));

    // ----- Scroll reveal -----
    const fadeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setTimeout(() => en.target.classList.add('visible'), 0);
            fadeObs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll('.fade-in,.fade-in-left,.fade-in-right,.fade-in-scale')
      .forEach((el) => fadeObs.observe(el));

    // ----- Image curtain reveal -----
    const curtainObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            (en.target as HTMLElement).style.opacity = '0';
            curtainObs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '-100px' },
    );
    document.querySelectorAll('.image-curtain').forEach((el) => curtainObs.observe(el));

    // ----- Hero slider -----
    const heroSlides = document.querySelectorAll<HTMLElement>('.hero-slide');
    const slideInds = document.querySelectorAll<HTMLElement>('.slide-ind');
    const heroTitle = document.getElementById('hero-title');
    const heroSub = document.getElementById('hero-sub');
    let cur = 0;
    const goSlide = (i: number) => {
      heroSlides.forEach((s) => s.classList.remove('active'));
      slideInds.forEach((ind) => {
        ind.classList.remove('bg-white', 'w-20');
        ind.classList.add('bg-white/30', 'w-8');
      });
      heroSlides[i]?.classList.add('active');
      slideInds[i]?.classList.remove('bg-white/30', 'w-8');
      slideInds[i]?.classList.add('bg-white', 'w-20');
      if (heroTitle) heroTitle.textContent = slideTexts[i].title;
      if (heroSub) heroSub.textContent = slideTexts[i].subtitle;
      cur = i;
    };
    const indClick = (ind: HTMLElement) => () => goSlide(parseInt(ind.dataset.i || '0', 10));
    const indHandlers = new Map<HTMLElement, () => void>();
    slideInds.forEach((ind) => {
      const h = indClick(ind);
      indHandlers.set(ind, h);
      ind.addEventListener('click', h);
    });
    const slideTimer = setInterval(() => goSlide((cur + 1) % heroSlides.length), 6000);

    // ----- Hero parallax -----
    const onParallax = () => {
      const hp = document.getElementById('hero-parallax');
      if (hp) hp.style.transform = 'translateY(' + window.scrollY * 0.1 + 'px)';
    };
    window.addEventListener('scroll', onParallax);
    window.dispatchEvent(new Event('scroll'));

    // ----- References slider arrows -----
    const refSlider = document.getElementById('ref-slider');
    const sliderLeft = document.getElementById('slider-left');
    const sliderRight = document.getElementById('slider-right');
    const onLeft = () => refSlider?.scrollBy({ left: -500, behavior: 'smooth' });
    const onRight = () => refSlider?.scrollBy({ left: 500, behavior: 'smooth' });
    sliderLeft?.addEventListener('click', onLeft);
    sliderRight?.addEventListener('click', onRight);

    // ----- Analytics: scroll depth -----
    let scrollMarks = [25, 50, 75, 100];
    const onScrollDepth = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (window.scrollY / docHeight) * 100;
      scrollMarks = scrollMarks.filter((mark) => {
        if (pct >= mark) {
          window.plausible?.('Scroll', { props: { depth: mark + '%' } });
          return false;
        }
        return true;
      });
    };
    window.addEventListener('scroll', onScrollDepth);

    // ----- Analytics: time milestones -----
    const t30 = setTimeout(() => window.plausible?.('Time30s'), 30000);
    const t60 = setTimeout(() => window.plausible?.('Time60s'), 60000);
    const t120 = setTimeout(() => window.plausible?.('Time120s'), 120000);

    // ----- Analytics: tel / mail clicks -----
    const telEls = document.querySelectorAll('a[href^="tel:"]');
    const mailEls = document.querySelectorAll('a[href^="mailto:"]');
    const onTel = () => window.plausible?.('PhoneClick');
    const onMail = () => window.plausible?.('EmailClick');
    telEls.forEach((el) => el.addEventListener('click', onTel));
    mailEls.forEach((el) => el.addEventListener('click', onMail));

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('scroll', onHeaderScroll);
      menuToggle?.removeEventListener('click', openMenu);
      menuClose?.removeEventListener('click', closeMenu);
      menuLinks.forEach((l) => l.removeEventListener('click', closeMenu));
      fadeObs.disconnect();
      curtainObs.disconnect();
      indHandlers.forEach((h, ind) => ind.removeEventListener('click', h));
      clearInterval(slideTimer);
      window.removeEventListener('scroll', onParallax);
      sliderLeft?.removeEventListener('click', onLeft);
      sliderRight?.removeEventListener('click', onRight);
      window.removeEventListener('scroll', onScrollDepth);
      clearTimeout(t30);
      clearTimeout(t60);
      clearTimeout(t120);
      telEls.forEach((el) => el.removeEventListener('click', onTel));
      mailEls.forEach((el) => el.removeEventListener('click', onMail));
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, []);

  return null;
}
