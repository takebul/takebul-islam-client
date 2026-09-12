import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SVG_CONTENT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="ti-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070c18" />
      <stop offset="50%" stop-color="#0a1224" />
      <stop offset="100%" stop-color="#040711" />
    </linearGradient>

    <!-- Glowing Cyber Border -->
    <linearGradient id="ti-border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.95" />
      <stop offset="45%" stop-color="#38bdf8" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0.5" />
    </linearGradient>

    <!-- Core Radial Glow -->
    <radialGradient id="ti-glow" cx="38%" cy="32%" r="70%">
      <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.4" />
      <stop offset="50%" stop-color="#0284c7" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#040711" stop-opacity="0" />
    </radialGradient>

    <!-- 'T' Glyph Gradient (Electric Cyan to Azure) -->
    <linearGradient id="ti-t-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f2fe" />
      <stop offset="40%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- 'I' Glyph Gradient (Sky to Deep Electric Blue) -->
    <linearGradient id="ti-i-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>

    <!-- Beacon Glow -->
    <radialGradient id="ti-beacon-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="50%" stop-color="#00f2fe" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Ambient Outer Glow shadow -->
  <rect x="3" y="3" width="122" height="122" rx="30" fill="none" stroke="#00f2fe" stroke-width="2" opacity="0.3" filter="blur(3px)" />

  <!-- Chassis Body -->
  <rect x="4" y="4" width="120" height="120" rx="28" fill="url(#ti-bg)" stroke="url(#ti-border)" stroke-width="3.5" />
  <rect x="6" y="6" width="116" height="116" rx="26" fill="url(#ti-glow)" />

  <!-- Cyber Corner Tech Brackets -->
  <path d="M 14 26 L 14 14 L 26 14" stroke="#00f2fe" stroke-width="2.5" stroke-linecap="round" opacity="0.85" />
  <path d="M 114 102 L 114 114 L 102 114" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" opacity="0.85" />

  <!-- ================= THE 'T' GLYPH ================= -->
  <!--
    Crossbar from (25, 33) to (70, 33)
    45° code slash cut from (70, 33) to (56, 47)
    Stem down to y=95 with rounded bottom terminal
  -->
  <path
    d="M 28 33 
       H 69 
       L 56 46 
       H 53 
       V 89 
       C 53 92.5 50.5 95 47 95 
       H 41 
       C 37.5 95 35 92.5 35 89 
       V 46 
       H 28 
       C 25 46 23 44 23 41 
       V 38 
       C 23 35 25 33 28 33 Z"
    fill="url(#ti-t-grad)"
  />

  <!-- ================= THE 'I' GLYPH & PARALLEL SLASH ================= -->
  <!--
    45° angled top cut perfectly parallel to the T terminal:
    From (82, 33) to (69, 46)
    Vertical pillar from x=69 to x=83 descending to y=89 with rounded terminal
  -->
  <path
    d="M 82 33 
       L 68.5 46.5 
       C 67 48 67 50 67 52 
       V 89 
       C 67 92.5 69.5 95 73 95 
       H 79 
       C 82.5 95 85 92.5 85 89 
       V 46 
       L 87.5 43.5 
       C 89.5 41.5 89.5 38 87.5 36 
       L 85.5 34 
       C 84.5 33.3 83.3 33 82 33 Z"
    fill="url(#ti-i-grad)"
  />

  <!-- ================= FLOATING BEACON NODE ================= -->
  <!-- Glowing diamond execution beacon node hovering on top-right -->
  <g transform="translate(92, 21)">
    <circle cx="0" cy="0" r="10" fill="url(#ti-beacon-glow)" opacity="0.6" />
    <rect x="-6" y="-6" width="12" height="12" rx="3" transform="rotate(45)" fill="#00f2fe" />
    <rect x="-3" y="-3" width="6" height="6" rx="1.5" transform="rotate(45)" fill="#ffffff" />
  </g>

  <!-- Central Processor Micro Core Dot -->
  <circle cx="44" cy="62" r="3.5" fill="#ffffff" opacity="0.95" />
  <circle cx="44" cy="62" r="6" stroke="#00f2fe" stroke-width="1.5" opacity="0.5" />
</svg>`;

async function buildFavicons() {
  const rootDir = 'c:/Assignment/my-portfolio/takebul-islam';
  const appDir = path.join(rootDir, 'src/app');
  const publicDir = path.join(rootDir, 'public');

  console.log('Writing SVG master favicons...');
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), SVG_CONTENT, 'utf8');
  fs.writeFileSync(path.join(appDir, 'icon.svg'), SVG_CONTENT, 'utf8');
  fs.writeFileSync(path.join(appDir, 'apple-icon.svg'), SVG_CONTENT, 'utf8');

  // Generate PNG buffers for multiple sizes
  console.log('Generating PNG resolutions...');
  const svgBuffer = Buffer.from(SVG_CONTENT);

  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();

  // Save Apple touch icons & standard pngs
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), png180);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), png192);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), png512);

  // Construct a valid multi-frame ICO file (16x16, 32x32, 48x48)
  console.log('Building multi-resolution ICO file...');
  const images = [
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ];

  const headerSize = 6;
  const dirEntrySize = 16;
  const count = images.length;
  let offset = headerSize + dirEntrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(count, 4); // Count of images

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Image data size
    entry.writeUInt32LE(offset, 12); // Offset to image data
    entries.push(entry);
    offset += img.buffer.length;
  }

  const icoBuffer = Buffer.concat([
    header,
    ...entries,
    ...images.map(img => img.buffer)
  ]);

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('Successfully generated:');
  console.log('- src/app/icon.svg & public/icon.svg');
  console.log('- src/app/apple-icon.svg & src/app/apple-icon.png');
  console.log('- src/app/favicon.ico & public/favicon.ico (' + icoBuffer.length + ' bytes)');
  console.log('- public/icon-192.png & public/icon-512.png');
}

buildFavicons().catch(console.error);
