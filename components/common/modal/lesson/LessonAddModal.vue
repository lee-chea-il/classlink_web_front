<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalLessonRegi"
      class="modal modal_ac_manage_lesson modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="레슨 등록" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_Lessonregi">
              <!-- 모달 내용 구분 class-->
              <!-- 2단 분류 컨텐츠 -->
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <div class="divide_area left">
                  <!-- 컨트롤 버튼 영역 [개발참조] 활성화 : active -->
                  <div class="button_tab">
                    <button
                      class="btn btn_activated"
                      :class="{ active: !isLesson }"
                      @click="$emit('set-lesson', false)"
                    >
                      자료실
                    </button>
                    <button
                      class="btn btn_activated"
                      :class="{ active: isLesson }"
                      @click="$emit('set-lesson', true)"
                    >
                      레슨
                    </button>
                  </div>
                  <!-- /.컨트롤 버튼 영역 -->
                  <!-- 탭 컨텐츠 -->
                  <ul id="myTab" class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        id="grade-tab"
                        class="nav-link active"
                        data-toggle="tab"
                        :data-target="
                          isLesson ? '#institutePop' : '#institutePop1'
                        "
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        교육기관
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        id="class-tab"
                        class="nav-link"
                        data-toggle="tab"
                        :data-target="
                          isLesson ? '#franchisePop' : '#franchisePop1'
                        "
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        프랜차이즈
                      </button>
                    </li>
                  </ul>
                  <div v-show="isLesson" id="myTabContent" class="tab-content">
                    <!-- 탭 내용01 -->
                    <div
                      id="institutePop"
                      class="tab-pane fade show active"
                      role="tabpanel"
                      aria-labelledby="grade-tab"
                    >
                      <TreeView
                        ref="institution"
                        listType="lesson"
                        :dataList="receiveInstitutionLessonData"
                        :editable="identity == 'master' ? true : false"
                        :identity="identity"
                        :pidNum="10000"
                        @moreShowClick="moreShowClick"
                        @copyDataCallBack="$emit('call-back')"
                      />
                    </div>
                    <!-- /.탭 내용01 -->
                    <!-- 탭 내용02 -->
                    <div
                      id="franchisePop"
                      class="tab-pane fade"
                      role="tabpanel"
                      aria-labelledby="class-tab"
                    >
                      <TreeView
                        ref="franchise"
                        listType="lesson"
                        :dataList="receiveFranchiseLessonData"
                        :editable="identity == 'master' ? true : false"
                        :identity="identity"
                        :pidNum="11000"
                        @moreShowClick="moreShowClick"
                        @copyDataCallBack="$emit('call-back')"
                      />
                    </div>
                    <!-- /.탭 내용02 -->
                  </div>
                  <div v-show="!isLesson" id="myTabContent" class="tab-content">
                    <!-- 탭 내용01 -->
                    <div
                      id="institutePop1"
                      class="tab-pane fade show active"
                      role="tabpanel"
                      aria-labelledby="grade-tab"
                    >
                      <TreeView
                        ref="myLesson"
                        listType="lesson"
                        :dataList="receiveInstitutionData"
                        :editable="identity == 'master' ? true : false"
                        :identity="identity"
                        :pidNum="12000"
                        @moreShowClick="moreShowClick"
                        @copyDataCallBack="$emit('call-back')"
                      />
                    </div>
                    <!-- /.탭 내용01 -->
                    <!-- 탭 내용02 -->
                    <div
                      id="franchisePop1"
                      class="tab-pane fade"
                      role="tabpanel"
                      aria-labelledby="class-tab"
                    >
                      <TreeView
                        ref="franchise"
                        listType="lesson"
                        :dataList="receiveFranchiseData"
                        :editable="identity == 'master' ? true : false"
                        :identity="identity"
                        :pidNum="13000"
                        @moreShowClick="moreShowClick"
                        @copyDataCallBack="$emit('call-back')"
                      />
                    </div>
                    <!-- /.탭 내용02 -->
                  </div>
                  <!-- /.탭 컨텐츠 -->
                </div>
                <!-- /.왼쪽 영역 -->
                <!-- 오른쪽 영역 -->
                <div class="divide_area right">
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">
                      <input
                        type="text"
                        placeholder="입력해 주세요"
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">
                      <textarea placeholder="메모입력"></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="">교육 목표</label>
                    <div class="col">
                      <input
                        type="text"
                        placeholder="입력해 주세요"
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">레슨 자료</label>
                    <div class="col">
                      <div class="list_box">
                        <div class="sum">등록 개수: 5개</div>
                        <div class="list_area">
                          <LessonTreeView
                            ref="myLessonTreevie"
                            list-type="lessonList"
                            :dataList="receiveAddLessonData"
                            :expanded="false"
                            :pidNum="20000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">저장 경로</label>
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

                  <div class="form-group">
                    <label for="">키워드</label>
                    <div class="col">
                      <input
                        type="text"
                        placeholder="키워드 입력 후 Enter 키를 입력해 주세요."
                        class="form-control"
                        value=""
                      />
                    </div>
                  </div>

                  <div class="check_sec">
                    <span class="custom-control custom-checkbox form-inline">
                      <input
                        id="checkbox06"
                        type="checkbox"
                        class="custom-control-input"
                        checked
                      />
                      <label
                        class="custom-control-label checkbox06"
                        for="checkbox06"
                        >교육기관에 해당 자료를 공개합니다.</label
                      >
                    </span>
                    <!-- [개발참조] 레슨수정시에는 미출력 -->
                    <span class="custom-control custom-checkbox form-inline">
                      <input
                        id="checkbox07"
                        type="checkbox"
                        class="custom-control-input"
                        checked
                      />
                      <label
                        class="custom-control-label checkbox07"
                        for="checkbox07"
                        >계속 등록하기</label
                      >
                    </span>
                  </div>
                </div>
                <!-- /.오른쪽 영역 -->
              </div>
              <!-- /.2단 분류 컨텐츠 -->
            </div>
          </div>
          <div class="modal-footer">
            <!-- [개발참조] 레슨등록 시 출력되는 버튼 -->
            <button class="btn btn_crud_point">등록</button>
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              취소
            </button>

            <!-- [개발참조] 레슨수정 시 출력되는 버튼 -->
            <!-- <button class="btn btn_crud_point">수정</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import TreeView from '~/components/common/custom/CustomReferenceTreeView.vue'
