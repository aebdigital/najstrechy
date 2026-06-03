import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

mkdirSync('css', { recursive: true });
mkdirSync('js', { recursive: true });

let html = readFileSync('index.original.html', 'utf8');

function take(pattern, label) {
  const match = html.match(pattern);
  if (!match) {
    throw new Error(`Could not find ${label}`);
  }
  html = html.replace(match[0], match.replacement ?? '');
  return match[1].trim();
}

html = html.replace(
  /\s*<script>if\(window\.location\.protocol!=='file:'\)\{document\.write\('<base href="\/naj\.strecha\.sk\/">'\)\}<\/script>\n/,
  '\n'
);

html = html.replace(
  /\s*<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\n\s*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin>\n\s*<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Rethink\+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">\n/,
  '\n'
);

const style = take(/\s*<style>\n([\s\S]*?)\n\s*<\/style>/, 'main style block');
writeFileSync('css/styles.css', `@import url('./fonts.css');\n\n${style}\n`);
html = html.replace('</title>\n', '</title>\n    <link rel="stylesheet" href="css/styles.css">\n');

html = html.replace(
  '<script src="https://cdn.tailwindcss.com"></script>',
  '<script src="js/tailwindcss.js"></script>'
);

const tailwindConfig = take(/\s*<script>\n\s*(tailwind\.config = \{[\s\S]*?\}\}\})\n\s*<\/script>/, 'Tailwind config');
writeFileSync('js/tailwind.config.js', `${tailwindConfig}\n`);
html = html.replace(
  '<script src="js/tailwindcss.js"></script>\n',
  '<script src="js/tailwindcss.js"></script>\n    <script src="js/tailwind.config.js"></script>\n'
);

html = html.replace(
  '<script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"></script>',
  '<script src="js/lenis.min.js"></script>'
);

html = html.replace(
  '<script async src="https://plausible.io/js/pa-UQmVLlXPuzFf5lyCftlC7.js"></script>',
  '<script async src="js/plausible.js"></script>'
);

const analyticsInit = take(/<script>\n([\s\S]*?plausible\.init\(\)\n)<\/script>/, 'Plausible init');
writeFileSync('js/analytics-init.js', `${analyticsInit}\n`);
html = html.replace(
  '<script async src="js/plausible.js"></script>\n',
  '<script async src="js/plausible.js"></script>\n<script src="js/analytics-init.js"></script>\n'
);

const behavior = take(/\s*<script>\n([\s\S]*?const refSlider=document\.getElementById\('ref-slider'\);[\s\S]*?\);\n)\s*<\/script>/, 'site behavior script');
const tracking = take(/<script>\n([\s\S]*?document\.querySelectorAll\('a\[href\^="mailto:"\]'\)[\s\S]*?\);\n)<\/script>/, 'tracking script');
const cta = take(/<script>\n(\(function\(\)\{[\s\S]*?\}\)\(\);\n)<\/script>/, 'CTA script');
writeFileSync('js/script.js', `${behavior}\n\n${tracking}\n\n${cta}`);
html = html.replace('</body>', '<script src="js/script.js"></script>\n</body>');

const assets = [
  'hero1.jpg',
  'hero2.jpg',
  'hero3.jpg',
  'about.jpg',
  'service1.jpg',
  'service2.jpg',
  'service3.jpg',
  'service4.jpg',
  'ref1.jpg',
  'ref2.jpg',
  'ref3.jpg',
  'ref4.jpg',
  'ref5.jpg',
  'ref6.jpg',
  'footerBg.jpg',
];

for (const asset of assets) {
  html = html.replaceAll(`src="${asset}"`, `src="assets/${asset}"`);
}

html = html.replaceAll("url('texture.svg')", "url('assets/texture.svg')");

writeFileSync('index.html', html);
