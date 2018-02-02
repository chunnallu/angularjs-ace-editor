/**
 * Created by lcl on 2017/12/12.
 */
import gulp from "gulp";
import BrowserSync from 'browser-sync';
import child from "child_process";
import {conf} from "./conf";


let browserSync = BrowserSync.create();
let exec = child.exec;
gulp.task('serve',["index"], function() {
	browserSync.init({
		server: {
			baseDir: `${conf.frontend.dist}`,
			routes: {
				"/bower_components": "bower_components"
			}
		}
	});
});

gulp.task("reload",["index"],()=>{
	browserSync.reload();
});

gulp.task("serve:watch",["serve"],()=>{
	gulp.watch([`${conf.frontend.src}/**/*.scss`,`${conf.frontend.src}/**/*.js`,`${conf.frontend.src}/**/*.html`],["reload"]);
})

gulp.task("serve:prod",["index:prod","backend"],()=>{
	exec("cd dist && node server.js",function(err,stdio){
		console.log(err);
		console.log(stdio);
	});
})