<template>
  <div>
    <div v-for="(item, idx) in itemList.exampleList" :key="idx" class="example">
      <div class="tit">
        <div class="custom-control custom-radio custom-control-inline">
          <input
            :id="!changePage ? `item${idx}` : `target${idx}`"
            type="radio"
            name="radB"
            class="custom-control-input"
            :checked="itemList.answer === idx + 1"
            @click="$emit('select-answer', idx)"
          />
          <label
            class="custom-control-label"
            :for="!changePage ? `item${idx}` : `target${idx}`"
          >
            보기{{ idx + 1 }} <br /><span
              v-if="itemList.answer === idx + 1"
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
export default {
  name: 'CustomDescEditor',
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
