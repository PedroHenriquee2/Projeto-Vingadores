const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

async function loadImagemin() {
    const imagemin = await import('gulp-imagemin');
    return imagemin.default; 
}

async function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./public/css'));
}

async function images() {
    const imagemin = await loadImagemin();
    return gulp.src('./src/images/*') 
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images')); 
}



exports.default = gulp.series(styles, images);
exports.watchFiles = function() {
    gulp.watch('./src/styles/*.scss', gulp.series(styles));
    gulp.watch('./src/images/*', gulp.series(images)); 
};
