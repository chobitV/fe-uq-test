var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var cleanCSS = require('postcss-clean');

var config = require('../config');


gulp.task('scss', function() {
    return gulp
        .src(config.src.scss + '**/*.scss')

        // compile scss
        .pipe(sass({
            outputStyle: 'compressed'
        })
        .on('error', config.errorHandler))

        // .pipe(postcss([

        //     // autoprefixer
        //     autoprefixer({
        //         browsers: ['last 4 versions'],
        //         cascade: false
        //     }),

        //     // optimization
        //     cleanCSS({
        //         level: {
        //             2: {
        //                 mergeAdjacentRules: true,
        //                 mergeIntoShorthands: true,
        //                 mergeMedia: true,
        //                 mergeSemantically: false,
        //                 overrideProperties: true,
        //                 removeEmpty: true,
        //                 reduceNonAdjacentRules: true,
        //                 removeDuplicateFontRules: true,
        //                 removeDuplicateMediaBlocks: true,
        //                 removeDuplicateRules: true,
        //             }
        //           }
        //     })
        // ]))

        .pipe(gulp.dest(config.src.css))
});

gulp.task('scss:watch', function() {
    gulp.watch(config.src.scss + '**/*.scss', ['scss']);
});
