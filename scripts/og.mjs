// Renders public/og.png (1200x630): the title page as a share image. Run: npm run og
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F4F5F7"/>
  <rect x="60" y="60" width="1080" height="2" fill="#15233F"/>
  <text x="60" y="110" font-family="Courier New, monospace" font-size="22" fill="#545E72">AF-RB-001 · rev 2026.10 · Cairo, Egypt</text>
  <text x="60" y="300" font-family="Georgia, serif" font-size="128" fill="#15233F" letter-spacing="-3">Abdelrhman Fikri</text>
  <text x="60" y="376" font-family="Georgia, serif" font-size="44" font-style="italic" fill="#545E72">DevOps Engineer</text>
  <rect x="60" y="440" width="640" height="48" fill="#F5D9E3"/>
  <text x="72" y="474" font-family="Georgia, serif" font-size="28" fill="#15233F">Open to full-time roles and freelance projects.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('wrote public/og.png');
