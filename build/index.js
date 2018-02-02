/**
 * Created by lcl on 2017/12/12.
 */
import wireDep from "gulp-wiredep";
import gulpInject from "gulp-inject";
import gulp from "gulp";
import {conf} from "./conf";

gulp.task("index",["move-index-to-dist","script","style"],()=>{
	//移动到文件到dist
	let jsSource = gulp.src(`${conf.frontend.dist}/app.bundle.js`,{read:false});
	let cssSource = gulp.src(`${conf.frontend.dist}/**/*.css`,{read:false});

	// 注入bower
	return gulp.src(`${conf.frontend.dist}/index.html`)
		.pipe(wireDep({
			optional: 'configuration',
			goes: 'here'
		}))
		.pipe(gulpInject(jsSource, {relative: true}))
		.pipe(gulpInject(cssSource, {relative: true}))
		.pipe(gulp.dest(`${conf.frontend.dist}`))
})

gulp.task("move-index-to-dist",function(){
	return gulp.src(`${conf.frontend.src}/index.html`)
		.pipe(gulp.dest(`${conf.frontend.dist}`));
})

gulp.task("index:prod",["index"],()=>{
	//将bower依赖移动到dist
	return gulp.src(`${conf.frontend.bower_components}/**/*.*`)
		.pipe(gulp.dest(`${conf.frontend.bower_components_dist}`));
})