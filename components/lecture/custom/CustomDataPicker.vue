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
        <div class="modal-footer">
          <button class="btn btn_crud_default" @click="$emit('close')">
            취소
          </button>
          <button
            class="btn btn_crud_point"
            @click="$emit('select-date', range)"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
export default {
  name: 'CustomDataPicker',
  components: {
    DatePicker,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    scheduleItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      range: {
        start: '2022-11-01',
        end: '2022-11-02',
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
