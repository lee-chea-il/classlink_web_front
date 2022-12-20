<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalFrcsignup"
      class="modal modal_ac_manage2_frcsignup modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">프랜차이즈 가입</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="title">가맹코드를 입력하세요.</div>
            <div class="input-group input-search form-inline">
              <input
                v-model="syncedCodeSearch"
                type="text"
                maxlength="13"
                class="form-control"
                placeholder="가맹코드 검색"
                @keyup.enter="$emit('search')"
              />
              <div class="input-group-append">
                <!-- <button class="btn icons_x_circle_off" type="button"></button> -->
                <button
                  class="btn icons_search_off"
                  type="button"
                  @click="$emit('search')"
                ></button>
              </div>
            </div>
            <div v-if="searchFranchise !== null" class="preview">
              <i
                class="icons_thumbnail"
                :style="`background-image: url(${searchFranchise?.fra_img})`"
              ></i>
            </div>
            <div v-if="searchFranchise !== null">
              찾으시는 프랜차이즈가 맞다면 <br />
              가입을 요청해주세요.
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_point"
              :disabled="searchFranchise === null"
            >
              가입요청
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'FranchiseSignUpModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    codeSearch: {
      type: String,
      default: '',
    },
    searchFranchise: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    syncedCodeSearch: {
      get() {
        return this.codeSearch
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, '')
          .replace(/ /g, '')
          .replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      },
      set(value) {
        this.$emit('update:codeSearch', value)
      },
    },
  },
}
</script>

<style></style>
