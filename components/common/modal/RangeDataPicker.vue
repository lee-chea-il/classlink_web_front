<template>
  <Transition name="modal">
    <div
      v-show="open"
      class="modal double modal-mask"
      tabindex="-1"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="dataWrap">
        <DatePicker v-model="range" is-range />
        <ModalBtnBox
          submitTxt="확인"
          @submit="$emit('select-date', range)"
          @close="$emit('close')"
        />
      </div>
    </div>
  </Transition>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import ModalBtnBox from '../ModalBtnBox.vue'
export default {
  name: 'RangeDataPicker',
  components: {
    DatePicker,
    ModalBtnBox,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
}
</script>

<style scoped>
.dataWrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background: white;
  padding: 20px;
  border-radius: 5px;
}

.modal .modal-footer {
  padding-bottom: 0;
}
</style>
