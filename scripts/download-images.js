const fs = require('fs');
const path = require('path');
const https = require('https');

const CONFIG_PATH = path.join(__dirname, '../content/demo_configs.ts');
const OUTPUT_DIR = path.join(__dirname, '../public/images/orgs');

const IMAGE_MAPPING = {
  'healthcare-impact-1.jpg': 'https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=1200&auto=format&fit=crop',
  'healthcare-programs-1.jpg': 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop',
  'healthcare-programs-2.jpg': 'https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=600&auto=format&fit=crop',
  'healthcare-gallery-1.jpg': 'https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=800&auto=format&fit=crop',
  'animal-impact-1.jpg': 'https://images.unsplash.com/photo-1537151608828-ea2b117b6205?q=80&w=1200&auto=format&fit=crop',
  'animal-programs-1.jpg': 'https://images.unsplash.com/photo-1537151608828-ea2b117b6205?q=80&w=600&auto=format&fit=crop',
  'animal-gallery-1.jpg': 'https://images.unsplash.com/photo-1537151608828-ea2b117b6205?q=80&w=800&auto=format&fit=crop',
  'humanitarian-hero-1.jpg': 'https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=1200&auto=format&fit=crop',
  'humanitarian-programs-1.jpg': 'https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=600&auto=format&fit=crop',
  'humanitarian-gallery-1.jpg': 'https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=800&auto=format&fit=crop',
  'humanitarian-news-1.jpg': 'https://images.unsplash.com/photo-1541256580214-6f4d5a5e2a5c?q=80&w=800&auto=format&fit=crop',
  'faithbased-impact-1.jpg': 'https://images.unsplash.com/photo-1518398046578-8cb5c1fd69d8?q=80&w=1200&auto=format&fit=crop',
  'faithbased-gallery-1.jpg': 'https://images.unsplash.com/photo-1518398046578-8cb5c1fd69d8?q=80&w=800&auto=format&fit=crop',
  'faithbased-news-1.jpg': 'https://images.unsplash.com/photo-1518398046578-8cb5c1fd69d8?q=80&w=800&auto=format&fit=crop',
  'communitydevelopment-about-1.jpg': 'https://images.unsplash.com/photo-1521791136368-1a96752d87a3?q=80&w=800&auto=format&fit=crop',
  'artsculture-hero-1.jpg': 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=1200&auto=format&fit=crop',
  'artsculture-about-1.jpg': 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop',
  'artsculture-programs-1.jpg': 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=600&auto=format&fit=crop',
  'artsculture-gallery-1.jpg': 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop',
  'artsculture-gallery-2.jpg': 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop',
  'artsculture-news-1.jpg': 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=800&auto=format&fit=crop',
  'disasterrelief-hero-1.jpg': 'https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=1200&auto=format&fit=crop',
  'disasterrelief-impact-1.jpg': 'https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=1200&auto=format&fit=crop',
  'disasterrelief-programs-1.jpg': 'https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=600&auto=format&fit=crop',
  'disasterrelief-gallery-1.jpg': 'https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=800&auto=format&fit=crop',
  'disasterrelief-gallery-2.jpg': 'https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=800&auto=format&fit=crop',
  'disasterrelief-news-1.jpg': 'https://images.unsplash.com/photo-1469571486040-af6e03462285?q=80&w=800&auto=format&fit=crop'
};

