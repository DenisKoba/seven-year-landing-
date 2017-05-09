/**
 * Created by griffin on 5/9/17.
 */

var gulp = require('gulp');

var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var useref = require('gulp-useref');

var runSequence = require('run-sequence');


//------------------ CSS ------------------

gulp.task('sass', function(){
    return gulp.src('scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});


// Watch documents
gulp.task('watch', function(){

    // Перекомпіляція стилів при зміні scss-файлів
    gulp.watch('/scss/**/*.scss', function() { runSequence('sass')});
});

// ---------------- TASKS ––––––––––––


//Default
gulp.task('default', function(callback){
    runSequence('sass','watch',
        callback
    )
});