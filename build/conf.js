/**
 * Created by lcl on 2017/12/12.
 */
import path from "path";
let basePath = path.resolve("./");
export const conf = {
	basePath:basePath,
	frontend:{
		src:path.join(basePath,"src/frontend"),
		dist:path.join(basePath,"dist/static"),
		bower_components:path.join(basePath,"bower_components"),
		bower_components_dist:path.join(basePath,"dist/bower_components")
	},
	backend:{
		src:path.join(basePath,"src/backend"),
		dist:path.join(basePath,"dist")
	},
	build:{
		dockerImageTaskFile:path.join(basePath,"build/docker-image.sh")
	}
}