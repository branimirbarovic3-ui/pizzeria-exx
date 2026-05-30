import puppeteer from 'puppeteer';
import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5555;
const distDir = path.join(__dirname, 'dist');
const routes = ['/', '/jelovnik'];

async function runPrerender() {
  if (process.env.VERCEL) {
    console.log('⚠️ Running in Vercel build environment. Skipping Puppeteer prerendering to avoid Chrome dependency issues.');
    process.exit(0);
  }
  console.log('🚀 Starting Custom Prerender process...');

  // 1. Start a local server to serve the dist folder
  const server = exec(`npx sirv dist --port ${PORT}`);
  console.log(`📡 Local server started on port ${PORT}`);

  // Wait a bit for server to be ready
  await new Promise(resolve => setTimeout(resolve, 3000));

  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  for (const route of routes) {
    console.log(`📸 Capturing route: ${route}`);
    const page = await browser.newPage();
    
    // Set a large viewport for better rendering
    await page.setViewport({ width: 1920, height: 1080 });
    
    await page.goto(`http://localhost:${PORT}${route}`, { 
      waitUntil: 'networkidle0',
      timeout: 60000 
    });
    
    // Wait for GSAP and React to settle
    await new Promise(resolve => setTimeout(resolve, 3000));

    const html = await page.content();
    
    const targetDir = path.join(distDir, route === '/' ? '' : route);
    await fs.mkdir(targetDir, { recursive: true });
    
    const filePath = path.join(targetDir, 'index.html');
    await fs.writeFile(filePath, html);
    console.log(`✅ Saved: ${filePath}`);
    await page.close();
  }

  await browser.close();
  server.kill();
  console.log('🏁 Prerender complete! Pizzeria EX is now SEO-ready.');
  process.exit(0);
}

runPrerender().catch(err => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
