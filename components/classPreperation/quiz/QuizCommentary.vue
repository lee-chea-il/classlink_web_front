<template>
  <div v-if="show" class="comment_area">
    <div class="tit_area">
      <div class="tit">해설</div>
      <div class="check">
        <div class="custom-control custom-checkbox form-inline">
          <input
            id="checkbox01"
            type="checkbox"
            class="custom-control-input"
            checked
            disabled
          />
          <label class="custom-control-label" for="checkbox01"
            >정답 및 해설 노출</label
          >
        </div>
      </div>
    </div>
    <div class="cnt_area">
      <textarea id="" readonly rows="3" placeholder="입력한 해설"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizCommentary',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
