let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('sass:init', () => {
  gulp.src('src/sass/styles.scss')
    .pipe(sass({ includePaths: ['node_modules/foundation-sites/scss'] }).on('error', sass.logError))
});

gulp.task('sass:compile', () => {
  gulp.src('src/sass/styles.scss')
    .pipe(sass({ includePaths: ['node_modules/foundation-sites/scss'] }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3', 'ios >= 7'] }))
    .pipe(gulp.dest('src/'));
});

gulp.task('sass:watch', () => {
  gulp.watch('src/sass/**/*.scss', ['sass:compile']);
});
