<template>
  <ValidationProvider
    v-slot="{ errors }"
    rules="start_limit|end_limit|edit_required"
  >
    <div class="edit_area">
      <client-only v-for="(item, idx) in itemList" :key="idx" class="edit_wrap">
        <VueEditor
          v-if="currentIdx === idx"
          id="quiz_editor"
          v-model="item.question"
          :editorToolbar="editorToolbar"
          :editorOptions="editorOptions"
          :useCustomImageHandler="true"
          @image-added="handleImageAdded"
        />
        <div v-if="currentIdx === idx && errors[0] !== ''" class="invalid_text">
          {{ errors[0] }}
        </div>
      </client-only>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { api } from '~/services'

export default {
  name: 'CustomEditor',
  components: {
    ValidationProvider,
  },
  props: {
    itemList: {
      type: Array,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
    rules: {
      type: String,
      default: '',
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
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
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
          const img = `${process.env.VUE_APP_FILE_URL}${data.savedNm}`
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
.invalid_text {
  position: absolute;
  left: 2%;
  bottom: 22px;
}
</style>
