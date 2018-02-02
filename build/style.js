/**
 * Created by lcl on 2017/12/12.
 */
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import gulp from "gulp";
import {conf} from "./conf";

gulp.task("style",()=>{
	return gulp.src(`${conf.frontend.src}/**/*.scss`)
		.pipe(gulpSass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(`${conf.frontend.dist}`));
})