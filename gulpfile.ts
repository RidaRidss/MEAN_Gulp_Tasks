// these typed definition files are not available that is why we comment out this code for a time , and just define these files by using javascript code rather then typescript code , then we will write these tsds later... :)
/*
///<refrence path="./typings/gulp-rimraf/gulp-rimraf.d.ts"/>
/// <reference path="./typings/gulp/gulp.d.ts" />
/// <reference path="./typings/gulp-typescript/gulp-typescript.d.ts" />
/// <reference path="./typings/gulp-nodemon/gulp-nodemon.d.ts"/>

import gulp = require('gulp');
import ts = require('gulp-typescript');
import rimraf = require('gulp-rimraf');
import nodemon = require('gulp-nodemon');    */
let gulp = require('gulp');
let sass = require('gulp-sass');
let ts = require('gulp-typescript');
let rimraf = require('gulp-rimraf');
let nodemon = require('gulp-nodemon');

gulp.task('clearFrontendDir', function(){
    return gulp.src('build_For_Frontend').pipe(rimraf());
});

gulp.task('buildfrontEndstyles',['clearFrontendDir'] , function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError)).pipe(gulp.dest('build_For_Frontend/'));
});

gulp.task('clearBackendDir',['clearFrontendDir' ,'buildfrontEndstyles'] , function(){
    return gulp.src('build_For_Backend').pipe(rimraf());
});

gulp.task('buildBackEnd' ,['clearFrontendDir' , 'buildfrontEndstyles' , 'clearBackendDir'] , function () {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(ts({module: 'CommonJS'}));
    return tsResult.js.pipe(gulp.dest('build_For_Backend'));
});

gulp.task('nodemon', ['buildBackEnd','buildfrontEndstyles','watch'], function(){
    nodemon({
        script: 'build_For_Backend/backend/server.js'

    }).on('restart', function(){
        console.log('nodemon restarted server.js');
    })
});
gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['buildBackEnd']);
    gulp.watch('src/**/*.scss', ['buildfrontEndstyles']);
});
gulp.task('default', ['buildBackEnd','buildfrontEndstyles']);