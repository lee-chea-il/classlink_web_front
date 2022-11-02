<template>
  <div>
    <div v-for="(item, idx) in itemList.exampleList" :key="idx" class="example">
      <div class="tit">
        <div class="custom-control custom-radio custom-control-inline">
          <input
            :id="`item${idx}`"
            type="radio"
            name="radB"
            class="custom-control-input"
            :checked="itemList.answer === idx"
            @click="$emit('select-answer', idx)"
          />
          <label class="custom-control-label" :for="`item${idx}`">
            보기{{ idx + 1 }} <br /><span
              v-if="itemList.answer === idx"
              class="exp_smtxt"
              >(정답)</span
            >
          </label>
        </div>
      </div>
      <div class="edit_area_inline">
        <div>
          <client-only>
            <VueEditor
              v-model="item.example"
              :editorOptions="editorOptions"
              :editorToolbar="editorToolbar"
            />
          </client-only>
        </div>
      </div>
      <button v-if="idx !== 0" class="btn icons_x_circle_off"></button>
      <button
        v-else
        class="btn icons_x_circle_off"
        style="opacity: 0; cursor: default"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomDescEditor',
  props: {
    itemList: {
      type: Object,
      default: null,
    },
    currentPageIdx: {
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
}
</script>

<style scoped>
div.example {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
