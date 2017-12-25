var gulp = require('gulp');
var server = require('browser-sync').create();
var util = require('gulp-util');
var config = require('../config');


gulp.task('server', function() {
    server.init({
        server: {
            baseDir: config.src.production,
        },
        files: [
            config.src.html + '/*.html',
            config.src.css + '/**/*.css',
            config.src.img + '/**/*'
        ],
        port: util.env.port || 8080,
        logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
        notify: false,
        ghostMode: false,
    });
});

module.exports = server;
