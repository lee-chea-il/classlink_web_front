<template>
  <Transition name="modal">
    <div
      v-show="open"
      class="modal modal-mask modal-third"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
      x-index="-1"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="dataWrap">
        <DatePicker
          :value="teacherInfo.birthday"
          :masks="{ title: 'YYYY MMM' }"
          @dayclick="$emit('select-date', $event)"
        />
        <div class="modal-footer">
          <button class="btn btn_crud_default" @click="$emit('close')">
            취소
          </button>
          <button class="btn btn_crud_point" @click="$emit('confirm')">
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
    teacherInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
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

.modal-third {
  z-index: 9999 !important;
}
</style>
