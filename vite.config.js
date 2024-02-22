
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { prerender } from './prerender';
import { minify } from 'html-minifier-terser';

const __filename = fileURLToPath(import.meta.url);

let mainJs = null;
export default {
  plugins: [
    {
        name: 'prerender-html-build',
        apply: 'build',
        enforce: 'pos',
        buildEnd(error) {
          if (error) {
            console.log("Error building");
            console.log(error);
            process.exit(1);
          }
          console.log("Bundle closed");
        },
        async closeBundle () {
          if (mainJs) {
            const indexHtml = path.resolve(path.dirname(__filename), 'dist/index.html');
            const htmlRenderer = prerender(path.resolve(path.dirname(__filename), mainJs));
            const content = await minify(htmlRenderer, {
              collapseWhitespace: true,
              removeComments: true
            });
            fs.writeFileSync(indexHtml,  content);
          }

          process.exit(0);
        },
        async transformIndexHtml(App, settings) {
            const files = Object.keys(settings.bundle);
            let mainJsfile = files.find((file) => {
              if(/index-[\w]{8}.js$/.test(file)) {
                return true;
              }
            });


            mainJs = path.resolve(path.dirname(__filename), 'dist/' + mainJsfile);
            return App;
          
        },
      },
  ]
}