'use strict';

var gulp     = require('gulp'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglify'),
    rename   = require('gulp-rename'),
    maps     = require('gulp-sourcemaps'),
    debug    = require('gulp-util'),
    del      = require('del'),
    watch    = require('gulp-watch'),
    connect  = require('gulp-connect');



gulp.task('concatScripts', function(){
  gulp.src(["js/bootstrap.min.js",
          	"js/photography.js",
          	"js/classie.js",
          	"js/main.js",
          	"js/reportcard.js",
          	"js/konami.js",
          	"js/main2.js",
            "js/googleanal.js"])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', ['concatScripts'], function(){
  gulp.src('js/app.js')
  .pipe(maps.init())
  .pipe(uglify())
  .on('error', console.log)
  .pipe(maps.write('./'))
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'))  ;
});

gulp.task('watch', function(){
  gulp.watch(['js/*.js', '!js/app.js','!js/app.min.js'], ['minifyScripts']); //if we don't ignore the output files the watch command will see the change and go on an endless loop!
  console.log('Gulp is watching for changes!');
});

gulp.task('serve', ['watch'], function(){
  connect.server({port: 3000});
});

gulp.task('clean', function(){
  del('dist');
});

gulp.task('build', ['minifyScripts'], function(){
  return gulp.src(['js/app.min.js','js/modernizr-custom.js', 'index.html', 'index.php', 'css/index.css','css/bootstrap.min.css', 'images/**', 'snake.gif', 'Konami.mp3', 'favicon.ico'], {base: './'})
   .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean'], function(){
  gulp.start('build');
});
