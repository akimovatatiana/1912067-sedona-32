var gulp = require("gulp");
var concat = require('gulp-concat');
var cssimport = require("gulp-cssimport");
var options = {};

gulp.task("css", function() {
  return gulp.src("styles/project/import.css")
    .pipe(cssimport(options))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest("styles"));
});

gulp.task('watch', function() {
  gulp.watch('styles/project/**/*.css', gulp.series('css'));
});
