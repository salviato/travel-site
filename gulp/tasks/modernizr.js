var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

// TGO: Modernizr can test many futures used in the browser, we only use witch we need customizing the code //

gulp.task('modernizr', function() {
	return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js']) // TGO: [All css files, All js files] //
		.pipe(modernizr({ // TGO: Modernizr properties //
			"options": [ // TGO: There are many options. We will use only one //
				"setClasses" // TGO: setClasses is the property used in this project //
			]
		}))
		.pipe(gulp.dest('./app/temp/scripts')); // TGO: The file is created in this folder //
});