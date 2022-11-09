<template>
  <!-- [개발참조] 동영상,문서 컨텐츠 -->
  <div v-show="show" class="thumb_box">
    <div class="row">
      <div class="title col-12">자료 열람</div>
      <div class="thumbnail_view col-12">
        <video
          v-if="reference.uploadType === 'video'"
          class="video"
          :src="reference.savePath"
          autoplay
          muted
          controls
        ></video>
        <iframe
          v-else-if="reference.uploadType === 'url'"
          class="iframe"
          :src="reference.savePath"
        ></iframe>
        <embed v-else class="embed" :src="reference.savePath" />
      </div>
    </div>

    <div class="row name">
      <label for="" class="col-3 col-lg-3 col-sm-2">파일 이름</label>
      <div class="col">
        <span>{{ reference.name }}</span>
      </div>
    </div>

    <div class="row">
      <label for="" class="col-3 col-lg-3 col-sm-2">설명</label>
      <div class="col">
        <span>{{ reference.desc }}</span>
      </div>
    </div>
    <div class="div_line01"></div>
    <div class="div_cont02">
      <div class="row">
        <label for="" class="col-3 col-lg-3 col-sm-2 cont">자료 구분</label>
        <div class="col cont">
          <span>{{ reference.fileDivision }}</span>
        </div>
      </div>

      <div class="row">
        <label for="" class="col-3 col-lg-3 col-sm-2 cont">유형</label>
        <div class="col cont">
          <span>{{ reference.fileType }}</span>
        </div>
      </div>

      <div class="row">
        <label for="" class="col-3 col-lg-3 col-sm-2 cont">등록 일시</label>
        <div class="col cont">
          <span>{{ reference.createAt }}</span>
        </div>
      </div>

      <div class="row">
        <label for="" class="col-3 col-lg-3 col-sm-2 cont">용량</label>
        <div class="col cont">
          <span>{{ reference.fileVolume }}</span>
        </div>
      </div>

      <div class="row">
        <label for="" class="col-3 col-lg-3 col-sm-2 cont">등록자</label>
        <div class="col cont">
          <span>{{ reference.registrant }}</span>
        </div>
      </div>
    </div>
  </div>
  <!-- /. 동영상,문서 컨텐츠 -->
</template>

<script>
export default {
  name: 'LessonBrowseContent',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    reference: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.video,
.embed,
.iframe {
  width: 100%;
  height: 100%;
}
</style>
