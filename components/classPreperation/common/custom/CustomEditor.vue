<template>
  <div>
    <client-only v-for="(item, idx) in itemList" :key="idx">
      <VueEditor
        v-if="currentIdx === idx"
        v-model="item.problem"
        :editorToolbar="editorToolbar"
        :editorOptions="editorOptions"
        :useCustomImageHandler="true"
        @image-added="handleImageAdded"
      />
      {{ item.problem }}
    </client-only>
  </div>
</template>

<script>
import { api } from '~/services'

export default {
  name: 'CustomEditor',
  props: {
    itemList: {
      type: Array,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
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

      api
        .postFile(formData)
        .then((res) => {
          console.log(res)
          // console.log(idt_name)
          // const url = result.data.url // Get url from response
          // Editor.insertEmbed(cursorLocation, 'image', url)
          // resetUploader()
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
