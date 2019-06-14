let plumber = require('gulp-plumber')
    uglify = require('gulp-uglify'),
    babel  = require('gulp-babel'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    scriptsPATH = {
        "input": "./dev/static/js/main.js",
        "ouput": "./build/static/js/"
    };

module.exports = function () {
    $.gulp.task('js:dev', () => {
      return browserify(scriptsPATH.input)
          .transform(babelify.configure({
            presets: ['@babel/env']
          }))
          .bundle()
          .pipe(plumber())
          .pipe(source('bundle.min.js'))
          .pipe($.gulp.dest(scriptsPATH.ouput))
          .pipe($.browserSync.reload({
              stream: true
          }));
    });

    $.gulp.task('js:build', () => {
      return browserify(scriptsPATH.input)
          .transform(babelify.configure({
            presets: ['@babel/env']
          }))
          .bundle()
          .pipe(source('bundle.min.js'))
          .pipe(buffer())
          .pipe(uglify())
          .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};
