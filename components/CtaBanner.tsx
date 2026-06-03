'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

const bannerStyle: CSSProperties = {
  position: 'fixed',
  bottom: '-110px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 9999,
  transition: 'bottom .5s cubic-bezier(.34,1.56,.64,1)',
  background: '#fff',
  color: '#111',
  padding: '14px 14px 14px 22px',
  borderRadius: '999px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  boxShadow: '0 8px 40px rgba(0,0,0,.18)',
  whiteSpace: 'nowrap',
  border: '1.5px solid #e5e7eb',
};

const btnStyle: CSSProperties = {
  background: '#111',
  color: '#fff',
  padding: '9px 18px',
  borderRadius: '999px',
  fontWeight: 700,
  fontSize: '.78rem',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer',
};

const closeStyle: CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#9ca3af',
  cursor: 'pointer',
  fontSize: '1.3rem',
  padding: '0 4px',
  lineHeight: 1,
  fontFamily: 'sans-serif',
};

/** Sticky CTA banner — faithful port of the original IIFE in `js/script.js`. */
export default function CtaBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const btn = btnRef.current;
    if (!banner || !btn) return;

    let shown = false;
    const showBanner = () => {
      if (shown) return;
      shown = true;
      banner.style.bottom = '24px';
    };
    const t = setTimeout(showBanner, 20000);

    const onScroll = () => {
      const d = document.body.scrollHeight - window.innerHeight;
      if (d > 0 && (window.scrollY / d) * 100 >= 50) showBanner();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onClick = (e: MouseEvent) => {
      e.preventDefault();
      window.plausible?.('BannerCTA');
      banner.style.transition = 'bottom .5s cubic-bezier(.34,1.56,.64,1), opacity .3s ease';
      banner.style.opacity = '0';
      setTimeout(() => {
        banner.innerHTML =
          '<p style="margin:0;font-size:.85rem;font-weight:700;padding:4px 12px;">ďakujeme, budeme Vás kontaktovať 😊</p>';
        banner.style.opacity = '1';
        setTimeout(() => {
          banner.style.bottom = '-110px';
        }, 3500);
      }, 300);
    };
    btn.addEventListener('click', onClick);

    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      btn.removeEventListener('click', onClick);
    };
  }, []);

  const close = () => {
    if (bannerRef.current) bannerRef.current.style.bottom = '-110px';
  };

  return (
    <div ref={bannerRef} id="cta-banner" style={bannerStyle}>
      <p style={{ margin: 0, fontSize: '.85rem', fontWeight: 700 }}>Páči sa mi to</p>
      <a ref={btnRef} id="cta-btn" href="#" style={btnStyle}>
        Ozvite sa mi
      </a>
      <button onClick={close} style={closeStyle} aria-label="Zavrieť">
        ×
      </button>
    </div>
  );
}
