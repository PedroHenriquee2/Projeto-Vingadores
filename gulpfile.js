const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

gulp.task('scripts', function(){
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('pucliv/js'));
});

gulp.task('default', gulp.series('scripts'))
exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}