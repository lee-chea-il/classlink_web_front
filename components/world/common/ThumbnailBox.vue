<template>
  <div>
    <div class="form-group row">
      <label for="" class="data_title"
        >썸네일 등록 <br /><span class="exp_txt02">(선택사항)</span></label
      >
      <div class="col">
        <div class="form-group">
          <input
            class="form-control form-inline front_button"
            autocomplete="off"
            placeholder="등록할 썸네일을 선택해주세요"
          />
          <input
            id="thumbnail"
            ref="thumbnail"
            type="file"
            name="thumbnail"
            accept="image/*"
            style="display: none"
            @input="$emit('change-input', $event)"
          />
          <button
            class="btn btn_crud_default"
            data-toggle="modal"
            @click="clickBtn"
          >
            찾아보기
          </button>
        </div>
      </div>
    </div>

    <!-- [개발참조] 썸네일 등록했을때 출력됨 -->
    <div v-show="imgValue" class="place_box">
      <button
        class="btn icons_x_circle_off btn_close"
        @click="$emit('delete-thumbnail')"
      ></button>
      <div class="space">
        <img
          id="reference_thumbnail"
          class="img"
          :src="imgValue"
          alt="thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThumbnailBox',
  props: {
    imgValue: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickBtn() {
      this.$refs.thumbnail.click()
    },
  },
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
#modalDataRegiModi .space {
  background: none;
}
</style>
