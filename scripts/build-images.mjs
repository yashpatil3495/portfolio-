// Builds optimized portrait assets from the original photos in the project root.
// pic1.jpeg = high-resolution source, pic.png = background-removed cutout (same framing).
// The cutout's alpha mask is upscaled and applied to the high-res photo so the face stays sharp.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const hi = sharp('pic1.jpeg');
const { width, height } = await hi.metadata();

const alpha = await sharp('pic.png')
  .ensureAlpha()
  .extractChannel('alpha')
  .resize(width, height, { kernel: 'lanczos3' })
  // Erode the alpha channel slightly to kill white fringe pixels
  .blur(0.4)
  .linear(1.6, -30) // push semi-transparent edge pixels toward fully transparent
  .raw()
  .toBuffer();

const rgb = await sharp('pic1.jpeg').removeAlpha().raw().toBuffer();
const rgba = Buffer.alloc(width * height * 4);
const BG_R = 7, BG_G = 7, BG_B = 10; // matches --color-ink: #07070a
for (let i = 0; i < width * height; i++) {
  const a = Math.min(255, Math.max(0, alpha[i]));
  // Pre-multiply against the dark background colour so semi-transparent
  // edge pixels blend toward ink rather than white.
  const t = a / 255;
  rgba[i * 4]     = Math.round(rgb[i * 3]     * t + BG_R * (1 - t));
  rgba[i * 4 + 1] = Math.round(rgb[i * 3 + 1] * t + BG_G * (1 - t));
  rgba[i * 4 + 2] = Math.round(rgb[i * 3 + 2] * t + BG_B * (1 - t));
  rgba[i * 4 + 3] = a;
}
const cutout = await sharp(rgba, { raw: { width, height, channels: 4 } }).png().toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(cutout).resize({ width: w }).webp({ quality: 82, alphaQuality: 100, effort: 6 }).toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp(cutout).resize({ height: 600 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="300" font-family="Impact, 'Arial Narrow', sans-serif" font-size="128" fill="#f4f1ec" letter-spacing="4">YASH</text>
        <text x="78" y="352" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="420" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="5">FULL-STACK • AI / LLMS • HACKATHON BUILDER</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${OUT}/og-image.jpg`);
console.log('images built');
