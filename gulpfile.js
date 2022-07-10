var del = require('del');

const gulp = require('gulp');

const htmlMin = require('gulp-htmlmin');

const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));
sass.compiler = require('node-sass');

const concat = require('gulp-concat');

const cssMin = require('gulp-clean-css');

// Clean dist
gulp.task('clean', function(done) {
    del.sync('dist/**', {force: true});
    done();
});

// Copy HTML
gulp.task('copyHtml', function(done) {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
    done();
});

// Minify & copy HTML
gulp.task('minifyHtml', function(done) {
    gulp.src('src/**/*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
    done();
});

// Compile SCSS
gulp.task('compileScss', function() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('dist/styles'));
});

// Watch SCSS file changes
gulp.task('watchScss', function () {
    gulp.watch('src/styles/**/*.scss', gulp.series('compileScss'));
});

gulp.task('default', gulp.series('clean', 'minifyHtml', 'compileScss'));

gulp.task('dev0', gulp.series('copyHtml', 'compileScss', 'watchScss'));

gulp.task('prod', gulp.series('clean', 'minifyHtml', 'compileScss'));
