var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var config = require('../config');


gulp.task('js', function() {
    gulp.src(config.src.dev_js + '**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(config.src.js))
});

gulp.task('concat_js', function() {
    return gulp.src(config.src.dev_js + '**/*.js')
        .pipe(concat('theme-js.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.src.js));
});



gulp.task('js:watch', function() {
    // gulp.watch(config.src.dev_js + '**/*.js', ['js']);
});
