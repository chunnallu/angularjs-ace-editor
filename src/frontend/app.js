import AppController from "./controller";
import EditorModule from "./editors/module"

export default angular.module("ace",[EditorModule.name])
.controller("appcontroller",AppController);