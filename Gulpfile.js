// http://susydocs.oddbird.net/en/latest/install/
// https://github.com/lacroixdesign/node-bourbon

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

// gulp.task('sass', function () {
//     return gulp.src('sass/main.scss')
//         .pipe(sass({
//             includePaths: ['css'],
//         }))
//         .pipe(gulp.dest('./css/main.css'))
// });

// gulp.task('default',function() {
//     gulp.watch('sass/**/*.scss',['styles']);
// });