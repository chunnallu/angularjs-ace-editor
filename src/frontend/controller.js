/**
 * Created by lcl on 2017/12/5.
 */
import {AceEditorBuilder} from './editors/aceeditor/aceeditor_builder.js';
export default class AppController {
	constructor ($scope) {
		// 模板文件
		this.fileList = [];
		this.fileList.push(new AceEditorBuilder()
			.setName('value.yaml')
			.setContent("123455")
			.setOnChange(function(e,session){
				console.log(session.getValue());
			})
			.setReadOnly(false)
			.build());
		this.fileList.push(new AceEditorBuilder()
			.setName('hello.md')
			.setMode("markdown")
			.setContent("# 123455")
			.setOnChange(function(e,session){
				console.log(session.getValue());
			})
			.setReadOnly(false)
			.build());
	}



}