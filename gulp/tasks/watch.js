var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create(); // TGO do not forget create() method //

gulp.task('watch', function() {

	browserSync.init({ // TGO init() method //
		notify: false, // TGO to avoid boring notify message in the browse //
		server: {
			baseDir: "app" // TGO main folder od the html file!!! //
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload(); // TGO reload() method!!! //
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() { // TGO: scripts task is in scripts.js //
	browserSync.reload();
});