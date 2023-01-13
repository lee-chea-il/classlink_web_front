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
      <ValidationObserver v-slot="{ invalid }">
        <div class="background_close" />
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <ModalHeader
              :title="`레슨 ${modalTitle}`"
              @close="$emit('close')"
            />
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
                          <span class="icon_institute"></span>
                          교육기관
                        </button>
                      </li>
                      <li
                        v-show="$store.state.common.user.fra_code"
                        class="nav-item"
                        role="presentation"
                      >
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
                          <span class="icon_fran"></span>
                          프랜차이즈
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          id="class-tab"
                          class="nav-link"
                          data-toggle="tab"
                          :data-target="
                            isLesson ? '#myLessonPop' : '#myReferencePop'
                          "
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <span class="icon_mydata"></span>
                          내 자료
                        </button>
                      </li>
                      <li
                        v-show="!isLesson"
                        class="nav-item"
                        role="presentation"
                      >
                        <button
                          id="class-tab"
                          class="nav-link"
                          data-toggle="tab"
                          data-target="#openPop"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <span class="icon_open"></span>
                          공개 자료실
                        </button>
                      </li>
                    </ul>
                    <div
                      v-show="isLesson"
                      id="myTabContent"
                      class="tab-content"
                    >
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
                          treeViewType="IL"
                          :dataList="institutionLesson"
                          :editable="false"
                          :identity="identity"
                          :pidNum="10000"
                          :dragDisabled="true"
                          @moreShowClick="moreShowClick"
                          @copyDataCallBack="$emit('call-back')"
                          @get-savepath="$emit('get-savepath', $event)"
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
                          treeViewType="FL"
                          :dataList="franchiseLesson"
                          :editable="false"
                          :identity="identity"
                          :pidNum="11000"
                          :dragDisabled="true"
                          @moreShowClick="moreShowClick"
                          @copyDataCallBack="$emit('call-back')"
                        />
                      </div>
                      <!-- /.탭 내용02 -->
                      <!-- 탭 내용03 -->
                      <div
                        id="myLessonPop"
                        class="tab-pane fade"
                        role="tabpanel"
                        aria-labelledby="class-tab"
                      >
                        <LessonModalTreeView
                          ref="franchise"
                          listType="lesson"
                          treeViewType="ML"
                          :dataList="myLesson"
                          :editable="false"
                          :identity="identity"
                          :pidNum="11000"
                          :dragDisabled="true"
                          @moreShowClick="moreShowClick"
                          @copyDataCallBack="$emit('call-back')"
                        />
                      </div>
                      <!-- /.탭 내용03 -->
                    </div>

                    <div
                      v-show="!isLesson"
                      id="myTabContent"
                      class="tab-content"
                    >
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
                          :isDragable="true"
                          :dataList="institutionData"
                          treeViewType="ID"
                          :editable="false"
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
                          v-show="$store.state.common.user.fra_code"
                          ref="myFranchise"
                          listType="lesson"
                          treeViewType="FD"
                          :dataList="franchiseData"
                          :editable="false"
                          :identity="identity"
                          :pidNum="13000"
                          @moreShowClick="moreShowClickReference"
                          @copyDataCallBack="$emit('call-back')"
                          @un-active="unActive"
                        />
                      </div>
                      <!-- /.탭 내용02 -->
                      <!-- 탭 내용03 -->
                      <div
                        id="myReferencePop"
                        class="tab-pane fade"
                        role="tabpanel"
                        aria-labelledby="class-tab"
                      >
                        <TreeView
                          ref="mydata"
                          listType="lesson"
                          treeViewType="MD"
                          :dataList="myData"
                          :editable="false"
                          :identity="identity"
                          :pidNum="13000"
                          @moreShowClick="moreShowClickReference"
                          @copyDataCallBack="$emit('call-back')"
                          @un-active="unActive"
                        />
                      </div>
                      <!-- /.탭 내용03 -->

                      <!-- 탭 내용04 -->
                      <div
                        id="openPop"
                        class="tab-pane fade"
                        role="tabpanel"
                        aria-labelledby="class-tab"
                      >
                        <TreeView
                          ref="open"
                          listType="lesson"
                          treeViewType="OD"
                          :dataList="openData"
                          :editable="false"
                          :identity="identity"
                          :pidNum="14000"
                          @moreShowClick="moreShowClickReference"
                          @copyDataCallBack="$emit('call-back')"
                          @un-active="unActive"
                        />
                      </div>
                      <!-- /.탭 내용04 -->
                    </div>
                    <!-- /.탭 컨텐츠 -->
                  </div>
                  <!-- /.왼쪽 영역 -->
                  <!-- 오른쪽 영역 -->
                  <RightSection
                    ref="right"
                    :modalTitle="modalTitle"
                    :lessonData="lessonData"
                    :treeReference="referenceList"
                    :pushKeyword="pushKeyword"
                    :uploadInfo="uploadInfo"
                    :isContinuedRegist="isContinuedRegist"
                    @change-continue="$emit('change-continue', $event)"
                    @change-lesson="$emit('change-lesson', $event)"
                    @add-reference="$emit('add-reference', $event)"
                    @remove-reference="$emit('remove-reference', $event)"
                    @change-keyword="$emit('change-keyword', $event)"
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
              :invalid="isDisabled(invalid, lessonData?.keyword?.length === 0)"
              :submitTxt="modalTitle"
              @submit="onSubmit(modalTitle)"
              @close="$emit('close')"
            />
          </div>
        </div>
      </ValidationObserver>
    </div>
  </Transition>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import ModalHeader from '../../common/ModalHeader.vue'
