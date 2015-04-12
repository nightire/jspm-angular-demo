var fs          = require('fs');
var yaml        = require('js-yaml');
// var _           = require('lodash');
var gulp        = require('gulp');
// var proxy       = require('proxy-middleware');
// var url         = require('url');
var browserSync = require('browser-sync');

try {
    var options = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf-8'));
} catch (error) {
    throw new Error(error);
}

var taskDependencies = (function() {
    gulp.task('server', function() {
        // var proxyMiddleware = proxy(
        //     _.assign(url.parse(options.proxyURL), options.proxyOptions)
        // );
        // options.browserSync.server.middleware.push(proxyMiddleware);
        browserSync(options.browserSync);
    });

    return ['server'];
}());

gulp.task('default', taskDependencies, function() {
    // Default Task Denifition
});
