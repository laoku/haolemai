const gulp = require('gulp');
const bable = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
// const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');

gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    //.pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('es5',() => {
    gulp.src('./src/js/ES5/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    // .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('es6',()=>{
    gulp.src('./src/js/ES6/*.js')
    .pipe(bable({
        presets: ['@babel/env']
    }))
    // .pipe(concat('toes5.js'))
    .pipe(gulp.dest('./src/js/ES5'));
})

gulp.task('img',()=>{
    gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})

gulp.task('default',()=>{
    gulp.watch('./src/sass/*.scss',['sass']); 
    gulp.watch('./src/img/*',['img']);
    gulp.watch('./src/js/ES5/*.js',['es5']);
    gulp.watch('./src/js/ES6/*.js',['es6']);
})