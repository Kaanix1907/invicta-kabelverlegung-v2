/**
 * Screenshot-Tool für INVICTA Kabelverlegung
 * Usage: node screenshot.mjs [url] [label] [--mobile]
 * Default: http://localhost:3000
 */
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

const url    = process.argv[2] || 'http://localhost:3000';
const label  = process.argv[3] || 'desktop';
const mobile = process.argv.includes('--mobile');

const outDir = './screenshots';
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const existing = readdirSync(outDir).filter(f => f.endsWith('.png'));
const n = existing.length + 1;
const filename = join(outDir, `screenshot-${n}-${label}.png`);

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(600);

// Scroll through the whole page so IntersectionObserver/useInView triggers for all sections
const pageHeight = await page.evaluate(() => document.body.scrollHeight);
const viewportHeight = mobile ? 844 : 900;
const steps = Math.ceil(pageHeight / viewportHeight);

for (let i = 0; i <= steps; i++) {
  await page.evaluate((y) => window.scrollTo(0, y), i * viewportHeight);
  await page.waitForTimeout(120);
}

// Scroll back to top for the screenshot
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);

await page.screenshot({ path: filename, fullPage: true });

await browser.close();
console.log(`Screenshot saved: ${filename}`);
