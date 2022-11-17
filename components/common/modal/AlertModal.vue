<template>
  <div id="alertPops" class="alert_pops">
    <div class="title">
      <span class="tit">전체 알림</span>
      <span class="del_area">
        <button class="btn">읽은 알림 삭제</button>
        <button class="btn" @click="$emit('delete-all')">전체 삭제</button>
        <button class="btn close_alert icons_close"></button>
      </span>
    </div>
    <div class="cnts">
      <!-- [개발참조]: 알림이 없을때 -->
      <div v-if="newContentThreeList.length === 0" class="alert_none">
        새로운 알림이 없습니다.
      </div>

      <!-- 알림기본박스 -->
      <div
        v-for="(item, idx) in newContentThreeList"
        v-else
        :key="idx"
        class="alert_box"
      >
        <div class="tit_area" @click="onClickDetail(item.type)">
          <label
            :class="
              item.type === '질문'
                ? 'type01'
                : item.type === '과제'
                ? 'type02'
                : 'type03'
            "
            >{{ item.type }}함</label
          >
          <span class="tit">{{ item.subject }}</span>
        </div>
        <div class="info_area" @click="onClickDetail(item.type)">
          <div class="teacher">
            <span class="cat">{{ item.lecture.lessonTitle }}</span>
            <span class="cat">{{ item.lecture.subject }}</span>
            <span class="cat">{{ item.lecture.lessonClass }}</span
            ><span class="cat">{{ item.lecture.teacher }}</span>
          </div>
          <div class="date">어제 오전 9:00</div>
        </div>
        <button
          class="btn btn_del icons_x_circle_off"
          type="button"
          @click="$emit('click-delete', item.id, item.date)"
        ></button>
      </div>
    </div>
    <a
      href="javascript:;"
      class="btn_area close_alert"
      data-toggle="modal"
      data-target="#modalAlertclasslink"
    >
      <i class="icons_plus_circle"></i> 알림 더보기
    </a>
  </div>
</template>
<script>
export default {
  name: 'AlertModal',
  props: {
    newContentThreeList: {
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
