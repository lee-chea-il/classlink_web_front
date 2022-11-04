<template>
  <div>
    <client-only v-for="(item, idx) in itemList" :key="idx">
      <VueEditor
        v-if="currentIdx === idx"
        v-model="item.problem"
        :editorOptions="editorOptions"
        :editorToolbar="editorToolbar"
      />
    </client-only>
  </div>
</template>

<script>
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
}
</script>

<style></style>
