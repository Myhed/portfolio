const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

function compileSass(){
    return gulp.src('./scss/style.scss').pipe(sass()).pipe(gulp.dest('./css/')).pipe(browserSync.stream())
}


browserSync.init({
    server:'./'
})

// gulp.task('sass',compileSass());

gulp.task('sassWatch',() => {
    gulp.watch('./scss/*.scss', compileSass)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./css/*.css').on('change', browserSync.reload);
})

