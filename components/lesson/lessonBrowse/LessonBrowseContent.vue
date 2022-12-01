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
      <BrowseLabel title="자료 구분" :value="reference.fileDivision" />
      <BrowseLabel
        v-if="pageRoot !== 'world'"
        title="과목"
        :value="reference.subject"
      />
      <BrowseLabel title="공개 여부" :value="setOpen(reference)" />
      <BrowseLabel title="콘텐츠 유형" :value="reference.fileType" />
      <BrowseLabel title="경로" :value="reference.savePath" />
    </div>
  </div>
  <!-- /. 동영상,문서 컨텐츠 -->
</template>

<script>
import BrowseLabel from '../custom/BrowseLabel.vue'

export default {
  name: 'LessonBrowseContent',
  components: { BrowseLabel },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    reference: {
      type: Object,
      default: () => {},
    },
    pageRoot: {
      type: String,
      default: '',
    },
  },
  methods: {
    setOpen(item) {
      const education = item.isOpenEducation ? '교육기관 ON' : '교육기관 OFF'
      const reference = item.isOpenReference
        ? '공개자료실 ON'
        : '공개자료실 OFF'
      return `${education} / ${reference}`
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

#modalLessonView .div_cont02 {
  height: 100%;
}
</style>
