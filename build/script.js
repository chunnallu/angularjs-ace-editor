/**
 * Created by lcl on 2017/12/12.
 */
import gulp from "gulp";
import webpack from "webpack-stream";
import {conf} from "./conf";

gulp.task("script",()=>{
	let options = {
		entry: `${conf.frontend.src}/app.js`,
		output: {
			path:conf.frontend.dist,
			filename: 'app.bundle.js'
		},
		module: {
			loaders: [
				{ test: /\.js$/, loader: 'babel-loader' },
			],
		},
	}
	return gulp.src(`${conf.frontend.src}/app.js`)
		.pipe(webpack(options))
		.pipe(gulp.dest(conf.frontend.dist));
})