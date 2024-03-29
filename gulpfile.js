const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('babel', () => {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'))
});

gulp.task('copy-css', function () {
  return gulp.src('./src/**/*.css').pipe(gulp.dest('./lib'));
});
gulp.task('copy-less', function () {
  return gulp.src('./src/**/*.less').pipe(gulp.dest('./lib'));
});

const copyResources = gulp.parallel('copy-css', 'copy-less');

gulp.task('concat-css', () => {
  return gulp.src('./src/**/*.css')
    .pipe(concat('index.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default',
  gulp.series(
    'babel',
    copyResources,
    // 'concat-css',
  ));