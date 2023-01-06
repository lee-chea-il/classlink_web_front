<template>
  <div class="quiz_area02 comment_area">
    <div class="tit_area">
      <div class="tit">해설</div>
      <div class="check">
        <div class="custom-control custom-checkbox form-inline">
          <input
            id="checkbox01"
            type="checkbox"
            class="custom-control-input"
            :checked="checked"
            disabled
          />
          <label class="custom-control-label" for="checkbox01"
            >정답 및 해설 노출</label
          >
        </div>
      </div>
    </div>
    <div class="cnt_area">
      <textarea
        class="textarea"
        rows="3"
        placeholder="입력한 해설"
        :value="value"
        readonly
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentaryExam',
  props: {
    value: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.modal_ac_manage_dtr
  .modal-body
  .reading_section.modal_dataquiz
  .comment_area
  .cnt_area
  textarea {
  padding: 8px;
  font-size: 14px;
}
</style>
