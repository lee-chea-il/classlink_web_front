<template>
  <div class="status">
    <i :class="datas.class"></i>
    <div class="custom-control custom-radio">
      <input
        @change="changeRadiobox"
        type="radio"
        :id="props.datas.id"
        name="customRadio"
        class="custom-control-input"
        :checked="props.datas.checked"
      />
      <label class="custom-control-label" :for="props.datas.id">{{
        props.datas.title
      }}</label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  datas: {
    type: Object,
    required: true,
  },
});
const changeRadiobox = (e) => {
  emit("toggle-radiobox", {
    id: props.datas.id,
    checked: e.target.checked,
    title: props.datas.title,
  });
};
const emit = defineEmits(["toggle-radiobox"]);
</script>

<style scoped></style>
