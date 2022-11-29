<template>
  <div class="form-group">
    <label for="">{{ title }}</label>
    <div class="input_area">
      <div class="input_file">
        <input
          type="text"
          :placeholder="placeholder"
          class="file_input_textbox"
          :value="value"
          readonly
        />
        <div class="file_input_div">
          <button class="btn btn_crud_default">{{ btnTitle }}</button>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            class="file_input_hidden"
            :data-target="target"
            @change="$emit('change-item', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnInput',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    btnTitle: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
