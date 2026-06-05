import type { Metadata } from 'next';
import ReferencieContent from './ReferencieContent';

export const metadata: Metadata = {
  title: 'Naše realizácie – Naj-strecha s.r.o.',
  description: 'Prehľad našich prác, rekonštrukcií striech, izolácií a klampiarskych detailov na východnom Slovensku.',
};

export default function ReferenciePage() {
  return <ReferencieContent />;
}
