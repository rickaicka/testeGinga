var gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlReplace = require('gulp-html-replace'),
    autoPrefixer = require('gulp-autoprefixer');

var paths = {
    sassSrcPath: ['./sass/**/*.scss'],
    sassDestPath: './css/'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', ['css'], function () {
    gulp.src(paths.sassSrcPath)
        .pipe(sass())
        .pipe(autoPrefixer(autoprefixerOptions))
        .pipe(gulp.dest(paths.sassDestPath));
});

gulp.task('css', function(){
   return gulp.src('./**/*.html')
    .pipe(htmlReplace({
       'css':'css/style.css'
   }));
});


gulp.task('watch', function() {
    gulp.watch(paths.sassSrcPath, ['sass'])
});

gulp.task('default', ['sass','watch']);
