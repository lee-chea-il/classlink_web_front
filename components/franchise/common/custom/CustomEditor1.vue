<template>
  <!-- <div> -->
  <ValidationProvider v-slot="{ errors }" :rules="rules">
    <client-only v-for="(item, idx) in itemList" :key="idx">
      <VueEditor
        v-if="currentIdx === idx"
        v-model="item.question"
        :name="name"
        :editorToolbar="editorToolbar"
        :editorOptions="editorOptions"
        :useCustomImageHandler="true"
        @image-added="handleImageAdded"
      />
      <div class="invalid_text">
        {{ errors[0] }}
      </div>
    </client-only>
  </ValidationProvider>
  <!-- </div> -->
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
    name: {
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
        ['image', 'code-block'],
      ],
    }
  },
  methods: {
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      console.log(file)
      const formData = new FormData()
      formData.append('file', file)
      console.log(file)

      api
        .postFile(formData)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>