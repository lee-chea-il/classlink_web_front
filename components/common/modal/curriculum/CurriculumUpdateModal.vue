<template>
  <Transition name="modal">
    <!-- 모달 팝업 ------------------------------------->
    <!-- 커리큘럼등록/수정 (팝업 L) -->
    <div
      v-show="open"
      id="modalCuriRegi"
      class="modal fade modal_ac_manage_curi"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              {{ txtInfo.modatTitle }}
            </h5>
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
            <div class="modal_curiregi">
              <!-- 모달 내용 구분 class-->
              <!-- 2단 분류 컨텐츠 -->
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <div class="divide_area left">
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">
                      <input
                        v-model="curriculumData.subTitle"
                        type="text"
                        placeholder="입력해 주세요"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">
                      <textarea
                        v-model="curriculumData.desc"
                        placeholder="메모입력"
                      ></textarea>
                    </div>
                  </div>

                  <div class="title">
                    {{ txtInfo.ioTitle }}
                    <div class="dropdown form-inline">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {{ currentClassName }}
                      </button>
                      <div class="dropdown-menu">
                        <a
                          v-for="dropMenu in dropMenuList"
                          :key="dropMenu"
                          class="dropdown-item"
                          href="#"
                          :value="dropMenu"
                          @click="selectDropMenu(dropMenu)"
                        >
                          {{ dropMenu }}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="cw_box">
                    <img id="cwBoxBackImg" />
                    <CustomImgListView
                      ref="imgListView"
                      :expanded="false"
                      :pidNum="0"
                      @link-data="linkData"
                      @unlink-data-to-img="unLinkDataToImg"
                      @unlink-data-to-list="unLinkDataToList"
                      @img-resize="imgResize"
                    />
                  </div>
                  <div class="item_list_wrap">
                    <div class="item_list">
                      <CustomCurriculumSwiper
                        ref="imgListViewSwiper"
                        :isHorizontal="true"
                        @unLink-event="unLinkEvent"
                        @item-click="itemClick"
                      />
                    </div>
                  </div>
                </div>
                <!-- /.왼쪽 영역 -->
                <!-- 오른쪽 영역 -->
                <div class="divide_area right">
                  <div class="title">{{ txtInfo.rightTitle }}</div>
                  <div class="form-group">
                    <label for="">불러오기</label>
                    <div class="col">
                      <div class="input_file">
                        <input
                          v-model="curriculumData.lessonInfo.pathTxt"
                          type="text"
                          class="file_input_textbox"
                          readonly
                        />
                        <div
                          class="file_input_div"
                          @click="
                            () => {
                              $emit('open-file-path')
                            }
                          "
                        >
                          <button class="btn btn_crud_default">찾아보기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">
                      {{ curriculumData.lessonInfo.lesson.title }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">
                      {{ curriculumData.lessonInfo.lesson.desc }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">교육 목표</label>
                    <div class="col">
                      {{ curriculumData.lessonInfo.lesson.role }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" style="place-self: flex-start"
                      >{{ txtInfo.listTitle }}
                    </label>
                    <div class="col">
                      <div class="list_box">
                        <div
                          v-if="curriculumData.lessonInfo.lesson.title === ''"
                          class="nothing_txt"
                        >
                          {{ txtInfo.listEmptyTxt }}
                        </div>
                        <div v-else class="section">
                          <!-- 커리큘럼 등록 시 출력됨 -->
                          <span v-if="!isUpdate" class="sum"
                            >연결 개수: {{ linkDataCnt }}개</span
                          >
                          <button
                            class="btn btn_crud_default cancel"
                            @click="unLinkAllItem"
                          >
                            전체 해제
                          </button>
                          <!-- 커리큘럼 수정 시 출력됨 -->
                          <button
                            v-if="isUpdate"
                            class="btn btn_crud_default cancel"
                          >
                            초기화
                          </button>
                        </div>
                        <div class="list_area">
                          <CustomListView
                            ref="listView"
                            :pidNum="3000"
                            @update-link-cnt="updateLinkCnt"
                            @select-list-img="selectListImg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">저장 경로</label>
                    <div class="col">
                      <input
                        v-model="saveFileFullPath"
                        type="text"
                        placeholder="저장할 폴더를 선택해 주세요"
                        class="form-control form-inline front_button"
                      />
                      <button
                        class="btn btn_crud_default"
                        data-toggle="modal"
                        data-target="#modalStoragepath"
                        @click="
                          () => {
                            $emit('open-save-path')
                          }
                        "
                      >
                        찾아보기
                      </button>
                    </div>
                  </div>

                  <div class="check_sec">
                    <span class="custom-control custom-checkbox form-inline">
                      <input
                        id="checkbox60"
                        :checked="curriculumData.publicOpenYn"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label checkbox60"
                        for="checkbox60"
                        >교육기관에 해당 자료를 공개합니다.</label
                      >
                    </span>
                    <span class="custom-control custom-checkbox form-inline">
                      <input
                        id="checkbox61"
                        :checked="curriculumData.isContinuedRegist"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label checkbox61"
                        for="checkbox61"
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
            <ModalBtnBox
              :submitTxt="submitBtnName"
              :isUpdate="isUpdate"
              @submit="checkUpload"
              @close="$emit('close')"
              @del="$emit('update-file-del')"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import $ from 'jquery'
import CustomListView from '@/components/common/custom/CustomListView.vue'
import CustomImgListView from '@/components/curriculum/custom/CustomImgListView.vue'
import CustomCurriculumSwiper from '@/components/curriculum/custom/CustomCurriculumSwiper.vue'
import ModalBtnBox from '@/components/common/ModalBtnBox.vue'

export default {
  name: 'CurriculumUpdateModal',
  components: {
    CustomListView,
    CustomImgListView,
    CustomCurriculumSwiper,
    ModalBtnBox,
  },
  props: {
    open: Boolean,
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    txtInfo: {
      type: Object,
      default: () => {},
    },
    dropMenuData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isUpdate: false,
      submitBtnName: '등록',
      dropMenuList: [],
      dropMenuListData: [],
      linkDataCnt: 0,
      currentClassName: '교실선택',
      saveFileFullPath: '',
      currentDropMenuData: { data: [] },
      curriculumData: {
        subTitle: '',
        desc: '',
        savePathInfo: {
          type: '',
          path: '',
          fileName: '',
        },
        cwInfo: null,
        publicOpenYn: true,
        isContinuedRegist: true,
        lessonInfo: {
          lesson: {
            title: '',
            desc: '',
            role: '',
            referenceList: [],
          },
          path: '',
          pathTxt: '',
        },
      },
    }
  },
  mounted() {
    this.dropMenuListData = this.dropMenuData
    this.dropMenuList = []
    for (let i = 0; i < this.dropMenuListData.length; i++) {
      this.dropMenuList.push(this.dropMenuListData[i].name)
    }
  },
  methods: {
    selectDropMenu(value) {
      for (let i = 0; i < this.dropMenuListData.length; i++) {
        if (value === this.dropMenuListData[i].name) {
          this.currentDropMenuData = this.dropMenuListData[i]
          break
        }
      }
      this.currentClassName = value
      this.$refs.listView.unLinkAllItem()
      this.$refs.imgListView.setData(this.currentDropMenuData.data)
      this.$refs.imgListViewSwiper.setData(
        this.currentDropMenuData.data.interactionObjects
      )
    },
    setData(curriculumData) {
      $('#modalCuriRegi .modal-body').scrollTop(0)
      if (curriculumData) {
        this.isUpdate = true
        this.submitBtnName = '수정'
        this.$refs.listView.unLinkAllItem()
        this.curriculumData = curriculumData
        for (let i = 0; i < this.dropMenuListData.length; i++) {
          if (
            this.curriculumData.cwInfo.codeNum ===
            this.dropMenuListData[i].codeNum
          ) {
            this.currentDropMenuData = $.extend(
              true,
              {},
              this.dropMenuListData[i]
            )
            break
          }
        }
        this.currentClassName = this.currentDropMenuData.name
        const linkData = this.curriculumData.cwInfo.data
        for (let i = 0; i < linkData.length; i++) {
          this.currentDropMenuData.data.interactionObjects[
            parseInt(linkData[i].codeNum) - 1
          ].isLink = true
          this.currentDropMenuData.data.interactionObjects[
            parseInt(linkData[i].codeNum) - 1
          ].dbIdx = linkData[i].dbIdx
        }
        this.$refs.imgListView.setData(this.currentDropMenuData.data)
        this.$refs.imgListViewSwiper.setData(
          this.currentDropMenuData.data.interactionObjects
        )
        this.saveFileFullPath =
          this.curriculumData.savePathInfo.path +
          ' > ' +
          this.curriculumData.savePathInfo.fileName +
          '.' +
          this.txtInfo.fileSet
        this.curriculumData.lessonInfo.pathTxt =
          this.curriculumData.lessonInfo.path +
          ' > ' +
          this.curriculumData.lessonInfo.lesson.name
        this.$refs.listView.setDataList(this.curriculumData.lessonInfo.lesson)
        this.$refs.listView.checkLinkDataCnt()
      } else {
        this.isUpdate = false
        this.submitBtnName = '등록'
        this.curriculumData = {
          subTitle: '',
          desc: '',
          savePathInfo: {
            type: '',
            path: '',
            fileName: '',
          },
          cwInfo: null,
          publicOpenYn: true,
          isContinuedRegist: true,
          lessonInfo: {
            lesson: {
              title: '',
              desc: '',
              role: '',
              referenceList: [],
            },
            path: '',
            pathTxt: '',
          },
        }
        this.currentDropMenuData = null
        this.saveFileFullPath = ''
        this.currentClassName = '교실선택'

        this.$refs.imgListView.setData([])
        this.$refs.imgListViewSwiper.setData([])
      }
    },
    linkData(listIdx, imgIdx) {
      this.$refs.listView.linkData(listIdx, imgIdx)
      this.$refs.imgListViewSwiper.linkData(listIdx, imgIdx)
    },
    unLinkDataToList(listIdx) {
      this.$refs.listView.unLinkData(listIdx)
    },
    unLinkDataToImg(imgIdx) {
      this.$refs.imgListViewSwiper.unLinkData(imgIdx)
    },
    unLinkEvent(listIdx, imgIdx) {
      this.$refs.listView.unLinkData(listIdx)
      this.$refs.imgListView.unLinkData(imgIdx)
    },
    updateLinkCnt(cnt) {
      this.linkDataCnt = cnt
    },
    unLinkAllItem() {
      this.$refs.listView.unLinkAllItem()
      this.$refs.imgListView.unLinkAllItem()
      this.$refs.imgListViewSwiper.unLinkAllItem()
    },
    setSavePath(pathInfo) {
      this.curriculumData.savePathInfo = pathInfo
      this.saveFileFullPath =
        this.curriculumData.savePathInfo.path +
        ' > ' +
        this.curriculumData.savePathInfo.fileName +
        '.' +
        this.txtInfo.fileSet
    },
    setFileInfo(lessonInfo) {
      this.unLinkAllItem()
      this.curriculumData.lessonInfo = lessonInfo
      this.curriculumData.lessonInfo.pathTxt =
        lessonInfo.path + ' > ' + lessonInfo.lesson.name
      this.$refs.listView.setDataList(this.curriculumData.lessonInfo.lesson)
    },
    imgResize(perRatio) {
      this.$refs.imgListViewSwiper.imgResize(perRatio)
    },
    itemClick(imgIdx) {
      this.$refs.imgListView.itemClick(imgIdx)
      this.$refs.listView.itemClick(imgIdx)
    },
    selectListImg(imgIdx) {
      this.$refs.imgListView.selectListImg(imgIdx)
      this.$refs.imgListViewSwiper.selectListImg(imgIdx)
    },
    checkUpload() {
      let isAllClear = true
      if (this.curriculumData.subTitle === '') {
        isAllClear = false
        this.$emit('change-desc', '제목을 입력해 주세요.')
      }
      if (isAllClear && this.curriculumData.desc === '') {
        isAllClear = false
        this.$emit('change-desc', '설명을 입력해 주세요.')
      }
      if (isAllClear && this.curriculumData.lessonInfo.path === '') {
        isAllClear = false
        this.$emit('change-desc', '불러온 레슨정보가 없습니다.')
      }
      if (isAllClear && this.curriculumData.savePathInfo.path === '') {
        isAllClear = false
        this.$emit('change-desc', '저장할 경로를 선택해주세요.')
      }
      if (isAllClear && this.currentClassName === '교실선택') {
        isAllClear = false
        this.$emit('change-desc', 'CW 교실 정보가 없습니다.')
      }
      /* isAllClear = true */
      if (isAllClear) {
        const newData = {}
        for (const item in this.curriculumData) {
          if (item === 'cwInfo') {
            newData[item] = {}
            newData[item].codeNum = this.currentDropMenuData.codeNum
            newData[item].data = this.$refs.imgListView.getData()
          } else if (item === 'lessonInfo') {
            newData.lessonInfo = {}
            for (const item1 in this.curriculumData[item]) {
              newData.lessonInfo[item1] = this.curriculumData.lessonInfo[item1]
            }
            newData.lessonInfo.lesson.referenceList =
              this.$refs.listView.getData()
          } else {
            newData[item] = this.curriculumData[item]
          }
        }
        newData.isLeaf = true
        newData.type = newData.lessonInfo.type
        newData.name = newData.savePathInfo.fileName + '.link'
        newData.active = true
        console.log(newData)
        if (!this.isUpdate) {
          this.$emit('add-curiiculum-data', newData)
        } else {
          this.$emit('update-curiiculum-data', newData)
        }
        $('#modalCuriRegi').modal('hide')
      }
    },
  },
}
</script>

<style scoped>
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  position: absolute;
  z-index: 9998;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.list-group-item {
  padding: 5px 10px;
  cursor: grab;
}
#modalCuriRegi .form-inline {
  width: initial;
}
#modalCuriRegi
  .modal_curiregi
  .divide_area.right
  .list_box
  .vtl-node-main
  .custom-control-label::after {
  margin: -8px 0px 0px 15px;
}
#modalCuriRegi {
  pointer-events: none;
}
</style>
