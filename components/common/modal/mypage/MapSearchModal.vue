<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="map">
            <VueDaumPostcode @complete="(e) => $emit('openMap', e)" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
import { VueDaumPostcode } from 'vue-daum-postcode'
export default {
  components: { VueDaumPostcode },
  props: { show: Boolean },
}
</script>
<style scoped>
.background_close {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9997;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  z-index: 9998;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
}

.modal-container {
  padding: 10px 30px;
  background-color: #fff;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-container div {
  margin: 5px 0;
  overflow-y: scroll;
  overflow-x: auto;
  height: 100%;
  min-height: 470px;
  max-height: 700px;
  padding: 0;
}
.modal-header h3 {
  margin-top: 0;
  color: #f8b62c;
}

.modal-body {
  margin: 20px 0;
}

.modal-body p {
  margin: 20px 0;
  font-size: 18px;
}

.modal-default-button {
  float: right;
  background: #f8b62c;
  padding: 8px 24px;
  color: white;
  border-radius: 15px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}

.map {
  -ms-overflow-style: none;
}
.map::-webkit-scrollbar {
  display: none;
}
</style>
