var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
		.on('error', function(errorInfo) {  // TGO Start: Avoid gulp interrupt task for css error //
			console.log(errorInfo.toString());
			this.emit('end');
		}) // TGO End: Avoid gulp interrupt task for css error //
		.pipe(gulp.dest('./app/temp/styles'));
});