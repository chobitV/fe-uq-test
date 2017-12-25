var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require("fs");

var config = require('../config');


gulp.task('inline', function(){
	return gulp.src([config.src.production + '*.html'])
    .pipe(replace('<link rel="stylesheet" href="css/inline.css">', function(){
    	var css = fs.readFileSync(config.src.css + 'inline.css', "utf8");
    	return '<style>\n' + css + '\n</style>'
    }))
    .pipe(gulp.dest(config.src.production));
});

gulp.task('inline:watch', function() {
    gulp.watch(config.src.scss + 'inline.scss', ['inline']);
});
