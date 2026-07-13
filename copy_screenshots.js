const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\babus\\.gemini\\antigravity\\brain\\d4e606bb-2127-47ff-84ce-966118b549aa';
const destDir = path.join(__dirname, 'docs', 'screenshots');

const files = {
  'homepage_desktop_1783914854497.png': 'homepage-desktop.png',
  'homepage_tablet_1783914893980.png': 'homepage-tablet.png',
  'homepage_mobile_1783914904231.png': 'homepage-mobile.png',
  'gallery_desktop_1783914925007.png': 'gallery-desktop.png',
  'gallery_tablet_1783914933939.png': 'gallery-tablet.png',
  'gallery_mobile_1783914953398.png': 'gallery-mobile.png'
};

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

Object.entries(files).forEach(([srcFile, destFile]) => {
  const srcPath = path.join(srcDir, srcFile);
  const destPath = path.join(destDir, destFile);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${srcFile} -> ${destFile}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});
