/**
 * Created by lcl on 2017/12/12.
 */
import gulp from "gulp";
import child from "child_process";
import {conf} from "./conf";

gulp.task("build",["index:prod"],()=>{
	child.execFile(conf.build.dockerImageTaskFile);
});