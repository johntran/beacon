/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var replaceFiles = ['./www/js/app.js'];
var replace = require('replace');
var cors = require('cors');



/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


gulp.task('add-proxy', function() {
  return replace({
    regex: "https://services.sbx.getmo.do/beacon_service/index.php?r=beacon_v1%2Fquery_zone",
    replacement: "http://localhost:3000/api",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})

gulp.task('remove-proxy', function() {
  return replace({
    regex: "http://localhost:3000/api",
    replacement: "https://services.sbx.getmo.do/beacon_service/index.php?r=beacon_v1%2Fquery_zone",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
