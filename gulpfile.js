'use strict';

var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var rimraf      = require('rimraf');


// DEVELOPMENT TASKS
// =================
//

/*
 * Use BrowserSync to setsetup a server with livereload
 * JSPM to bundle es6 files and put in build folder
 * compile sass files and put in build folder.
 * */

// BrowserSync server
gulp.task('browser-sync', function() {
  browserSync.init([
    './build/styles/*.css',
    './build/scripts/*.js',
    './build/*.html'
  ],{
    notify: false,
    server: {baseDir: ['build/']},
    port: 3500,
    browser: [],
    tunnel: false
  });
});


// Sass
gulp.task('sass', function(){
  return gulp.src('./public/styles/main.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.sourcemaps.write({includeContent: false}))
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
    .pipe(plugins.autoprefixer({browsers: ['last 2 versions']}))
    .on('error', plugins.util.log)
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./build/styles'))
    .on('error', plugins.util.log);
});


// CSS
gulp.task('css', function() {
  return gulp.src('./build/styles/main.css')
    .pipe(gulp.dest('./build/styles'))
    .pipe(plugins.csso())
    .pipe(plugins.rename('main.min.css'))
    .pipe(gulp.dest('./build/css'))
    .on('error', plugins.util.log);
});


gulp.task('delete-build', function() {
  rimraf('./build', function(err){
    plugins.util.log(err);
  });
});


// JSX
gulp.task('jsx', plugins.shell.task([
  'jspm bundle-sfx scripts/main build/scripts/bundle.js'
]));

gulp.task('dev-copy', function(){
  gulp.src(['./public/index.html', './public/assets/**/*'],{base: 'public'})
    .pipe(gulp.dest('./build'))
    .on('error', plugins.util.log);
});


// serve task
gulp.task('serve',['dev-copy', 'browser-sync', 'jsx', 'sass'], function(){
  
  plugins.watch(
    './public/styles/**/*.scss',
    {
      name: 'SASS'
    }, function() {
      gulp.start('sass');
    }
  );

  plugins.watch(
    './public/scripts/**/*.js',
    {
      name: 'JS'
    },
    function() {
      gulp.start('jsx');
    }
  )
});


// DISTRIBUTION TASKS
// ==================
//
gulp.task('dist-sass', function(){
  return gulp.src('./public/styles/main.scss')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.sourcemaps.write({includeContent: false}))
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
    .pipe(plugins.autoprefixer({browsers: ['last 2 versions']}))
    .on('error', plugins.util.log)
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/styles'))
    .on('error', plugins.util.log);
});

// DIST JSX
gulp.task('dist-jsx', plugins.shell.task([
  'jspm bundle-sfx scripts/main dist/scripts/bundle.js'
]));


gulp.task('dist-copy', function(){
  gulp.src( ['./public/index.html', './public/assets/**/*'],{base: 'public'}  )
    .pipe(gulp.dest('./dist'))
    .on('error', plugins.util.log);
});

gulp.task('dist',['dist-sass', 'dist-jsx', 'dist-copy']);
