// TGO: This function is the automation of the webpack //

var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback) { // TGO: Callback is to make sure that webpack is running ok with gulp //
	webpack(require('../../webpack.config.js'), function(err, stats) { // TGO: Webpack needs to know the local of config //
		if (err) {
			console.log(err.toString()); // TGO: toString method is to display the error in the command line better //
		}
		console.log(stats.toString());
		callback(); // TGO: Call function callback //
	});
});