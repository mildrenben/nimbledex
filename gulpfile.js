var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

var src = {
  sass: './views/**/*.scss',
  html: './src/*.html',
  js:   './src/js/*.js'
}

var dest = {
  css:  './prod/css',
  html: './prod',
  js:   './prod/js'
}

gulp.task('html', function() {
  gulp.src(src.html)
  .pipe(gulpif(argv.prod, htmlmin({collapseWhitespace: true})))
  .pipe(gulp.dest(dest.html))
});

gulp.task('html-watch', ['html'], browserSync.reload);

gulp.task('sass', function () {
  gulp.src(src.sass)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
			browsers: ['last 2 versions']
  }))
  .pipe(cleanCSS())
  .pipe(gulp.dest(dest.css))
  .pipe(browserSync.stream());
});

gulp.task('js', function () {
  gulp.src(src.js)
  .pipe(concat('all.js'))
  .pipe(gulp.dest(dest.js));
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('iconsmin', () =>
  gulp.src('./src/img/icons/*.svg')
  .pipe(imagemin())
  .pipe(gulp.dest('./prod/img/icons'))
);

gulp.task('itemsmin', () =>
  gulp.src('./src/img/items/*.png')
  .pipe(imagemin())
  .pipe(gulp.dest('./prod/img/items'))
);

gulp.task('spritesmin', () =>
  gulp.src('./src/img/sprites/*.png')
  .pipe(imagemin())
  .pipe(gulp.dest('./prod/img/sprites'))
);

gulp.task('sync', ['sass', 'js', 'html'], function(){
	// browserSync.init({
  //
	// });

	gulp.watch('./views/**/*.scss', ['sass']),
  gulp.watch(src.js, ['js-watch']);
  gulp.watch(src.html, ['html-watch']);
});

gulp.task('default', ['sync']);
