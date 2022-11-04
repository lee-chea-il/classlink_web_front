<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataRead"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">자료 열람</h5>
            <button
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
            <!-- [개발참조] 동영상 자료 열람 시 -->
            <!-- <div class="video"></div> -->
            <!-- [개발참조] 문서자료 열람 시 -->
            <div v-if="selectData.uploadType === 'video'" class="video">
              <div class="bar">
                <span class="pdf_title">{{ selectData.name }}</span>
                <!-- <span class="list"></span> -->
                <!-- <span class="full"></span> -->
              </div>
              <video class="video" :src="selectData.savePath" controls />
            </div>

            <div v-else-if="selectData.uploadType === 'pdf'" class="pdf">
              <div class="bar">
                <span class="pdf_title">{{ selectData.name }}</span>
                <span class="list"></span>
                <span class="full"></span>
              </div>
              <embed
                class="embed"
                :src="selectData.savePath"
                type="application/pdf"
              />
            </div>

            <div v-else-if="selectData.uploadType === 'youtube'" class="pdf">
              <div class="bar">
                <span class="pdf_title">{{ selectData.name }}</span>
              </div>
              <iframe class="iframe" :src="selectData.savePath" />
            </div>

            <div v-else-if="selectData.uploadType === 'url'" class="pdf">
              <div class="bar">
                <span class="pdf_title">{{ selectData.name }}</span>
              </div>
              <iframe class="iframe" :src="selectData.savePath" />
            </div>

            <div class="btnsec">
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                data-target="#modalStoragepath"
              >
                이동
              </button>
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                data-target="#modalDataShare01"
              >
                공유
              </button>
              <button class="btn btn_crud_default">다운로드</button>
              <button
                class="btn btn_crud_default"
                data-dismiss="modal"
                data-toggle="modal"
                @click="$emit('reference-change')"
              >
                수정
              </button>
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                data-target="#modalDataDelete"
              >
                삭제
              </button>
            </div>

            <!-- [개발참조] 하단 info_section 부분은 열람 팝업 공통 -->
            <div class="info_section">
              <div class="cont">
                <span class="title">파일 이름</span>
                <span>{{ selectData.name }}</span>
              </div>
              <div class="cont">
                <div class="title">설명</div>
                <span>{{ selectData.desc }}</span>
              </div>
              <div class="line"></div>

              <div class="cont02">
                <div class="title">자료 구분</div>
                <span class="title03-1">{{ selectData.fileDivision }}</span>
              </div>
              <div class="cont02">
                <div class="title">콘텐츠 유형</div>
                <span class="title04-1">{{ selectData.fileType }}</span>
              </div>
              <div class="cont02">
                <div class="title">공개 여부</div>
                <span class="title05-1">{{
                  selectData.inOpenReferenceRoom ? 'ON' : 'OFF'
                }}</span>
              </div>
              <div class="cont02">
                <div class="title">과목</div>
                <span class="title06-1">{{ selectData.subject }}</span>
              </div>
              <div class="cont02">
                <div class="title">경로</div>
                <span class="title07-1">{{ selectData.savePath }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'VideoBrowseModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    selectData: {
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
  height: calc(100% - 50px) !important;
}
</style>
