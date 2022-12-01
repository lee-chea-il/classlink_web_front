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
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader :title="`레슨 ${modalTitle}`" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_Lessonregi">
              <!-- 모달 내용 구분 class-->
              <!-- 2단 분류 컨텐츠 -->
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <div class="divide_area left">
                  <!-- 컨트롤 버튼 영역 [개발참조] 활성화 : active -->
                  <TopNavigation
                    :isLesson="isLesson"
                    @set-lesson="$emit('set-lesson', $event)"
                  />
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
                      <LessonModalTreeView
                        ref="institution"
                        listType="lesson"
                        :dataList="receiveInstitutionLessonData"
                        :editable="identity == 'master' ? true : false"
                        :identity="identity"
                        :pidNum="10000"
                        :dragDisabled="true"
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
                      <LessonModalTreeView
                        ref="franchise"
                        listType="lesson"
                        :dataList="receiveFranchiseLessonData"
                        :editable="identity == 'master' ? true : false"
                        :identity="identity"
                        :pidNum="11000"
                        :dragDisabled="true"
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
                        @moreShowClick="moreShowClickReference"
                        @copyDataCallBack="$emit('call-back')"
                        @un-active="unActive"
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
                        ref="myFranchise"
                        listType="lesson"
                        :dataList="receiveFranchiseData"
                        :editable="identity == 'master' ? true : false"
                        :identity="identity"
                        :pidNum="13000"
                        @moreShowClick="moreShowClickReference"
                        @copyDataCallBack="$emit('call-back')"
                        @un-active="unActive"
                      />
                    </div>
                    <!-- /.탭 내용02 -->
                  </div>
                  <!-- /.탭 컨텐츠 -->
                </div>
                <!-- /.왼쪽 영역 -->
                <!-- 오른쪽 영역 -->
                <RightSection
                  ref="right"
                  :modalTitle="modalTitle"
                  :lessonData="lessonData"
                  :referenceList="referenceList"
                  :pushKeyword="pushKeyword"
                  @change-lesson="$emit('change-lesson', $event)"
                  @add-reference="$emit('add-reference', $event)"
                  @remove-reference="$emit('remove-reference', $event)"
                  @changePushKeyword="$emit('changePushKeyword', $event)"
                  @set-keyword="$emit('set-keyword', $event)"
                  @delete-keyword="$emit('delete-keyword', $event)"
                  @open-save-path="$emit('open-save-path', 'isAddLesson')"
                  @moreShowClick="moreShowClickReference"
                  @un-active="unActive"
                />
                <!-- /.오른쪽 영역 -->
              </div>
              <!-- /.2단 분류 컨텐츠 -->
            </div>
          </div>
          <ModalBtnBox
            :submitTxt="modalTitle"
            @submit="$emit('submit')"
            @close="$emit('close')"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import ModalBtnBox from '../../ModalBtnBox.vue'
import TreeView from '~/components/lesson/custom/ModalReferenceTreeView.vue'
import TopNavigation from '~/components/lesson/lessonAdd/TopNavigaion.vue'
import LessonModalTreeView from '~/components/lesson/custom/LessonModalTreeView.vue'
import RightSection from '~/components/lesson/lessonAdd/RightSection.vue'
export default {
  name: 'LessonAddModal',
  components: {
    ModalHeader,
    LessonModalTreeView,
    RightSection,
    TopNavigation,
    TreeView,
    ModalBtnBox,
  },
  props: {
    open: { type: Boolean, default: false },
    modalTitle: { type: String, default: '' },
    identity: { type: String, default: '' },
    isLesson: { type: Boolean, default: false },
    receiveInstitutionLessonData: { type: Array, default: () => [] },
    receiveFranchiseLessonData: { type: Array, default: () => [] },
    lessonData: { type: Object, default: () => {} },
    referenceList: { type: Array, default: () => [] },
    receiveInstitutionData: { type: Array, default: () => [] },
    receiveFranchiseData: { type: Array, default: () => [] },
    pushKeyword: { type: String, default: '' },
  },
  methods: {
    moreShowClick(data) {
      this.$emit('open-data', data, 'isAddLesson')
    },
    moreShowClickReference(data) {
      this.$emit('open-reference', data, 'isAddLesson')
    },
    unActive() {
      this.$refs.myLesson.unActiveAll()
      this.$refs.myFranchise.unActiveAll()
      this.$refs.right.$refs.myLessonTreeview.unActiveAll()
    },
  },
}
</script>

<style scoped>
.divide_area.right .custom-control {
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

#myTabContent {
  height: 550px !important;
}
</style>

<style>
#myTabContent .icon_mp4_sm,
#myTabContent .icon_pdf_sm,
#myTabContent .icon_quiz_sm,
#myTabContent .icon_exam_sm,
#myTabContent .icon_youtube_sm,
#myTabContent .icon_link_sm {
  display: none;
}
</style>
<!--  -->
