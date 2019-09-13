const gulp=require('gulp'),
pug=require('gulp-pug'),
sass=require('gulp-sass');

gulp.task('compile-pug', () => {
    return (
        gulp
            .src('./dev/pug/*.pug')
            .pipe(pug())
            .pipe(gulp.dest('./'))
    );
});

gulp.task('compile-scss', () =>{
	return(
		gulp
			.src('./dev/scss/style.scss', {
				sourcemaps: true
			})
			.pipe(sass())
			.pipe(gulp.dest('./build/css'))
	);
});


gulp.task('default', gulp.series(gulp.parallel('compile-pug','compile-scss')));