import LessonTreeView from '~/components/common/custom/CustomLessonTreeView.vue'
export default {
  name: 'LessonAddModal',
  components: { ModalHeader, TreeView, LessonTreeView },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    identity: {
      type: String,
      default: '',
    },
    isLesson: {
      type: Boolean,
      default: false,
    },
    receiveInstitutionLessonData: {
      type: Array,
      default: () => [],
    },
    receiveFranchiseLessonData: {
      type: Array,
      default: () => [],
    },
    receiveAddLessonData: {
      type: Array,
      default: () => [],
    },
    receiveInstitutionData: {
      type: Array,
      default: () => [],
    },
    receiveFranchiseData: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    moreShowClick(node){
      console.log(`moreShowClick ${node}`)
    }
  }
}
</script>

<style scoped>
.divide_area.right .custom-control{
  display: none;
}
#institutePop > .vtl,
#institutePop1 > .vtl {
  height: 349px;
}

#franchisePop > .vtl,
#franchisePop1 > .vtl {
  height: 349px;
}

#mydata > .vtl {
  height: 80px;
}

#modalLessonRegi .divide_area > .tab-content {
  height: 80px;
  overflow: scroll;
  margin-bottom: 18px;
}

.main > ul {
  display: none;
}

#myTabContent {
  padding: 30px 15px;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
  border-radius: 5px;
}

#myTabContent{
  height: 550px !important;
}
</style>
<style>
#myTabContent .icon_mp4_sm,
#myTabContent .icon_pdf_sm,
#myTabContent .icon_quiz_sm,
#myTabContent .icon_exam_sm,
#myTabContent .icon_youtube_sm,
#myTabContent .icon_link_sm{
  display: none;
}
</style>
