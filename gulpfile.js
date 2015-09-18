/* ///<refrence path="./node_modules/gulp-rimraf/index.js"/>
/// <reference path="./node_modules/gulp/index.js" />
/// <reference path="./node_modules/gulp-typescript/node_modules/gulp-util/index.js" />
/// <reference path="./node_modules/gulp-nodemon/node_modules/nodemon/bin/nodemon.js"/>
*/
//import gulp = require('gulp');
//import ts = require('gulp-typescript');
//import rimraf = require('gulp-rimraf');
//import nodemon = require('gulp-nodemon');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
gulp.task('clearBackendDir', function () {
    return gulp.src('build').pipe(rimraf());
});
gulp.task('buildBackEnd', ['clearBackendDir'], function () {
    var tsResult = gulp.src('src/**/*.ts').pipe(ts({
        module: 'CommonJS'
    }));
    return tsResult.js.pipe(gulp.dest('build'));
});
gulp.task('nodemon', ['buildBackEnd', 'watch'], function () {
    nodemon({
        script: 'build/backend/server.js'
    }).on('restart', function () {
        console.log('nodemon restarted server.js');
    });
});
gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['buildBackEnd']);
});
gulp.task('default', ['buildBackEnd']);
//# sourceMappingURL=gulpfile.js.map