var gulp   = require('gulp');
var config = require('../config');


gulp.task('watch',
    [
        'scss:watch',
        'nunjucks:watch',
        'js:watch',
        'inline:watch',
    ]
);
