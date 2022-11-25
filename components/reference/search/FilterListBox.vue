<template>
  <div class="filterWrap" :class="className">
    <div class="title filter_name">{{ title }}</div>
    <div class="filterBox">
      <CustomFilterBox
        v-for="(item, idx) in itemList"
        :id="id + idx"
        :key="idx"
        :label="idx === 0 ? '전체' : item.name"
        :listItem="listData"
        :allCheck="idx === 0 ? true : false"
        :name="name"
        @click-item="$emit('click-item', $event)"
      />
    </div>
  </div>
</template>

<script>
import CustomFilterBox from '../commom/CustomFilterBox.vue'

export default {
  name: 'FilterListBox',
  components: { CustomFilterBox },
  props: {
    className: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    itemList: {
      type: Array,
      default: () => [],
    },
    listData: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
#modalDatafilter .filter_name.title {
  font-weight: 500;
  white-space: nowrap;
}
.filterWrap.filter_first,
.filterWrap.filter_second,
.filterWrap.filter_forth {
  display: flex;
  padding: 10px 17px;
}

#modalDatafilter .filter_forth {
  margin: 0 0;
}
/* filterBox */
</style>
