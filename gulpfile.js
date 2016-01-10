/* global require */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var path = {
	scss:"scss/",
	css:"css/"
};

gulp.task("default",function(){
	"use strict";
	gulp.watch(path.scss+"*.scss",["sass"]);
});
gulp.task("sass",function(){
	"use strict";
	gulp.src(path.scss + "style.scss");
	sass(path.scss + "style.scss",{
		style : 'expanded',
		'sourcemap=none':true,
		compass:true
	})
	.pipe(plumber())
//	.pipe(autoprefixer())
	.pipe(gulp.dest(path.css));
});