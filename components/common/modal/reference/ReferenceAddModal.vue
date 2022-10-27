<template>
  <div
    id="modalDataRegiModi"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
          <h5 id="exampleModalLabel" class="modal-title">자료 등록</h5>
          <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
          <!-- <h5 class="modal-title" id="exampleModalLabel">자료 수정</h5> -->
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal_dataregi row">
            <!-- 모달 내용 구분 class-->
            <!-- 왼쪽 영역 -->
            <div class="col-lg-6">
              <div class="regi_area left">
                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2"
                    >파일 이름</label
                  >
                  <div class="col">
                    <input
                      type="text"
                      placeholder=""
                      class="form-control"
                      :value="uploadFile.name"
                      name="name"
                      @input="$emit('change-input', $event)"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">과목</label>
                  <div class="col">
                    <div class="dropdown form-inline">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        과목 선택
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">등록한 과목01</a>
                        <a class="dropdown-item" href="#">등록한 과목02</a>
                        <a class="dropdown-item" href="#">등록한 과목03</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">설명</label>
                  <div class="col">
                    <input
                      type="text"
                      placeholder=""
                      class="form-control"
                      value="설명 입력"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">키워드</label>
                  <div class="col">
                    <input
                      type="text"
                      placeholder=""
                      class="form-control"
                      value="키워드 입력 후 Enter 키 입력"
                    />
                    <span class="info"
                      >키워드는 쉼표(,)와 엔터로 구분할 수 있습니다</span
                    >
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2">등록자</label>
                  <div class="col">
                    <input
                      type="text"
                      placeholder=""
                      class="form-control"
                      value="이름"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-3 col-lg-3 col-sm-2"
                    >저장 경로</label
                  >
                  <div class="col">
                    <input
                      type="text"
                      placeholder="저장할 폴더를 선택해 주세요"
                      class="form-control form-inline front_button"
                    />
                    <button
                      class="btn btn_crud_default"
                      data-toggle="modal"
                      data-target="#modalStoragepath"
                    >
                      찾아보기
                    </button>
                  </div>
                </div>

                <div class="form-group row check03">
                  <label for="" class="col-2 col-lg-2 col-sm-2"></label>
                  <div class="cont07">
                    <span class="check01">
                      <span
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="chk01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label check"
                          for="chk01"
                        ></label> </span
                      ><span>교육기관에 해당 자료를 공개합니다.</span>
                    </span>

                    <span class="check02">
                      <span
                        class="custom-control custom-checkbox form-inline checked"
                      >
                        <input
                          id="chk02"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label check"
                          for="chk02"
                        ></label> </span
                      ><span>공개자료실에 해당 자료를 공개합니다.</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.왼쪽 영역 -->
            <!-- 오른쪽 영역 -->
            <div class="col-lg-6">
              <div class="regi_area right">
                <div class="thumb_box">
                  <!-- [개발참조] 동영상, 문서 미리보기 칸 -->
                  <div class="row">
                    <div class="title col-12">미리보기</div>
                    <div class="thumbnail_view col-12">
                      <video
                        id="video"
                        class="video"
                        src=""
                        style="display: none"
                      ></video>
                      <embed
                        v-show="
                          uploadType === 'pdf' || uploadType === 'youtube'
                        "
                        id="embed"
                        src=""
                        type="application/pdf"
                      />
                      <canvas
                        v-show="uploadType === 'video'"
                        id="thumb_canvas"
                      ></canvas>
                    </div>
                    <label for="" class="col-3 col-lg-3 col-sm-2 name cont"
                      >자료 구분</label
                    >
                    <div class="col name cont">
                      <span>프랜차이즈</span>
                    </div>
                  </div>

                  <div class="row">
                    <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                      >유형</label
                    >
                    <div class="col cont">
                      <span>{{ uploadFile.type }}</span>
                    </div>
                  </div>

                  <div class="row">
                    <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                      >등록 일시</label
                    >
                    <div class="col cont">
                      <span>{{ getDate }}</span>
                    </div>
                  </div>

                  <div class="row">
                    <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                      >용량</label
                    >
                    <div class="col cont">
                      <span>{{ getByteSize(uploadFile.size) }}</span>
                    </div>
                  </div>

                  <div class="row">
                    <label for="" class="col-3 col-lg-3 col-sm-2 cont"
                      >등록자</label
                    >
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
          </div>
        </div>
        <div class="modal-footer">
          <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
          <button class="btn btn_crud_point">등록</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
          <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
          <!-- 	<button class="btn btn_crud_point">완료</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferenceAddModal',
  props: {
    uploadType: {
      type: String,
      default: '',
    },
    uploadFile: {
      type: [File, Object],
      default: null,
    },
  },
  computed: {
    getDate() {
      const date = this.uploadFile?.lastModifiedDate
      if (date) {
        return ` ${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}`
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
canvas,
embed {
  width: 100%;
  height: 100%;
}
</style>
