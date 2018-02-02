/**
 * Created by lcl on 2017/12/12.
 */
import gulp from "gulp";
import {conf} from "./conf";

gulp.task("backend",()=>{
	gulp.src(`${conf.backend.src}/**/*.*`)
		.pipe(gulp.dest(`${conf.backend.dist}`));
})