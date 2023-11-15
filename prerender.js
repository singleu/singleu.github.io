import { JSDOM }  from 'jsdom';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

export function prerender(mainJs) {
  let template = fs.readFileSync(
    path.resolve(path.dirname(__filename), 'dist/index.html'),
    'utf-8',
  )

  const dom = new JSDOM(template, {
    runScripts: 'dangerously',
    resources: 'usable' 

  });

  dom.window.eval(fs.readFileSync(mainJs, 'utf-8'));
  return dom.serialize();
}