const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicon() {
  const svgContent = fs.readFileSync(path.join(__dirname, '../app/icon.svg'));

  // Generate 32x32 PNG for favicon.ico
  const pngBuffer = await sharp(svgContent)
    .resize(64, 64)
    .png()
    .toBuffer();

  // Save to app/favicon.ico, app/icon.png, and public/favicon.ico
  fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), pngBuffer);
  fs.writeFileSync(path.join(__dirname, '../app/icon.png'), pngBuffer);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), pngBuffer);

  console.log('Successfully generated Golden A favicon.ico and icon.png!');
}

generateFavicon().catch(err => {
  console.error(err);
  process.exit(1);
});
