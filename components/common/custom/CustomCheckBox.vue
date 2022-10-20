<template>
  <div class="custom-control custom-checkbox">
    <input
      type="checkbox"
      :id="checkBoxData.id"
      name="customCheck"
      class="custom-control-input"
      @change="changeCheckbox"
      :checked="checkBoxData.checked"
    />
    <label class="custom-control-label" :for="checkBoxData.id">{{
      checkBoxData.title
    }}</label>
    <i
      v-if="checkBoxData.targetModal != undefined"
      class="icons_arrow_r"
      data-toggle="modal"
      :data-target="checkBoxData.targetModal"
    ></i>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    checkBoxData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeCheckbox(e) {
      this.$emit("toggle-checkbox", {
        //emit 상위에 toggle-checkbox 디스패치(미테 json으로 보냄)
        id: this.checkBoxData.id,
        checked: e.target.checked,
      });
    },
  },
});
</script>

<style scoped></style>