import ModalBtnBox from '../../common/ModalBtnBox.vue'
import TopNavigation from '../lesson/TopNavigation.vue'
import LessonModalTreeView from '../lesson/ModalTreeView.vue'
import TreeView from '../lesson/ReferenceTreeView.vue'
import RightSection from '../lesson/LessonAddRightSection.vue'
export default {
  name: 'LessonAddModal',
  components: {
    ModalHeader,
    LessonModalTreeView,
    ValidationObserver,
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
    pushKeyword: { type: String, default: '' },
    institutionLesson: { type: Array, default: () => [] },
    franchiseLesson: { type: Array, default: () => [] },
    myLesson: { type: Array, default: () => [] },
    lessonData: { type: Object, default: () => {} },
    referenceList: { type: Array, default: () => [] },
    institutionData: { type: Array, default: () => [] },
    franchiseData: { type: Array, default: () => [] },
    openData: { type: Array, default: () => {} },
    myData: { type: Array, default: () => {} },
    receiveLessonList: { type: Array, default: () => {} },
    uploadInfo: { type: Object, default: () => {} },
    isContinuedRegist: { type: Boolean, default: false },
  },
  methods: {
    moreShowClick(data) {
      let path = data.name
      const getParentName = (item) => {
        if (item.name !== 'root') {
          path = item.name + ' > ' + path
          getParentName(item.parent)
        }
      }
      getParentName(data.parent)
      this.$emit('open-data', data, 'isAddLesson')
      this.$emit('get-lesson-savepath', path)
    },
    moreShowClickReference(data) {
      let path = data.name
      const getParentName = (item) => {
        if (item.name !== 'root') {
          path = item.name + ' > ' + path
          getParentName(item.parent)
        }
      }
      getParentName(data.parent)
      this.$emit('open-reference', data, 'isAddLesson')
      this.$emit('get-savepath', { ...data, path })
    },
    unActive() {
      this.$refs.myLesson.unActiveAll()
      this.$refs.myFranchise.unActiveAll()
      this.$refs.right.$refs.myLessonTreeview.unActiveAll()
    },
    isDisabled(aFlag, bFlag) {
      if (!aFlag && !bFlag) return false
      else return true
    },
    onSubmit(type) {
      if (type === '등록') return this.$emit('submit')
      else return this.$emit('change-submit')
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
#openPop > .vtl {
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
  border-top: 0px;
  border-radius: 5px;
}

#myTabContent {
  height: 550px !important;
}

#modalCuriRegi .icon_mydata,
#modalLessonRegi .icon_mydata {
  margin: 0;
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
