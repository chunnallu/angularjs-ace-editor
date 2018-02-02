/**
 * Created by lcl on 2017/9/21.
 */
export class AceEditorController {
  constructor($scope) {
    this.$scope = $scope;
    /**
     * 是否折叠
     * @type {boolean}
     * @export
     */
    this.isFolding;
    /**
     * 文件配置
     * @export { !aceEditor.Files }
     */
    this.files;
    /**
     *  @export {!aceEditor.Config}
     */
    this.config = {
      ace: window.ace,
      editor: null,
      _currFile: null,
      folding: {
        foldingFont: '',
        foldingTips: '',
        FONT_FOLDED: 'lock_outline',
        TIPS_FOLDED: '点击展开发布配置',
        FONT_OPEN: 'lock_open',
        TIPS_OPEN: '点击展开发布配置',
      },
    };
    this.config.folding.foldingFont = this.config.folding.FONT_FOLDED;
    this.config.folding.foldingTips = this.config.folding.TIPS_FOLDED;
  };

  init() {
    this.currFile = this.files[0];
    this.isFolding = !this.isFolding;
    this.toggleFolderFont();
  }

  /**
   * ace 加载
   * @export
   */
  aceOnLoad() {
    let that = this;
    return function(_editor) {
      that.config.editor = _editor;
      that.init();
    };
  }

  /**
   *  获取编辑器文件菜单的类名
   * @export
   */
  getMenuClass(filename) {
	  return this.currFile && ( filename === this.currFile.name ) ? 'curr' : '';
  }

  /**
   * @export
   */
  toggleFolderFont() {
    if (this.isFolding) {
      this.isFolding = false;
      this.config.folding.foldingFont = this.config.folding.FONT_OPEN;
      this.config.folding.foldingTips = this.config.folding.TIPS_OPEN;
    } else {
      this.isFolding = true;
      this.config.folding.foldingFont = this.config.folding.FONT_FOLDED;
      this.config.folding.foldingTips = this.config.folding.TIPS_FOLDED;
    }
    this.currFile = this.config._currFile;  // 手动更新编辑器
  }

  /**
   * @export
   * @return {?aceEditor.File}
   */
  get currFile() {
    return this.config._currFile;
  }

  /**
   *  @export
   * @param {?aceEditor.File} file
   */
  set currFile(file) {
    this.config._currFile = file;
    this.config.editor.setSession(file.editorSession);
    this.config.editor.getSession().setUndoManager(file.undoManager);
    this.config.editor.setReadOnly(file.readOnly);
  }
}

/**
 * ace 编辑器配置
 */
export const AceEditorComponent = {
  controller: AceEditorController,
  controllerAs: '$ctrl',
  templateUrl: 'editors/aceeditor/aceeditor.html',
  bindings: {
    'files': '<',
    'isFolding': '=',
  },
};
