<template>
  <div class="right_area">
    <div class="regi_area right">
      <div class="thumb_box">
        <!-- [개발참조] 동영상, 문서 미리보기 칸 -->
        <div class="row">
          <ChangeFileTitle
            :show="
              open &&
              (reference.category === '01' ||
                reference.category === '07' ||
                reference.category === '02')
            "
            :name="reference.category"
            @change-file="$emit('change-file', $event)"
          />
          <div class="thumbnail_view">
            <video
              v-show="
                reference.category === '01' || reference.category === '07'
              "
              id="video"
              class="video"
              :src="reference.save_path"
              controls
            />
            <iframe
              v-show="
                reference.category === '02' ||
                reference.category === '05' ||
                reference.category === '06'
              "
              id="movie_player"
              class="embed"
              :src="reference.save_path"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
        <div style="padding-top: 30px"></div>
        <ContentLabel
          title="자료 구분"
          :value="setDivision(reference.datatable_type)"
        />
        <ContentLabel
          title="유형"
          :value="setContentType(reference.category)"
        />
        <!-- <ContentLabel title="등록 일시" :value="getDate" /> -->

        <ContentLabel
          v-if="reference.category === '05' || reference.category === '06'"
          title="주소"
          :value="reference.save_path"
        />

        <ContentLabel v-else title="용량" :value="uploadInfo.fileSize" />
        <!-- getByteSize(reference.fileSize) -->
        <ContentLabel
          v-if="reference.category === '05'"
          title="재생 시간"
          :value="setPlayTime(uploadInfo.youtubePlayTime)"
        />
        <ContentLabel v-else title="등록자" value="홍길동" />
      </div>
    </div>
  </div>
</template>

<script>
import ContentLabel from '../common/ContentLabel.vue'
import ChangeFileTitle from './ChangeFileTitle.vue'

export default {
  name: 'ReferenceRightModal',
  components: {
    ContentLabel,
    ChangeFileTitle,
  },
  props: {
    reference: { type: Object, default: () => {} },
    open: { type: Boolean, default: false },
    uploadInfo: { type: Object, default: () => {} },
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
    setPlayTime(time) {
      return time.replace(/H|M/g, ':').replace(/PT|S/g, '')
    },
  },
}
</script>

<style scoped>
.video,
.canvas,
.embed,
.iframe,
#youtube {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.ndfHFb-c4YZDc-DARUcf-NnAfwf-i5oIFb {
  font-size: 10px !important;
}

.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px 0 !important;
}
</style>
