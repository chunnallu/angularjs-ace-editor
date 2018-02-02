/**
 * Created by lcl on 2017/9/21.
 */
export class AceEditorBuilder {
  constructor() {
    this.ace = window.ace;
    /**
     * @export {string}
     */
    this.name;
    /**
     * @export {string}
     */
    this.content;
    /**
     * @export {string}
     */
    this.mode = 'ace/mode/yaml';
    /**
     * @export {!ace.EditSession}
     */
    this.editorSession;
    /**
     * @export {!ace.UndoManager}
     */
    this.undoManager;
    /**
     * @export {boolean}
     */
    this.readOnly = true;
  }

  /**
   * 设置名称
   * @export
   * @param {!string} name
   * @return {!AceEditorBuilder}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   * 文件内容
   * @export
   * @param {!string} content
   * @return {!AceEditorBuilder}
   */
  setContent(content) {
    this.content = content;
    return this;
  }

  /**
   * 设置编辑器会话对象
   * @export
   * @param {!ace.EditSession} editorSession
   * @return {!AceEditorBuilder}
   */
  setEditorSession(editorSession) {
    this.editorSession = editorSession;
    return this;
  }

  /**
   * 设置编辑器历史记录管理器
   * @export
   * @param {!ace.UndoManager} undoManager
   * @return {!AceEditorBuilder}
   */
  setUndoManager(undoManager) {
    this.undoManager = undoManager;
    return this;
  }

  /**
   * 设置只读
   * @export
   * @param {!boolean} readOnly
   * @return {!AceEditorBuilder}
   */
  setReadOnly(readOnly) {
    this.readOnly = readOnly;
    return this;
  }

  /**
   * 设置只读
   * @export
   * @param {!string} mode
   * @return {!AceEditorBuilder}
   */
  setMode(mode) {
    this.mode = mode;
    return this;
  }

  setOnChange(fn){
    this.onChange = fn;
    return this;
  }

  /**
   * 构建文件对象
   * @export
   * @return {!aceEditor.File}
   */
  build() {
    this.name = this.name ? this.name : '';
    this.content = this.content ? this.content : '';
    this.editorSession = this.editorSession ? this.editorSession :
                                              this.ace.createEditSession(this.content, this.mode);
    if(this.onChange){
		this.editorSession.on("change",(e)=>{this.onChange(e,this.editorSession)});
    }
    this.undoManager = this.undoManager ? this.undoManager : new this.ace.UndoManager();
    return {
      'name': this.name,
      'content': this.content,
      'editorSession': this.editorSession,
      'undoManager': this.undoManager,
      'readOnly': this.readOnly,
    };
  }
}
