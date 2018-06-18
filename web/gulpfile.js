var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var server = require('gulp-server-livereload');
 
gulp.task('default', function () {
  return gulp.src('assets/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('out/'));
});
gulp.task('default', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: false
    }));
});