<template>
  <div class="status">
    <i :class="dataList.class"></i>
    <div class="custom-control custom-radio">
      <input
        :id="dataList.id"
        type="radio"
        name="customRadio"
        class="custom-control-input"
        :checked="dataList.checked"
        @change="changeRadiobox"
      />
      <label class="custom-control-label" :for="dataList.id">{{
        dataList.title
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomIdentityBtn',
  props: {
    dataList: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    changeRadiobox(e) {
      this.$emit('toggle_radiobox', {
        id: this.dataList.id,
        checked: e.target.checked,
        title: this.dataList.title,
      })
    },
  },
}
</script>

<style scoped>
</style>
