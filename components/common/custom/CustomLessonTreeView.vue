<template>
  <div>
    <vue-tree-list
      :model="datas"
      :default-expanded="false"
      listType="lessonList"
      :is-drop="true"
      :is-show-option="false"
      @more-show-click="moreShowClick"
      @more-remove-click="moreRemoveClick"
      @drop-before="dropBefore"
    >
      <span slot="addTreeNodeIcon" class="icon">＋</span>
      <span slot="addLeafNodeIcon" class="icon"></span>
      <span slot="addTreeNodeIcon" class="icon"></span>
      <span slot="delNodeIcon" class="icon"></span>
    </vue-tree-list>
  </div>
</template>

<script>
import $ from 'jquery'
import { VueTreeList, Tree } from 'vue-tree-list'
export default {
  name: 'CustomListViewLesson',
  components: {
    VueTreeList,
  },
  props: {
    pidNum: {
      type: Number,
      default: 0,
    },
    expanded: {
      type: Boolean,
      default: true,
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      datas: new Tree(false, []),
      pid: this.pidNum,
      isEmptyData: true,
    }
  },
  watch: {
    dataList: {
      handler(value, oldValue) {
        this.datas = new Tree(false, this.dataMapping(value, false))
      },
      immediate: false,
    },
  },
  mounted() {
    if (this.dataList.length === 0) {
      this.isEmptyData = true
      this.setEmptyArea()
    } else {
      this.isEmptyData = false
      this.datas = new Tree(false, this.dataMapping(this.dataList, false))
    }
  },
  methods: {
    moreShowClick(node) {
      this.$emit('moreShowClick', node)
    },
    moreRemoveClick(node) {
      node.remove()
      this.setEmptyAreaHeight()
      this.$emit('remove-lesson', node)
    },
    dataMapping(item, isReadOnly) {
      const result = []
      const len = item.length
      for (let i = 0; i < len; i++) {
        result[i] = {
          name: item[i].name,
          id: 'list_' + this.pid,
          pid: this.pid,
          isLeaf: true,
          readOnly: isReadOnly,
          type: item[i].type,
          dbIdx: item[i].dbIdx,
          desc: item[i].desc,
        }
        this.pid++
      }
      return result
    },
    setEmptyArea() {
      const dummy = [
        {
          name: '',
          type: '',
          dbIdx: -1,
        },
      ]
      this.pid = this.pidNum
      this.datas = new Tree(false, this.dataMapping(dummy, false))
      setTimeout(() => {
        let target = $(`#list_${this.pidNum}`).find('.vtl-node-main')
        target.css({ height: '0px', opacity: '0' })
        target.html('')
        target = $(`#list_${this.pidNum}`).find('.vtl-border')
        target.css({ height: '250px', opacity: '0' })
      }, 10)
    },
    dropBefore({ node, isCopy, target }) {
      if (isCopy) {
        for (const item in node) {
          if (item !== 'parent' && item !== 'readOnly' && item !== 'isLeaf') {
            target[item] = node[item]
          }
        }
        target.id = 'list_' + this.pid
        this.pid++
        this.setEmptyAreaHeight()
      }
    },
    setEmptyAreaHeight() {
      let nHei = 250
      nHei = nHei - (this.datas.children.length - 1) * 40
      if (nHei < 10) nHei = 10
      const target = $(`#list_${this.pidNum}`).find('.vtl-border')
      target.css({ height: nHei + 'px' })
      this.$emit('add-lesson', this.datas)
    },
  },
}
</script>
<style>
.modal_Lessonregi .divide_area.right .vtl .custom-checkbox {
  display: none;
}
#modalLessonRegi .check_sec .form-inline {
  display: block;
}
.modal_Lessonregi .divide_area.right .vtl .icon_mp4_sm,
.modal_Lessonregi .divide_area.right .vtl .icon_pdf_sm,
.modal_Lessonregi .divide_area.right .vtl .icon_exam_sm,
.modal_Lessonregi .divide_area.right .vtl .icon_quiz_sm,
.modal_Lessonregi .divide_area.right .vtl .icon_link_sm,
.modal_Lessonregi .divide_area.right .vtl .utobe {
  margin-right: 10px;
}
.icons_zoom_off {
  margin-left: auto;
  margin-right: 6px;
}
.icons_x_circle_off {
  margin-right: 6px;
}
</style>
