// TGO: KickNote: To build in github, changed the dist folder references to docs folder //

var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create(); // TGO do not forget create() method //

// TGO: Creating a task to use browserSync to start the browser with files from "dist" folder //
// TGO: This task there is no dependency. Needs to be executed separated by gulp previewDist //
gulp.task('previewDist', function() {
	browserSync.init({ // TGO init() method //
		notify: false, // TGO to avoid boring notify message in the browse //
		server: {
			baseDir: "docs" // TGO main folder of the html file!!! //
		}
	});
});

gulp.task('deleteDistFolder', ['icons'], function() {  // TGO: Including icons task from another file to garantee all the files updated //
	return del("./docs");
});

// TGO: This task is more general to be used for include / exclude files to the dist folder. Could be used in other projects //
var pathsToCopy = [
	'./app/**/*',
	'!./app/index.html',
	'!./app/assets/images/**',
	'!./app/assets/styles/**',
	'!./app/assets/scripts/**',
	'!./app/temp',
	'!./app/temp/**'
]

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	return gulp.src(pathsToCopy) // TGO: Acess the variable //
	.pipe(gulp.dest("./docs"));
});

gulp.task('OptimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*']) // TGO: The ! indicate that some files will be ignored //
	.pipe(imagemin({
		progressive: true, // TGO: Optimize jpeg
		interlaced: true, // TGO: Optimize gif
		multipass: true // TGO: Optimize svg
	}))
	.pipe(gulp.dest("./docs/assets/images"));
});

// TGO: Task created only to trigger (start) the usemin task //
gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start("usemin");
});

// TGO: Usemin has a feature thar detect the comments in the html file. Comments right below the css and js files //
// TGO: The parameterts acting in compress and review the css & js code //
gulp.task('usemin', ['styles', 'scripts'], function() { // TGO: Including styles & scripts tasks from another file to garantee all the files updated //
	return gulp.src('./app/index.html')
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}], // TGO: REV to review, cssnano to compress css //
		js: [function() {return rev()}, function() {return uglify()}] // TGO: Uglify to compress js //
	}))
	.pipe(gulp.dest('./docs'));
});


gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'OptimizeImages', 'useminTrigger']);