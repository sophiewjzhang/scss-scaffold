/*!
 * scss-Scaffold's Gulpfile
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict';

var gulp = require('gulp'),
  baseDir = './scss',
  config = {
    target: './css',
    app: baseDir,
    port: 8888,
    filename: 'scss-scaffold',
    scssPath: baseDir
  },
  builder = {
    del: require('del'),
    util: require('gulp-util'),
    sass: require('gulp-sass'),
    uglify: require('gulp-uglify'),
    sync: require('browser-sync')
  };

/*
 * Clean the dist files/folders before each build.
 * */
gulp.task('clean', function () {
  return builder.del([
    config.target
  ]);
});
/*
 * build the css file.
 * */
gulp.task('styles', ['clean'], function () {

  gulp.src([
    config.scssPath + '/**/*.scss'
  ]).pipe(builder.sass().on('error', builder.sass.logError))
    .pipe(gulp.dest('./css'));

});


gulp.task('default', ['styles']);
