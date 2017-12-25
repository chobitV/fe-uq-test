var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var prettify = require('gulp-prettify');
var data = require('gulp-data');
var fs = require('fs');
var plumber = require('gulp-plumber');

var config = require('../config');


gulp.task('nunjucks', function() {
    return gulp.src([config.src.dev_html + '/**/[^_]*.{html,njk}'])

        // error
        .pipe(plumber({
            errorHandler: config.errorHandler
        }))

        // adding data to Nunjucks
        // .pipe(data(function() {
        //     return JSON.parse(fs.readFileSync(config.src.dev_html + 'products.json'))
        // }))

        // nunjucks render
        .pipe(nunjucksRender({
            path: [config.src.dev_html]
        }))

        // prettify
        .pipe(prettify({
            indent_size: 4,
            wrap_attributes: 'auto',
            preserve_newlines: false,
            end_with_newline: true
        }))

        .pipe(gulp.dest(config.src.html))
});

gulp.task('nunjucks:watch', function() {
    gulp.watch([config.src.dev_html + '/**/*.{html,njk,json}'], ['nunjucks']);
});
