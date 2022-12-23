<template>
  <!-- [개발참조] 동영상,문서 컨텐츠 -->
  <div v-show="show" class="thumb_box">
    <div class="row">
      <div class="title col-12">자료 열람</div>
      <div class="thumbnail_view col-12">
        <video
          v-if="reference.category === '01'"
          class="video"
          :src="reference.save_path"
          autoplay
          muted
          controls
        ></video>
        <iframe
          v-else-if="reference.category === '06'"
          class="iframe"
          :src="reference.save_path"
        ></iframe>
        <embed v-else class="embed" :src="reference.save_path" />
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
        <span>{{ reference.description }}</span>
      </div>
    </div>
    <div class="div_line01"></div>
    <div class="div_cont02">
      <BrowseLabel
        title="자료 구분"
        :value="setDivision(reference.datatable_type)"
      />
      <BrowseLabel
        v-if="pageRoot !== 'world'"
        title="과목"
        :value="reference.subject"
      />
      <BrowseLabel title="공개 여부" :value="setOpen(reference)" />
      <BrowseLabel
        title="콘텐츠 유형"
        :value="setContentType(reference.category)"
      />
      <BrowseLabel title="경로" :value="reference.save_path" />
    </div>
  </div>
  <!-- /. 동영상,문서 컨텐츠 -->
</template>

<script>
import BrowseLabel from './BrowseLabel.vue'

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
      const education = item.public_open_yn ? '교육기관 ON' : '교육기관 OFF'
      const reference = item.open_yn ? '공개자료실 ON' : '공개자료실 OFF'
      return `${education} / ${reference}`
    },
    setContentType(type) {
      if (type === '01') return '동영상(MP4)'
      else if (type === '02') return '문서(PDF)'
      else if (type === '03') return '퀴즈'
      else if (type === '04') return '쪽지시험'
      else if (type === '05') return 'YOUTUBE'
      else if (type === '06') return 'URL'
      else if (type === '07') return '음악(MP4)'
      else return null
    },
    setDivision(id) {
      if (id === 'ID') return '교육기관'
      else if (id === 'FD') return '프랜차이즈'
      else if (id === 'PD') return '공개 자료실'
      else if (id === 'MD') return '내 자료실'
      else return null
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