const FALLBACK_MAPPING = {
  'healthcare-impact-1.jpg': 'stethoscope-and-clinical-care-photo-1505751172876-fa1923c5c528.jpg',
  'healthcare-programs-1.jpg': 'doctor-examining-child-photo-1584515979956-d9f6e5d09982.jpg',
  'healthcare-programs-2.jpg': 'clinical-checkup-equipment-photo-1505751172876-fa1923c5c528.jpg',
  'healthcare-gallery-1.jpg': 'outreach-health-diagnostics-camp-photo-1516574187841-cb9cc2ca948b.jpg',
  
  'animal-impact-1.jpg': 'dog-rescue-rescue-team-operation-photo-1583511655857-d19b40a7a54e.jpg',
  'animal-programs-1.jpg': 'happy-adopted-dog-photo-1587300003388-59208cc962cb.jpg',
  'animal-gallery-1.jpg': 'rescued-dog-at-shelter-photo-1543466835-00a7907e9de1.jpg',
  
  'humanitarian-hero-1.jpg': 'humanitarian-relief-team-meeting-photo-1469571486292-0ba58a3f068b.jpg',
  'humanitarian-programs-1.jpg': 'aid-box-distribution-with-essential-supplies-photo-1593113598332-cd288d649433.jpg',
  'humanitarian-gallery-1.jpg': 'refugee-shelter-site-photo-1595246140625-573b715d11dc.jpg',
  'humanitarian-news-1.jpg': 'food-distribution-grain-bag-drive-photo-1541802645635-11f2286a7482.jpg',
  
  'faithbased-impact-1.jpg': 'community-gathering-photo-1438032005730-c779502df39b.jpg',
  'faithbased-gallery-1.jpg': 'community-gathering-and-outreach-fellowship-photo-1544027993-37dbfe43562a.jpg',
  'faithbased-news-1.jpg': 'community-fellowship-photo-1438032005730-c779502df39b.jpg',
  
  'communitydevelopment-about-1.jpg': 'community-infrastructure-building-project-photo-1541872703-74c5e44368f9.jpg',
  
  'artsculture-hero-1.jpg': 'creative-art-studio-watercolor-painting-photo-1579783902614-a3fb3927b6a5.jpg',
  'artsculture-about-1.jpg': 'paintings-displayed-in-exhibition-photo-1579783902614-a3fb3927b6a5.jpg',
  'artsculture-programs-1.jpg': 'children-painting-and-practicing-art-photo-1513364776144-60967b0f800f.jpg',
  'artsculture-gallery-1.jpg': 'traditional-classical-dance-session-photo-1508700115892-45ecd05ae2ad.jpg',
  'artsculture-gallery-2.jpg': 'traditional-dance-practice-session-photo-1508700115892-45ecd05ae2ad.jpg',
  'artsculture-news-1.jpg': 'free-after-school-art-studio-painting-class-photo-1513364776144-60967b0f800f.jpg',
  
  'disasterrelief-hero-1.jpg': 'emergency-flood-response-rescue-boat-team-photo-1508514177221-188b1cf16e9d.jpg',
  'disasterrelief-impact-1.jpg': 'flood-search-and-rescue-team-deployment-photo-1508514177221-188b1cf16e9d.jpg',
  'disasterrelief-programs-1.jpg': 'search-and-rescue-boat-training-photo-1508514177221-188b1cf16e9d.jpg',
  'disasterrelief-gallery-1.jpg': 'refugee-shelter-site-photo-1595246140625-573b715d11dc.jpg',
  'disasterrelief-gallery-2.jpg': 'tents-under-cold-weather-photo-1595246140625-573b715d11dc.jpg',
  'disasterrelief-news-1.jpg': 'aid-box-distribution-with-essential-supplies-photo-1593113598332-cd288d649433.jpg',
  
  // Capitalized casing variations to ensure complete resolution of case-sensitive imports:
  'disasterRelief-hero-1.jpg': 'emergency-flood-response-rescue-boat-team-photo-1508514177221-188b1cf16e9d.jpg',
  'disasterRelief-impact-1.jpg': 'flood-search-and-rescue-team-deployment-photo-1508514177221-188b1cf16e9d.jpg',
  'disasterRelief-programs-1.jpg': 'search-and-rescue-boat-training-photo-1508514177221-188b1cf16e9d.jpg',
  'disasterRelief-gallery-1.jpg': 'refugee-shelter-site-photo-1595246140625-573b715d11dc.jpg',
  'disasterRelief-gallery-2.jpg': 'tents-under-cold-weather-photo-1595246140625-573b715d11dc.jpg',
  'disasterRelief-news-1.jpg': 'aid-box-distribution-with-essential-supplies-photo-1593113598332-cd288d649433.jpg'
};

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    function get(currentUrl) {
      try {
        const urlParsed = new URL(currentUrl);
        const options = {
          hostname: urlParsed.hostname,
          path: urlParsed.pathname + urlParsed.search,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        };

        https.get(options, (response) => {
          if (
            response.statusCode === 301 ||
            response.statusCode === 302 ||
            response.statusCode === 307 ||
            response.statusCode === 308
          ) {
            const redirectUrl = response.headers.location;
            if (redirectUrl) {
              get(redirectUrl);
              return;
            }
          }

          if (response.statusCode !== 200) {
            reject(new Error(`Failed to get '${currentUrl}' (${response.statusCode})`));
            return;
          }

          const file = fs.createWriteStream(destPath);
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', (err) => {
          reject(err);
        });
      } catch (err) {
        reject(err);
      }
    }

    get(url);
  });
}

