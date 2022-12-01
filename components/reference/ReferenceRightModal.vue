<template>
  <div class="right_area">
    <div class="regi_area right">
      <div class="thumb_box">
        <!-- [개발참조] 동영상, 문서 미리보기 칸 -->
        <div class="row">
          <div class="title">미리보기</div>
          <div class="thumbnail_view">
            <video
              v-show="
                reference.uploadType === 'video' ||
                reference.uploadType === 'music'
              "
              id="video"
              class="video"
              :src="reference.savePath"
              controls
            />
            <iframe
              v-show="
                reference.uploadType === 'pdf' ||
                reference.uploadType === 'youtube' ||
                reference.uploadType === 'url'
              "
              id="embed"
              class="embed"
              :src="reference.savePath"
              frameborder="0"
            />
          </div>
        </div>
        <div style="padding-top: 30px"></div>
        <ContentLabel title="자료 구분" :value="reference.fileDivision" />
        <ContentLabel title="유형" :value="reference.fileType" />
        <ContentLabel title="등록 일시" :value="getDate" />

        <ContentLabel
          v-if="
            reference.uploadType === 'youtube' || reference.uploadType === 'url'
          "
          title="주소"
          :value="reference.savePath"
        />

        <ContentLabel
          v-else
          title="용량"
          :value="getByteSize(reference.fileVolume)"
        />
        <ContentLabel title="등록자" value="홍길동" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentLabel from './commom/ContentLabel.vue'

export default {
  name: 'ReferenceRightModal',
  components: { ContentLabel },
  props: {
    reference: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getDate() {
      const date = this.reference?.createAt
      if (date) {
        return `${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}`
      } else {
        return null
      }
    },
  },
  methods: {
    getByteSize(size) {
      const byteUnits = ['KB', 'MB', 'GB', 'TB']
      for (let i = 0; i < byteUnits.length; i++) {
        size = Math.floor(size / 1024)
        if (size < 1024) return size.toFixed(1) + byteUnits[i]
      }
    },
  },
}
</script>

<style scoped>
.video,
.canvas,
.embed,
.iframe {
  width: 100%;
  height: 100%;
}
</style>

<style>
.ndfHFb-c4YZDc-DARUcf-NnAfwf-i5oIFb {
  font-size: 10px !important;
}
</style>
