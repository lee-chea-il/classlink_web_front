<template>
  <div class="form-group">
    <label for="">키워드</label>
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
      <div v-show="keyword.length" class="keyword_area_01">
        <span v-for="(item, idx) in keyword" :key="idx" class="keyword01">
          <span class="keyword01-1">{{ item }}</span
          ><span class="x" @click="$emit('delete-keyword', idx)"></span>
        </span>
      </div>
      <span class="info">키워드는 엔터로 구분할 수 있습니다</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomKeywordArea',
  props: {
    keyword: {
      type: Array,
      default: () => [],
    },
    pushKeyword: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
