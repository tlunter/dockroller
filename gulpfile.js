var path                = require('path');
var gulp                = require('gulp');

// -- Plugins -----------------------------------------------------------------

var less                = require('gulp-less');
var concat              = require('gulp-concat');
var react               = require('gulp-react');
var uglify              = require('gulp-uglify');
var rename              = require('gulp-rename');

gulp.task('copy-react', function() {
  gulp.src('bower_components/react/react-with-addons.js')
    .pipe(rename('react.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('copy-underscore', function() {
  gulp.src('bower_components/underscore/underscore.js')
    .pipe(gulp.dest('public/js'));
});

gulp.task('copy-reqwest', function() {
  gulp.src('bower_components/reqwest/reqwest.js')
    .pipe(gulp.dest('public/js'));
});

gulp.task('copy-pure', function() {
  gulp.src('bower_components/pure/pure.css')
    .pipe(gulp.dest('public/css'));
});

gulp.task('copy-aviator', function() {
  gulp.src('bower_components/aviator/aviator.js')
    .pipe(gulp.dest('public/js'));
});

gulp.task('copy-font-awesome-css', function() {
  gulp.src('bower_components/font-awesome/css/font-awesome.css')
    .pipe(gulp.dest('public/css'));
});

gulp.task('copy-font-awesome-fonts', function() {
  gulp.src('bower_components/font-awesome/fonts/*')
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('copy', [
  'copy-react',
  'copy-underscore',
  'copy-reqwest',
  'copy-pure',
  'copy-aviator',
  'copy-font-awesome-css',
  'copy-font-awesome-fonts'
]);

gulp.task('compile', function() {
  gulp.src(['assets/js/**/*'])
    .pipe(react())
    .on('error', console.error.bind(console))
    .pipe(concat('dockroller.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('less', function() {
  gulp.src(['assets/less/**/*'])
    .pipe(less())
    .pipe(concat('dockroller.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['copy','compile','less']);

var jsAssets  = ['assets/js/**/*'],
    cssAssets = ['assets/less/**/*'];

gulp.task('watch', ['default'], function() {
  gulp.watch(jsAssets, ['compile']);
  gulp.watch(cssAssets, ['less']);
});
