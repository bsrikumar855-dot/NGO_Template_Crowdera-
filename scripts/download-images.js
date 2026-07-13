const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, '../content/demo_configs.ts');
const OUTPUT_DIR = path.join(__dirname, '../public/images/orgs');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.statusText}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.promises.writeFile(destPath, buffer);
}

async function main() {
  console.log('Starting image downloader...');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }

  // Read config file
  let configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
  const lines = configContent.split('\n');

  // Find all Unsplash URLs
  const unsplashUrlRegex = /https?:\/\/images\.unsplash\.com\/[^"'\s\)]+/g;
  const urls = [...new Set(configContent.match(unsplashUrlRegex) || [])];

  console.log(`Found ${urls.length} unique Unsplash URLs.`);

  const mapping = {};

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`[${i + 1}/${urls.length}] Processing: ${url}`);

    // Try to find the line containing this URL to extract alt text
    const line = lines.find(l => l.includes(url)) || '';
    const altMatch = line.match(/alt:\s*["']([^"']+)["']/);
    const altText = altMatch ? altMatch[1] : '';

    // Extract photo ID from URL path (e.g. photo-1497633762265-9d179a990aa6)
    const urlObj = new URL(url);
    const photoId = urlObj.pathname.split('/').pop() || `img-${i}`;

    // Create descriptive filename
    let filename = '';
    if (altText) {
      filename = `${slugify(altText)}-${photoId}.jpg`;
    } else {
      filename = `${photoId}.jpg`;
    }

    // Clean up filename to prevent issues
    filename = filename.replace(/[^a-zA-Z0-9\.\-_]/g, '');

    const destPath = path.join(OUTPUT_DIR, filename);
    const localPath = `/images/orgs/${filename}`;

    try {
      console.log(`Downloading to: ${destPath}`);
      await downloadImage(url, destPath);
      mapping[url] = localPath;
      console.log(`Success! Local path: ${localPath}`);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err.message);
    }
  }

  console.log('\n--- URL Mapping Result ---');
  console.log(JSON.stringify(mapping, null, 2));

  // Repoint URLs in config content
  let replacedCount = 0;
  let updatedContent = configContent;
  for (const [unsplashUrl, localPath] of Object.entries(mapping)) {
    // Replace all occurrences of unsplashUrl with localPath
    const regex = new RegExp(unsplashUrl.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    updatedContent = updatedContent.replace(regex, localPath);
    replacedCount++;
  }

  // Save the updated config file
  fs.writeFileSync(CONFIG_PATH, updatedContent, 'utf8');
  console.log(`\nUpdated ${replacedCount} references in ${CONFIG_PATH}`);
  console.log('Image download and repointing completed successfully!');
}

main().catch(err => {
  console.error('Fatal error in script:', err);
  process.exit(1);
});
