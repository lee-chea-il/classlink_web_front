<template>
  <div class="search_section">
    <div class="left_area">
      <ButtonItem title="복사" color="default" @click-item="$emit('copy')" />
      <ButtonItem
        title="붙여넣기"
        color="default"
        @click-item="$emit('paste')"
      />
      <ButtonItem title="삭제" color="delete" @click-item="$emit('delete')" />
    </div>

    <div class="right_area">
      <SearchTextBox
        :open="pageType === 'reference'"
        :value="value"
        @open-search-list="$emit('open-search-list')"
        @change-word="$emit('change-word', $event)"
      />
      <ButtonItem
        v-show="pageType === 'reference'"
        title="필터"
        color="filter"
        @click-item="$emit('open-filter', $event)"
      />
      <ButtonItem
        v-show="pageType === 'reference'"
        title="등록"
        color="point"
        data-toggle="modal" 
        data-target="#modalDataregi"
      />
      <ButtonItem
        v-show="pageType === 'lesson'"
        title="등록"
        color="point"
        data-toggle="modal"
        data-target="#modalCuriRegi"
        @click-item="$emit('open-add')"
      />
    </div>
  </div>
</template>

<script>
import SearchTextBox from './SearchTextBox.vue'
import ButtonItem from './ButtonItem.vue'

export default {
  name: 'MainBtnBox',
  components: { SearchTextBox, ButtonItem },
  props: {
    open: { type: Boolean, default: false },
    value: { type: String, default: '' },
    pageType: { type: String, default: '' },
  },
}
</script>

<style></style>
