<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalReplyView"
      class="modal modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">답변 열람</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <!-- <div class="title_area">
						<ul>
							<li class="notice_day">D-3</li>
							<li class="notice_title">컴플레인 이슈사항 공지드립니다.</li>
							<li class="notice_day02">2022.08.02</li>
							<li class="notice_writer">서유진</li>
						</ul>
					</div> -->

            <div class="title_area row reply_view">
              <span class="notice_tit">제목</span>
              <span class="notice_title">{{ data.answerList.qba_title }}</span>
              <span class="notice_day02">
                <span>{{
                  data.answerList.qba_registration_date
                    .substr(0, 10)
                    .replaceAll('-', '.')
                }}</span>
                (최종수정일
                <span>
                  {{
                    data.answerList.qba_update_date === null
                      ? data.answerList.qba_registration_date
                          ?.substr(0, 10)
                          .replaceAll('-', '.')
                      : data.answerList.qba_update_date
                          ?.substr(0, 10)
                          .replaceAll('-', '.')
                  }}</span
                >)
              </span>
              <span class="notice_writer"
                >{{ data.answerList.mem_name }} 선생님</span
              >
              <span class="keyword01">
                <span class="keyword01-1">선택한 과목</span>
              </span>
              <span class="keyword01">
                <span class="keyword01-1">선택한 강좌</span>
              </span>
            </div>

            <div class="file_info">
              <span class="file_icon"></span>
              일반 첨부파일
              {{
                data.answerFile === null ? 0 : data.answerFile.length
              }}개(10KB)
              <span class="save">모두 저장</span>
              <div v-if="data.answerFile !== null" class="file_name">
                <div v-for="(item, idx) in data.answerFile" :key="idx">
                  {{ item.qbat_file }}
                </div>
              </div>
            </div>

            <VueEditor
              :value="data.answerList.qba_description"
              :editorOptions="editorOptions"
              disabled
            />
          </div>
          <!-- div class="modal-body" -->
          <div class="modal-footer">
            <button
              v-if="
                userPermission.includes('I') ||
                data.answerList.mem_idx === $store.state.common.user.mem_idx
              "
              class="btn btn_crud_point"
              @click="$emit('move', data)"
            >
              수정
            </button>
            <button class="btn btn_crud_default" @click="$emit('close')">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ReplyViewModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
    userPermission: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      editorOptions: {
        modules: {
          toolbar: false,
          imageDrop: false,
          imageEdit: false,
        },
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
/deep/.quillWrapper {
  margin-top: 15px !important;
  width: 97% !important;
  height: 100%;
  margin: 0 auto;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
  border-radius: 5px !important;
}
/deep/.ql-editor {
  max-height: 400px;
}
/deep/.ql-container.ql-snow {
  border: 0;
}
</style>
