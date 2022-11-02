import Vue from 'vue'
import Vue2Editor, { Quill } from 'vue2-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageEdit from 'quill-image-edit-module'

Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageEdit', ImageEdit)

Vue.use(Vue2Editor)
