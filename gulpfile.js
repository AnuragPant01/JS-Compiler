const { series, src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const copy = require('gulp-copy');

async function minifyHTML() {
    return src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}

async function minifyCSS() {
    return src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist/css'));
}

async function minifyJS() {
    return src('src/js/*.js')
        .pipe(terser())
        .pipe(dest('dist/js'));
}

async function copyImages() {
    return src('src/img/*')
        .pipe(copy('dist/img', { prefix: 2 }));
}

exports.default = series(minifyHTML, minifyCSS, minifyJS, copyImages);
