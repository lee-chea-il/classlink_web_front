<template>
  <div class="learned_box">
    <div class="title_area">
      <h4 class="title">학습함</h4>
      <!-- <span class="num">999+</span> -->
      <nuxt-link
        v-if="selectedLearningTab !== 0"
        :to="selectedLearningTab === 2 ? '/class/lecturecourse' : ''"
        class="more"
      >
        <i class="icons_plus_circle_on"></i> 더보기
      </nuxt-link>
    </div>
    <div class="cnts">
      <ul id="pills-tab" class="nav nav-pills" role="tablist">
        <li
          v-for="(item, idx) in learningBoxTabMenuList"
          :key="idx"
          class="nav-item"
          role="presentation"
        >
          <button
            class="nav-link"
            :class="idx === selectedLearningTab ? 'active' : ''"
            data-toggle="pill"
            data-target="#learned_box_tab01"
            type="button"
            role="tab"
            aria-controls="pills"
            :aria-selected="idx === selectedLearningTab ? 'true' : 'false'"
            @click="$emit('selected-tab', idx)"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
      <div id="pills-tabContent" class="tab-content">
        <div
          id="learned_box_tab01"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="pills-tab"
        >
          <div class="list_area">
            <div
              v-if="learningList.length === 0"
              class="nothing_txt txt_height"
            >
              새로운 소식이 없습니다.
            </div>
            <div v-else>
              <ul v-if="selectedLearningTab === 0">
                <li v-for="(item, idx) in learningList" :key="idx">
                  <span class="type">{{ item.type }}</span>
                  <span
                    class="subject cursor"
                    @click="onClickDetail(item.type)"
                    >{{ item.subject }}</span
                  >
                  <i class="icons_new"></i>
                  <span class="date">{{ item.date }}</span>
                </li>
              </ul>
              <ul v-else>
                <li v-for="(item, idx) in selectedLearningList" :key="idx">
                  <span class="type">{{ item.type }}</span>
                  <span
                    class="subject cursor"
                    @click="onClickDetail(item.type)"
                    >{{ item.subject }}</span
                  >
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
  name: 'LearningBox',
  props: {
    learningBoxTabMenuList: {
      type: Array,
      default: () => [],
    },
    selectedLearningTab: {
      type: Number,
      default: 0,
    },
    learningList: {
      type: Array,
      default: () => [],
    },
    selectedLearningList: {
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
<style scoped>
.nothing_txt {
  justify-content: flex-start;
  top: 35px;
}
.cursor {
  cursor: pointer;
}
</style>
