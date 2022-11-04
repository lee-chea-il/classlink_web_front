<template>
  <div class="num_area">
    <!-- [개발참조] 문항 20개 이상부터는 +버튼이 보이지 않게 돼 추가할 수 없음 -->
    <button
      v-for="(item, idx) in itemList"
      :key="idx"
      class="num"
      :class="{ active: idx === currentIdx }"
      @click="$emit('change-number', idx)"
    >
      {{ idx + 1 }}
    </button>
    <button v-if="itemList?.length !== 20" class="num plus">
      <i
        class="btn icons_plus_circle_off"
        @click="$emit('plus-item', $event)"
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PageNumberList',
  props: {
    itemList: {
      type: Array,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
