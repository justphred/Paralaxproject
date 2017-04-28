var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  // gulp.src('wtf4style2.css')
  gulp.src('parastyles5.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
  gulp.watch("parastyles5.css", ['styles']);
});
