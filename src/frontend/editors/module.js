/**
 * Created by lcl on 2017/9/21.
 */
import {AceEditorComponent} from './aceeditor/aceeditor_component';

export default angular
    .module(
        'ace.editors',
        [
          'ui.ace'
        ])
    .component('kdAce', AceEditorComponent)
