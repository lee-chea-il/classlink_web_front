<template>
  <div
    id="modalAlertclasslink"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modalAlertclasslink"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="modalAlertclasslink" class="modal-title">클래스링크 알림</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="alert_cl_wrap">
            <!-- 알림1일단위 -->
            <div
              v-for="(item, idx) in alertDateList"
              :key="idx"
              class="alert_cl"
            >
              <div class="title">
                <i class="icons_clock"></i>
                <span>01월01일(월) - {{ item }}</span>
              </div>
              <div class="cnts">
                <!-- [개발참조]: 알림기본박스는 전체알림의 기본박스와 소스 동일함-->
                <!-- 알림기본박스 -->
                <div
                  v-for="(item_child, idx_child) in newContentList"
                  v-show="item === item_child.date"
                  :key="idx_child"
                  class="alert_box"
                >
                  <div class="tit_area" @click="onClickDetail(item_child.type)">
                    <label
                      :class="
                        item_child.type === '질문'
                          ? 'type01'
                          : item_child.type === '과제'
                          ? 'type02'
                          : 'type03'
                      "
                      >{{ item_child.type }}함</label
                    >
                    <span class="tit">{{ item_child.subject }}</span>
                  </div>
                  <div
                    class="info_area"
                    @click="onClickDetail(item_child.type)"
                  >
                    <div class="teacher">
                      <span class="cat">{{
                        item_child.lecture.lessonTitle
                      }}</span>
                      <span class="cat">{{ item_child.lecture.subject }}</span>
                      <span class="cat">{{
                        item_child.lecture.lessonClass
                      }}</span
                      ><span class="cat">{{ item_child.lecture.teacher }}</span>
                    </div>
                    <div class="date">어제 오전 9:00</div>
                  </div>
                  <button
                    class="btn btn_del icons_x_circle_off"
                    type="button"
                    @click="
                      $emit('click-delete', item_child.id, item_child.date)
                    "
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_default">읽은 알림 삭제</button>
          <button class="btn btn_crud_default" @click="$emit('delete-all')">
            전체 삭제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AlertMoreModal',
  props: {
    newContentList: {
      type: Array,
      default: () => [],
    },
    alertDateList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClickDetail(type) {
      if (type === '과제') {
        this.$emit('click-homework')
      } else if (type === '노트') {
        this.$emit('click-note')
      }
    },
  },
}
</script>
<style scoped></style>
