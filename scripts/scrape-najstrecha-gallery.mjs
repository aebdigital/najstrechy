import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const sourceUrl = 'https://naj-strecha.sk/';
const outDir = 'public/assets/gallery';
const manifestPath = 'app/gallery-images.ts';
const userAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36';

const pageResponse = await fetch(sourceUrl, { headers: { 'user-agent': userAgent } });
if (!pageResponse.ok) {
  throw new Error(`Failed to fetch ${sourceUrl}: ${pageResponse.status} ${pageResponse.statusText}`);
}

const html = await pageResponse.text();
const galleryItems = [
  ...html.matchAll(
    /<a[^>]+class="[^"]*e-gallery-item[^"]*"[^>]+href="([^"]+)"[^>]*data-elementor-lightbox-title="([^"]*)"[^>]*>/g,
  ),
].map((match, index) => ({
  src: match[1].replace(/&amp;/g, '&'),
  title: decodeHtml(match[2]) || `Realizácia ${index + 1}`,
}));

const uniqueItems = [...new Map(galleryItems.map((item) => [item.src, item])).values()];

await mkdir(outDir, { recursive: true });

const manifest = [];

for (const [index, item] of uniqueItems.entries()) {
  const url = new URL(item.src);
  const extension = path.extname(url.pathname) || '.jpg';
  const fileName = `gallery-${String(index + 1).padStart(2, '0')}${extension}`;
  const filePath = path.join(outDir, fileName);

  const response = await fetch(url, { headers: { 'user-agent': userAgent } });
  if (!response.ok) {
    throw new Error(`Failed to download ${url.href}: ${response.status} ${response.statusText}`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(filePath, bytes);

  manifest.push({
    src: `/assets/gallery/${fileName}`,
    alt: `Naj-strecha realizácia ${index + 1}`,
    title: item.title,
  });
}

const module = `export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

export const galleryImages: GalleryImage[] = ${JSON.stringify(manifest, null, 2)};
`;

await writeFile(manifestPath, module);

console.log(`Downloaded ${manifest.length} gallery images to ${outDir}`);

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}
