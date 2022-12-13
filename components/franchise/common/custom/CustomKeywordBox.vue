<template>
  <div class="form-group row">
    <label for="" class="data_title">키워드</label>
    <div id="inputBox" class="col">
      <input
        id="keyword"
        class="form-control"
        name="keyword"
        placeholder="입력"
        :value="pushKeyword"
        @input="$emit('change-keyword', $event)"
        @keyup.enter="$emit('set-keyword', $event)"
      />
      <div v-show="keyword?.length" class="keyword_area_01">
        <span v-for="(item, idx) in keyword" :key="idx" class="keyword01">
          <span class="keyword01-1">{{ item }}</span
          ><span class="x span" @click="$emit('delete-keyword', idx)"></span>
        </span>
      </div>
      <span class="info">키워드는 엔터로 구분할 수 있습니다</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomKeywordBox',
  props: {
    pushKeyword: {
      type: String,
      default: '',
    },
    keyword: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
#modalLessonRegi .x {
  cursor: pointer;
}
</style>
