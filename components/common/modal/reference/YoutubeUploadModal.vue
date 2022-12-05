<template>
  <div
    id="modalDataregi03"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">자료 등록</h5>
          <button
            id="selectCloseYoutube"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          >
            <i class="icons_close"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="modal_dataregi">
            <!-- 유튜브일 경우 -->
            <InputBox
              v-show="uploadType === 'youtube'"
              name="youtube"
              :value="urlData.youtube"
              title="유튜브 동영상 주소(URL)를 입력해 주세요"
              desc="유튜브 동영상 주소(URL)를 입력하여 등록할 수 있습니다.
                youtu.be 또는 youtube.com으로 시작하는 URL만 등록 가능"
              @change-url="$emit('change-url', $event)"
              @upload-youtube="$emit('upload-youtube')"
            />
            <!-- URL의 경우 -->
            <InputBox
              v-show="uploadType === 'url'"
              name="page"
              :value="urlData.page"
              title="URL을 입력해 주세요"
              desc="URL을 입력하여 등록할 수 있습니다."
              @change-url="$emit('change-url', $event)"
              @upload-youtube="$emit('upload-page')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBox from '~/components/reference/commom/UrlInputBox.vue'

export default {
  name: 'YoutubeUploadModal',
  components: { InputBox },
  props: {
    urlData: {
      type: Object,
      default: () => {},
    },
    uploadType: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
