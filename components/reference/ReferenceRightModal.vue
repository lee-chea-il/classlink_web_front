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
            <!-- src="https://docs.google.com/viewer?url=http://112.171.101.31:58080/fire-safety/item4.pptx&embedded=true" -->
            <!-- type="application/pdf" -->
          </div>
          <label for="" class="data_title name cont">자료 구분</label>
          <div class="col name cont">
            <span>{{ reference.fileDivision }}</span>
          </div>
        </div>

        <div class="row">
          <label for="" class="data_title cont">유형</label>
          <div class="col cont">
            <span>{{ reference.fileType }}</span>
          </div>
        </div>

        <div class="row">
          <label for="" class="data_title cont">등록 일시</label>
          <div class="col cont">
            <span>{{ getDate }}</span>
          </div>
        </div>

        <div class="row">
          <label for="" class="data_title cont">용량</label>
          <div class="col cont">
            <span>{{ getByteSize(reference.fileVolume) }}</span>
          </div>
        </div>

        <div class="row">
          <label for="" class="data_title cont">등록자</label>
          <div class="col cont">
            <span>홍길동</span>
          </div>
        </div>

        <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
        <!-- <div class="row">
										<button for="" class="btn btn_crud_default fileChange">파일 교체</button>
									</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferenceRightModal',
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
