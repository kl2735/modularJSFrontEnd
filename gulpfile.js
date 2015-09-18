var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('build', function() {
	console.log("building ...");
	
	return gulp.src('./app.js').pipe(webpack({
		output: {
			filename: 'bundle.js'
		},
	}))
	.pipe(gulp.dest('./'));
});
