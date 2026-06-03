import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naj-strecha s.r.o. - Strechy Rožňava a východné Slovensko',
  description:
    'Profesionálne strešné práce, izolácie a opravy komínov. Flexibilná firma s vlastnými zamestnancami, rýchla realizácia a priame ceny od výrobcu.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk">
      <body className="antialiased">
        {children}
        {/* Privacy-friendly analytics queue stub (mirrors analytics-init.js). */}
        <Script id="plausible-init" strategy="beforeInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();`}
        </Script>
      </body>
    </html>
  );
}
