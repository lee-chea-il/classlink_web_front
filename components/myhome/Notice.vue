<template>
  <div class="notice">
    <div class="title_area">
      <h4 class="title">공지사항</h4>
      <!-- <span class="num">999+</span> 필요시 사용 -->
      <nuxt-link to="/management/notice/all" class="more">
        <i class="icons_plus_circle_on"></i> 더보기
      </nuxt-link>
    </div>
    <div class="cnts">
      <ul id="pills-tab" class="nav nav-pills" role="tablist">
        <li
          v-for="(item, idx) in noticeTabMenuList"
          :key="idx"
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link"
            :class="idx === selectedNoticeTab ? 'active' : ''"
            data-toggle="pill"
            data-target="#notice_tab01"
            type="button"
            role="tab"
            aria-controls="pills"
            :aria-selected="idx === selectedNoticeTab ? 'true' : 'false'"
            @click="$emit('selected-tab', idx)"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
      <div id="pills-tabContent" class="tab-content">
        <div
          id="#notice_tab01"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="pills-tab"
        >
          <div class="list_area">
            <div v-if="noticeList.length === 0" class="nothing_txt txt_height">
              새로운 소식이 없습니다.
            </div>
            <div v-else>
              <ul v-if="selectedNoticeTab === 0">
                <li v-for="(item, idx) in noticeList" :key="idx">
                  <span class="type">{{
                    noticeTabMenuList[item.category].title
                  }}</span>
                  <span class="subject">{{ item.subject }}</span>
                  <i class="icons_new"></i>
                  <span class="date">{{ item.date }}</span>
                </li>
              </ul>
              <ul v-else>
                <li v-for="(item, idx) in selectedNoticeList" :key="idx">
                  <span class="type">{{
                    noticeTabMenuList[item.category].title
                  }}</span>
                  <span class="subject">{{ item.subject }}</span>
                  <i class="icons_new"></i>
                  <span class="date">{{ item.date }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Notice',
  props: {
    noticeTabMenuList: {
      type: Array,
      default: () => [],
    },
    selectedNoticeTab: {
      type: Number,
      default: 0,
    },
    noticeList: {
      type: Array,
      default: () => [],
    },
    selectedNoticeList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped></style>
