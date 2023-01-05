<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalTaskDetail"
      class="modal ac_manage_note modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">과제 열람</h5>
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
            <!-- [개발참조] 첨부파일 없을때 출력되는 화면 -->
            <!-- <div class="title_area row">
							<span class="notice_tit">제목</span>
							<span class="notice_title">{{ task.hwb_title }}</span>
							<span class="notice_day02"
                  ><span>{{ task.hwb_registration_date.substr(0, 10) }}</span
                  >(최종수정일
                  <span>{{ task.hwb_update_date.substr(0, 10) }}</span
                  >)</span
                >
							<span class="notice_writer">{{ task.mem_name }} 선생님</span>
					</div>

					<div class="file_info">
						<span class="file_icon"></span>
						일반 첨부파일 1개(10KB)
						<span class="save">모두 저장</span>
						<div class="file_name">
							성격심리학 강의계획서.hwp
						</div>
					</div>

					<VueEditor
                  :value="homeWork.contents"
                  :editorOptions="editorOptions"
                  disabled
                /> -->

            <!-- [개발참조] 첨부파일 있을때 출력되는 화면 -->
            <div class="divide_section row">
              <div class="title_area row">
                <span class="notice_tit">제목</span>
                <span class="notice_title">{{ task.hwb_title }}</span>
                <span class="notice_day02"
                  ><span>{{ task.hwb_registration_date.substr(0, 10) }}</span>
                  <span v-if="task.hwb_update_date !== null"
                    >(최종수정일{{ task.hwb_update_date.substr(0, 10) }})</span
                  ></span
                >
                <span class="notice_writer">{{ task.mem_name }} 선생님</span>
              </div>

              <div class="divide_area left_area">
                <div class="file_info">
                  <span class="file_icon"></span>
                  일반 첨부파일 1개(10KB)
                  <span class="save">모두 저장</span>
                  <div class="file_name">성격심리학 강의계획서.hwp</div>
                </div>
                <VueEditor
                  :value="task.hwb_content"
                  :editorOptions="editorOptions"
                  disabled
                />
              </div>

              <div class="divide_area right_area">
                <div class="thumb_box">
                  <div class="row">
                    <div class="title">자료 열람</div>
                    <div class="thumbnail_view">
                      <i class="icons_arrow_square_l"></i>
                      <button class="btn icons_fullscreen"></button>
                      <i class="icons_arrow_square_r"></i>
                    </div>
                  </div>

                  <div class="row name">
                    <label for="" class="title02">파일 이름</label>
                    <div class="col">
                      <span class="name">등록한 자료 이름</span>
                    </div>
                  </div>

                  <div class="div_line01"></div>

                  <div class="div_cont02">
                    <div class="row">
                      <label for="" class="title02 cont">콘텐츠 유형</label>
                      <div class="col cont">
                        <span>PDF</span>
                      </div>
                    </div>

                    <div class="row">
                      <label for="" class="title02 cont">공개 여부</label>
                      <div class="col cont">
                        <span>ON</span>
                      </div>
                    </div>

                    <div class="row">
                      <label for="" class="title02 cont">과목</label>
                      <div class="col cont">
                        <span>수학</span>
                      </div>
                    </div>

                    <!-- <div class="row">
										<label for="" class="title02 cont">경로</label>
										<div class="col cont">
											<span>저장 경로가 입력되는 공간입니다.</span>
										</div>
									</div>  -->
                  </div>
                </div>
                <!-- div class="thumb_box" -->
              </div>
            </div>
          </div>
          <!-- div class="modal-body" -->
          <!-- [개발참조] 강의계획서 열람 시 출력되는 버튼 -->
          <div class="modal-footer">
            <button class="btn btn_crud_point" @click="$emit('update')">
              수정
            </button>
            <button class="btn btn_crud_default" data-dismiss="modal">
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
  name: 'HomeWorkDetailModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    task: {
      type: Object,
      default: () => {},
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
<style scoped>
.notice_day02 {
  width: 26% !important;
}
.ac_manage_note .icons_fullscreen {
  right: 15px !important;
  top: 111px !important;
}
.thumb_box {
  height: 520px !important;
}
</style>
<style lang="postcss" scoped>
/deep/.quillWrapper {
  margin-top: 15px !important;
  width: 97% !important;
  height: 100%;
  margin: 0 auto;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
  border-radius: 5px !important;
}
/deep/.ql-toolbar,
/deep/.ql-container {
  border-width: 0 !important;
}
/deep/.ql-toolbar {
  border-bottom: 0.4px solid rgba(167, 169, 172, 0.4) !important;
}
/deep/.ql-editor {
  max-height: 425px;
  min-height: 425px;
  font-size: 15px;
}
</style>
