const proxyURL = 'wordpress.test'; // Local URL used for proxying with BrowserSync

const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');
require('laravel-mix-purgecss');
require('laravel-mix-copy-watched');
require('mix-tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Stylus file
 | for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('./dist');

mix.browserSync({
    proxy: proxyURL,
    open: false,
});

// Styles
mix
  .stylus('resources/assets/styles/app.styl', 'styles', { use: [require('rupture')()] })
    .options({ postCss: [require('lost')] })
  .tailwind();

mix.stylus('resources/assets/styles/editor.styl', 'styles');

// Javascript
mix
  .js('resources/assets/scripts/app.js', 'scripts')
  .js('resources/assets/scripts/customizer.js', 'scripts')
  .blocks('resources/assets/scripts/editor.js', 'scripts')
  .extract();

// Static files
mix
  .copyWatched('resources/assets/images/**', 'dist/images')
  .copyWatched('resources/assets/fonts/**', 'dist/fonts');

// Setup
mix
  .autoload({ jquery: ['$', 'window.jQuery'] })
  .options({ processCssUrls: false })
  .sourceMaps(false, 'source-map')
  .version();
