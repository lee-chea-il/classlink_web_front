<template>
  <div class="form-group">
    <label for="">레슨 자료</label>
    <div class="col">
      <div class="list_box">
        <div class="sum">
          등록 개수: <span>{{ reference?.length }}</span
          >개
        </div>
        <div class="list_area">
          <ul>
            <li v-for="(item, idx) in reference" :key="idx">
              <span
                :class="item.type === 'institution' ? 'inst' : 'fran'"
              ></span>
              <span>{{ item.name }}</span>
              <i
                class="btn icons_zoom_off"
                @click="$emit('select-reference', item)"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonFileField',
  props: {
    reference: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style></style>
