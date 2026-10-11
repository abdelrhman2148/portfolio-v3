// Runs axe-core against every page in light and dark, plus the 320px mobile width. Used by `npm run test:a11y`.
import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

const base = 'http://localhost:4321';
const paths = ['/', '/work/pm-01-self-healing/', '/work/pm-02-security-incident/', '/work/pm-03-bedrock/', '/work/pm-04-release-setup/', '/404.html'];
const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
let failures = 0;

for (const scheme of ['light', 'dark']) {
  for (const width of [1280, 320]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 900 });
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: scheme }]);
    for (const path of paths) {
      await page.goto(base + path, { waitUntil: 'networkidle0' });
      // SVG text sits on shape fills axe cannot resolve; those pairs are checked by hand (see docs/A11Y.md).
      await page.evaluate(() => document.querySelectorAll('.fig svg text').forEach((t) => t.remove()));
      await page.evaluate(axeSource);
      const { violations } = await page.evaluate(() => globalThis.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] }));
      for (const v of violations) {
        failures++;
        console.error(`[${scheme} ${width}px] ${path} ${v.id}: ${v.help} (${v.nodes.length})`);
        v.nodes.slice(0, 3).forEach((n) => console.error('   ', n.target.join(' ')));
      }
    }
    await page.close();
  }
}
await browser.close();
console.log(failures ? `${failures} axe violation(s)` : 'axe: 0 violations across light/dark at 1280px and 320px');
process.exit(failures ? 1 : 0);
