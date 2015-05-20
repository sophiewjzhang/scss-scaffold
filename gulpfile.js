/*!
 * scss-Scaffold's Gulpfile
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

'use strict';

var gulp = require('gulp'),
  config = {

  },
  builder={
    del: require('del'),
    util: require('gulp-util'),
    sass: require('gulp-sass'),
    uglify: require('gulp-uglify'),
    sync: require('browser-sync')
  },
  reload=builder.sync.reload;


/*  var pkg = require('./package.json'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  runSequence = require('run-sequence'),
  templateCache = require('gulp-angular-templatecache'),
  ngAnnotate = require('gulp-ng-annotate'),
  pluginLoader = require('gulp-load-plugins')();*/

config.port = 8888;
config.app = './scss';
config.filename ='timber';
//source
config.scssPath = config.app;
/*config.viewsPath = config.app + '/views';
config.imgPath = config.app + '/images';
config.fontsPath = config.app + '/fonts';
config.bowerPath = config.app + '/bower_components';*/
//target
/*config.cssPath = config.app + '/css';
config.jsPath = config.app + '/scripts';*/

config.target =  './css';

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
gulp.task('styles', ['clean'],function () {

  gulp.src([
    config.scssPath + '/**/*.scss'
  ]).pipe(builder.sass().on('error', builder.sass.logError))
    .pipe(gulp.dest( './css'));

});

/*
 * serve
 * */
gulp.task('serve', function () {
  builder.sync({
    server:{
      baseDir:'app'
    }
  });
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd:'app'},reload);

});

gulp.task('default', ['build']);
