var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function()
    {
        gulp.src('./Sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./Sass'));
    });

gulp.task('sass:watch', function()
    {
        gulp.watch('./Sass/**/*.scss', ['sass']);
    });