function cleanSectionName(section) {
  switch (section) {
    case 'impactStory':
      return 'impact';
    case 'ctaBand':
      return 'cta';
    default:
      return section.toLowerCase();
  }
}

async function main() {
  console.log('Starting image downloader (https-based with User-Agent)...');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }

  // First, check if demo_configs.ts still has Unsplash URLs to download and replace
  const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
  const lines = configContent.split('\n');

  let currentOrg = '';
  let currentSection = '';
  const sectionCounters = {};
  const urlMapping = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const orgMatch = line.match(/^\s*(education|healthcare|animal|environment|humanitarian|faithBased|communityDevelopment|artsCulture|disasterRelief):\s*\{/);
    if (orgMatch) {
      currentOrg = orgMatch[1];
      currentSection = '';
      continue;
    }

    const sectionMatch = line.match(/^\s*(hero|impactStory|about|programs|testimonials|gallery|news|ctaBand):\s*\{/);
    if (sectionMatch) {
      currentSection = cleanSectionName(sectionMatch[1]);
      continue;
    }

    const unsplashMatch = line.match(/https:\/\/images\.unsplash\.com\/[^\s"'\)\,\}]+/g);
    if (unsplashMatch && currentOrg && currentSection) {
      for (const url of unsplashMatch) {
        if (!urlMapping[url]) {
          const counterKey = `${currentOrg}-${currentSection}`;
          sectionCounters[counterKey] = (sectionCounters[counterKey] || 0) + 1;
          const filename = `${currentOrg}-${currentSection}-${sectionCounters[counterKey]}.jpg`;
          const localPath = `/images/orgs/${filename}`;
          urlMapping[url] = { localPath, filename };
        }
      }
    }
  }

  // If there are Unsplash URLs in the config, download and replace them
  if (Object.keys(urlMapping).length > 0) {
    console.log(`Found ${Object.keys(urlMapping).length} Unsplash URLs in ${CONFIG_PATH}`);
    for (const [url, info] of Object.entries(urlMapping)) {
      const destPath = path.join(OUTPUT_DIR, info.filename);
      try {
        console.log(`Downloading: ${url} -> ${destPath}`);
        await downloadImage(url, destPath);
        console.log(`Downloaded ${info.filename}`);
      } catch (err) {
        console.error(`Failed to download ${url}:`, err.message);
      }
    }

    let updatedContent = configContent;
    for (const [url, info] of Object.entries(urlMapping)) {
      const escapedUrl = url.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escapedUrl, 'g');
      updatedContent = updatedContent.replace(regex, info.localPath);
    }
    fs.writeFileSync(CONFIG_PATH, updatedContent, 'utf8');
    console.log('Updated configuration file successfully!');
  } else {
    // If config is already repointed, verify files exist on disk
    console.log('No Unsplash URLs found in config. Verifying files on disk...');
    
    // Copy local fallbacks first
    for (const [filename, fallbackName] of Object.entries(FALLBACK_MAPPING)) {
      const destPath = path.join(OUTPUT_DIR, filename);
      if (!fs.existsSync(destPath)) {
        const fallbackPath = path.join(OUTPUT_DIR, fallbackName);
        if (fs.existsSync(fallbackPath)) {
          try {
            console.log(`Copying local fallback: ${fallbackName} -> ${filename}`);
            fs.copyFileSync(fallbackPath, destPath);
          } catch (err) {
            console.error(`Failed to copy fallback for ${filename}:`, err.message);
          }
        }
      }
    }

    // Download remaining missing files
    for (const [filename, url] of Object.entries(IMAGE_MAPPING)) {
      const destPath = path.join(OUTPUT_DIR, filename);
      if (!fs.existsSync(destPath)) {
        try {
          console.log(`File missing: ${filename}. Downloading from ${url}`);
          await downloadImage(url, destPath);
          console.log(`Downloaded ${filename}`);
        } catch (err) {
          console.error(`Failed to download ${filename}:`, err.message);
        }
      } else {
        console.log(`File exists: ${filename}`);
      }
    }
  }

  console.log('Image synchronization process complete!');
}

main().catch(err => {
  console.error('Fatal error in script:', err);
  process.exit(1);
});
