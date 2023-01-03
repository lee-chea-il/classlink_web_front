<template>
  <div>
    <div
      v-for="(item, idx) in itemList.note_exam_ask_views"
      :key="idx"
      class="example"
    >
      <div class="tit">
        <div class="custom-control custom-radio custom-control-inline">
          <input
            :id="!changePage ? `item${idx}` : `target${idx}`"
            type="radio"
            :name="isCreate ? 'answer' : 'answerChange'"
            :checked="itemList.correct_no === idx + 1"
            class="custom-control-input"
            @click="$emit('select-answer', idx)"
          />
          <label
            class="custom-control-label"
            :for="!changePage ? `item${idx}` : `target${idx}`"
          >
            보기{{ idx + 1 }} <br /><span
              v-if="itemList.correct_no === idx + 1"
              class="exp_smtxt"
            >
              (정답)
            </span>
          </label>
        </div>
      </div>
      <div class="edit_area_inline">
        <ValidationProvider
          v-slot="{ errors }"
          rules="end_limit_desc|edit_required"
        >
          <client-only>
            <VueEditor
              v-model="item.example"
              :editorOptions="editorOptions"
              :editorToolbar="editorToolbar"
              :useCustomImageHandler="true"
              @image-added="handleImageAdded"
            />
          </client-only>
          <div class="invalid_text">{{ errors[0] }}</div>
        </ValidationProvider>
      </div>
      <button
        v-if="idx !== 0"
        class="btn icons_x_circle_off"
        @click="$emit('delete-example', currentPageIdx, idx)"
      ></button>
      <button
        v-else
        class="btn icons_x_circle_off"
        style="opacity: 0; cursor: default"
      ></button>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { api } from '~/services'
export default {
  name: 'CustomDescEditor',
  components: {
    ValidationProvider,
  },
  props: {
    itemList: {
      type: Object,
      default: () => {},
    },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
    changePage: {
      type: Boolean,
      default: false,
    },
    isCreate: {
      type: Boolean,
      default: false,
    },
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
        [
          'bold',
          // 'italic',
          //  'underline',
          //  'strike'
        ],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          // { align: 'justify' },
        ],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [
          'image',
          // 'code-block'
        ],
      ],
    }
  },
  methods: {
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file)

      api
        .postFile(formData)
        .then(({ data: { data } }) => {
          const img = `http://112.171.101.31:45290/file/${data.savedNm}`
          Editor.insertEmbed(cursorLocation, 'image', img)
          resetUploader()
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
div.example {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.invalid_text {
  margin-top: 12px;
}
</style>
