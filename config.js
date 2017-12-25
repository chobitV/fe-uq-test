var devPath = '_dev/'; // develope path
var productionPath = 'production/';  // production path

var config = {

    src: {

        // base
        dev: devPath,
        production: productionPath,

        // css
        scss: devPath + 'scss/',
        css: productionPath + 'css/',

        // img
        dev_img: devPath + 'img/',
        img: productionPath + 'img/',

        // svg img
        dev_imgSvg: devPath + 'img/svg/',
        dev_imgSvgSprite: devPath + 'img/svg/svg-sprite/',
        imgSvg: productionPath + 'img/svg/',

        // js
        dev_js: devPath + 'js/',
        js: productionPath + 'js/',

        // html
        dev_html: devPath + 'html/',
        html: productionPath,
    },

    errorHandler: require('./tasks/errors')
};

module.exports = config;
