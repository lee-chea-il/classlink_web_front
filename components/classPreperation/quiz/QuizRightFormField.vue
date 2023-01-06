<template>
  <div v-if="show" class="info_area">
    <div class="row">
      <QuizOxField
        :checked="item.type === 'OX'"
        :className="item.correct"
        :item="item"
      />
      <QuizBrowsePreview @preview="setPreview" />
      <QuizShortForm
        style="padding-top: 40px"
        :checked="item.type === 'EQ'"
        :value="item.correct"
      />
      <QuizShortAnswer
        style="padding-top: 40px"
        :type="item.type"
        :correct="item.correct"
        :wrong="item.wrong"
      />
      <QuizDifficultyAndTime
        style="padding-top: 62px"
        :level="item.level"
        :time="item.limit_time"
      />
    </div>
  </div>
</template>

<script>
import QuizOxField from './QuizOxField.vue'
import QuizBrowsePreview from './QuizBrowsePreview.vue'
import QuizShortForm from './QuizShortForm.vue'
import QuizShortAnswer from './QuizShortAnswer.vue'
import QuizDifficultyAndTime from './QuizDifficultyAndTime.vue'

export default {
  name: 'QuizRightFormField',
  components: {
    QuizShortForm,
    QuizShortAnswer,
    QuizDifficultyAndTime,
    QuizBrowsePreview,
    QuizOxField,
  },
  props: {
    show: { type: Boolean, default: false },
    item: { type: Object, default: () => {} },
    currentIdx: { type: Number, default: 0 },
  },
  methods: {
    setPreview(e, idx) {
      this.$emit('preview', e, idx)
    },
  },
}
</script>

<style></style>
