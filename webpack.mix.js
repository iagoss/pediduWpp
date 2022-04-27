const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.browserSync('localhost:8000');

mix.config.publicPath='public_html';

mix.react('resources/js/app.js', 'public_html/assets/js/').version();
mix.react('resources/js/pdv.js', 'public_html/assets/pdv/').version();
mix.react('resources/js/complements.js', 'public_html/assets/complements/').version();

mix.webpackConfig({
    output: {
        publicPath: '/',
        chunkFilename: '[name].js?id=[contenthash]'
    },
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '-',
            name: false
        }
    }
});