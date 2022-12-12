<template>
  <div class="right_area">
    <div class="regi_area right">
      <PageNumberList
        :itemList="quizList"
        :currentIdx="currentPageIdx"
        @change-number="$emit('change-number', $event)"
        @plus-item="$emit('plus-item', $event)"
      />

      <div class="write_area">
        <PreviewField :currentPageIdx="currentPageIdx" @preview="setPreview" />

        <div class="edit_area">
          <client-only v-for="(item, idx) in quizList" :key="idx">
            <ValidationProvider
              v-slot="{ errors }"
              rules="edit_limit|edit_required"
            >
              <VueEditor
                v-if="currentPageIdx === idx"
                v-model="item.problem"
                :editorToolbar="editorToolbar"
                :editorOptions="editorOptions"
                :useCustomImageHandler="true"
                @image-added="handleImageAdded"
              />
              <div
                v-if="currentPageIdx === idx && errors[0]"
                class="invalid_text"
                style="margin: -16px 0 0 8px"
              >
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </client-only>
        </div>

        <PaginationDelBtn
          :currentIdx="currentPageIdx"
          :length="quizList?.length"
          @delete-quiz="$emit('delete-quiz', $event)"
          @pagination="setPagination"
        />
      </div>
      <QuizFormField
        :quizList="quizList"
        :currentIdx="currentPageIdx"
        :isCreate="isCreate"
        @change-item="onChangeItem"
        @select-type="setSelectType"
        @select-ox="setSelectOx"
        @select-dificultade="setSelectDificultade"
      />
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
// import CustomEditor from '../common/custom/CustomEditor.vue'
import PreviewField from './PreviewField.vue'
import PageNumberList from './PageNumberList.vue'
import QuizFormField from './QuizFormField.vue'
import PaginationDelBtn from './PaginationDelBtn.vue'
// import { api } from '~/services'

export default {
  name: 'QuizRightField',
  components: {
    // CustomEditor,
    PageNumberList,
    PaginationDelBtn,
    QuizFormField,
    PreviewField,
    ValidationProvider,
  },
  props: {
    quizList: {
      type: Array,
      default: () => [],
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
    isCreate: { type: Boolean, default: false },
  },
  data() {
    return {
      editorOptions: {
        modules: {
          imageDrop: true,
          imageEdit: true,
        },
      },
      editorToolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block'],
      ],
    }
  },
  methods: {
    setPreview(prev, isFirst) {
      this.$emit('preview', prev, isFirst)
    },
    setPagination(target, idx) {
      this.$emit('pagination', target, idx)
    },
    onChangeItem(e, idx) {
      this.$emit('change-item', e, idx)
    },
    setSelectType(e, idx, num) {
      this.$emit('select-type', e, idx, num)
    },
    setSelectOx(idx, num) {
      this.$emit('select-ox', idx, num)
    },
    setSelectDificultade(idx, num) {
      this.$emit('select-dificultade', idx, num)
    },
  },
}
</script>

<style></style>
