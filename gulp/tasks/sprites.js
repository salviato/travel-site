var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename')
del = require('del');

// TGO: It will config paramethers to create sprite svg file and sprite css file //
//      sprite svg file has the sprited icons //
//      sprite css file has the css positions of the icons //

var config = {
	mode: {
		css: {
			sprite: 'sprite.svg', // until here will create sprite.svg. This line is to remove .css to the name of the file //
			render: {
				css: {
					template: './gulp/templates/sprites.css' // it will update sprite.css //
				}
			}
		}
	}
}

// TGO: Task to clear the sprites folders. Avoiding multiples sprite files //
gulp.task('beginClean', function(){
	return del(['./app/temp/sprite', './qpp/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config)) // TGO: It execute svgSprite to create sprite.css at templates folder //
		.pipe(gulp.dest('./app/temp/sprite/')); // TGO: Destiny of the sprite svg file //
});

// TGO: Copy the sprite.svg to the images folder, to stay organized //
gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

// TGO: Copy the sprite.css to the modules folder to import to styles.css //
gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.css') // TGO: Get all the css files //
		.pipe(rename('_sprite.css')) // TGO: rename the file with _ (underline). Require rename npm package //
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

// TGO: Task to delete the temp sprite folder after all created //
gulp.task('endClean', ['copySpriteCSS', 'copySpriteGraphic'], function() {
	return del('./app/temp/sprite');
});

// TGO: Create a task to automate the execution of the two above tasks //
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);