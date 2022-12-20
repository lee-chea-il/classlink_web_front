<template>
  <div class="main06">
    <div class="main_tit_sec">
      <div class="main_tit03">공지사항</div>
      <div class="main_more"><i class="icons_plus_circle_on"></i>더보기</div>
    </div>

    <div class="main_notice">
      <div v-for="(item, idx) in noticeList" :key="idx">
        <div class="main_notice_cnt">
          <span class="main_notice_tit01">공지</span>
          <span class="main_notice_tit02">{{ item.title }}</span>
          <span class="main_notice_tit03">{{ item.createdAt }}</span>
        </div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeList',
  props: {
    noticeList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
