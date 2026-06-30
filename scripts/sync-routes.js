#!/usr/bin/env node
// Scans src/pages/*.tsx for files that export `export const route = '...'`
// and ensures each one has a matching import + <Route> in src/pages/main.tsx.
// Also removes stale imports for files that no longer exist.
// Safe to run multiple times.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(__dirname, '..', 'src', 'pages');
const mainPath = join(pagesDir, 'main.tsx');

const SKIP = new Set(['main.tsx', 'Navbar.tsx', 'Footer.tsx', 'BlogLayout.tsx', 'AnnouncementBanner.tsx']);

function extractRoute(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const match = content.match(/^export const route\s*=\s*['"]([^'"]+)['"]/m);
  return match ? match[1] : null;
}

function extractComponentName(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const match = content.match(/export default function\s+(\w+)/);
  return match ? match[1] : null;
}

const files = readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && !SKIP.has(f));

const pages = [];
for (const file of files) {
  const filePath = join(pagesDir, file);
  const route = extractRoute(filePath);
  const component = extractComponentName(filePath);
  if (route && component) {
    pages.push({ file, route, component, moduleName: basename(file, '.tsx') });
  }
}

let main = readFileSync(mainPath, 'utf8');
let changed = false;

// Remove stale imports - imported .tsx files that no longer exist in src/pages/
const staleImportRe = /^import\s+\w+\s+from\s+'\.\/(\w+)\.tsx';\n?/gm;
main = main.replace(staleImportRe, (match, moduleName) => {
  const filePath = join(pagesDir, `${moduleName}.tsx`);
  if (!existsSync(filePath)) {
    console.log(`- Removed stale import: ${moduleName}`);
    changed = true;
    return '';
  }
  return match;
});

// Add missing imports and routes
for (const { file, route, component, moduleName } of pages) {
  const importLine = `import ${component} from './${moduleName}.tsx';`;
  const routeLine = `        <Route path="${route}" element={<${component} />} />`;

  if (!main.includes(importLine)) {
    main = main.replace(
      `import './index.css';`,
      `${importLine}\nimport './index.css';`
    );
    console.log(`+ import ${component}`);
    changed = true;
  }

  if (!main.includes(`path="${route}"`)) {
    main = main.replace(
      `      </Routes>`,
      `${routeLine}\n      </Routes>`
    );
    console.log(`+ Route ${route}`);
    changed = true;
  }
}

if (changed) {
  writeFileSync(mainPath, main, 'utf8');
  console.log('main.tsx updated.');
} else {
  console.log('All routes already in sync.');
}
