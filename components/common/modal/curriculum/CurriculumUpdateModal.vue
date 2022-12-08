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
              커리큘럼 등록 / 수정
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
                    CW 교실
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
                  <div class="title">레슨정보</div>

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
                      >레슨 자료</label
                    >
                    <div class="col">
                      <div class="list_box">
                        <div
                          v-if="curriculumData.lessonInfo.lesson.title === ''"
                          class="nothing_txt"
                        >
                          현재 불러온 레슨이 없습니다.
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
                        :checked="curriculumData.isOpenEducation"
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
      curriculumData: {
        subTitle: '',
        desc: '',
        savePathInfo: {
          type: '',
          path: '',
          fileName: '',
        },
        cwInfo: null,
        isOpenEducation: true,
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
    this.dropMenuListData = [
      {
        codeNum: 'CW_001',
        name: 'CW_001',
        data: {
          backImg_url: 'cw/type1/cw_bg.png',
          interactionObjects: [
            {
              nomal_url: 'cw/type1/object/40.png',
              over_url: 'cw/type1/object/over/40.png',
              icon_normal_url: 'cw/type1/icon/40.png',
              icon_dim_url: 'cw/type1/icon/dim/40_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 0,
              left: 265,
              top: 2,
            },
            {
              nomal_url: 'cw/type1/object/101.png',
              over_url: 'cw/type1/object/over/101.png',
              icon_normal_url: 'cw/type1/icon/101.png',
              icon_dim_url: 'cw/type1/icon/dim/101_dim.png',
              linkListIdx: -1,
              imgIdx: 1,
              left: 12,
              top: 51,
            },
            {
              nomal_url: 'cw/type1/object/99.png',
              over_url: 'cw/type1/object/over/99.png',
              icon_normal_url: 'cw/type1/icon/99.png',
              icon_dim_url: 'cw/type1/icon/dim/99_dim.png',
              linkListIdx: -1,
              imgIdx: 2,
              left: 154,
              top: 51,
            },
            {
              nomal_url: 'cw/type1/object/102.png',
              over_url: 'cw/type1/object/over/102.png',
              icon_normal_url: 'cw/type1/icon/102.png',
              icon_dim_url: 'cw/type1/icon/dim/102_dim.png',
              linkListIdx: -1,
              imgIdx: 3,
              left: 328,
              top: 51,
            },
            {
              nomal_url: 'cw/type1/object/184.png',
              over_url: 'cw/type1/object/over/184.png',
              icon_normal_url: 'cw/type1/icon/184.png',
              icon_dim_url: 'cw/type1/icon/dim/184_dim.png',
              linkListIdx: -1,
              imgIdx: 4,
              left: 233,
              top: 123,
            },
            {
              nomal_url: 'cw/type1/object/36.png',
              over_url: 'cw/type1/object/over/36.png',
              icon_normal_url: 'cw/type1/icon/36.png',
              icon_dim_url: 'cw/type1/icon/dim/36_dim.png',
              linkListIdx: -1,
              imgIdx: 5,
              left: 200,
              top: 132,
            },
            {
              nomal_url: 'cw/type1/object/11.png',
              over_url: 'cw/type1/object/over/11.png',
              icon_normal_url: 'cw/type1/icon/11.png',
              icon_dim_url: 'cw/type1/icon/dim/11_dim.png',
              linkListIdx: -1,
              imgIdx: 6,
              left: 158,
              top: 153,
            },
            {
              nomal_url: 'cw/type1/object/4.png',
              over_url: 'cw/type1/object/over/4.png',
              icon_normal_url: 'cw/type1/icon/4.png',
              icon_dim_url: 'cw/type1/icon/dim/4_dim.png',
              linkListIdx: -1,
              imgIdx: 7,
              left: 278,
              top: 153,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 8,
              left: 111,
              top: 226,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 9,
              left: 146,
              top: 223,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 10,
              left: 171,
              top: 226,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 11,
              left: 207,
              top: 223,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 12,
              left: 234,
              top: 226,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 13,
              left: 269,
              top: 223,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 14,
              left: 296,
              top: 226,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 15,
              left: 332,
              top: 223,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 16,
              left: 359,
              top: 226,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 17,
              left: 393,
              top: 223,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 18,
              left: 111,
              top: 281,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 19,
              left: 146,
              top: 279,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 20,
              left: 171,
              top: 281,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 21,
              left: 207,
              top: 279,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 22,
              left: 234,
              top: 281,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 23,
              left: 269,
              top: 279,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 24,
              left: 296,
              top: 281,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 25,
              left: 332,
              top: 279,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 26,
              left: 359,
              top: 281,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 27,
              left: 393,
              top: 279,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 28,
              left: 111,
              top: 338,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 29,
              left: 146,
              top: 335,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 30,
              left: 171,
              top: 338,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 31,
              left: 207,
              top: 335,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 32,
              left: 234,
              top: 338,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 33,
              left: 269,
              top: 335,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 34,
              left: 296,
              top: 338,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 35,
              left: 332,
              top: 335,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 36,
              left: 359,
              top: 338,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 37,
              left: 393,
              top: 335,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 38,
              left: 111,
              top: 395,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 39,
              left: 146,
              top: 392,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 40,
              left: 171,
              top: 395,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 41,
              left: 207,
              top: 392,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 42,
              left: 234,
              top: 395,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 43,
              left: 269,
              top: 392,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 44,
              left: 296,
              top: 395,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 45,
              left: 332,
              top: 392,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 46,
              left: 359,
              top: 395,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 47,
              left: 393,
              top: 392,
            },

            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 48,
              left: 111,
              top: 453,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 49,
              left: 146,
              top: 450,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 50,
              left: 171,
              top: 453,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 51,
              left: 207,
              top: 450,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 52,
              left: 234,
              top: 453,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 53,
              left: 269,
              top: 450,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 54,
              left: 296,
              top: 453,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 55,
              left: 332,
              top: 450,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 56,
              left: 359,
              top: 453,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 57,
              left: 393,
              top: 450,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 58,
              left: 111,
              top: 508,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 59,
              left: 146,
              top: 505,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 60,
              left: 171,
              top: 508,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 61,
              left: 207,
              top: 505,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 62,
              left: 234,
              top: 508,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 63,
              left: 269,
              top: 505,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 64,
              left: 296,
              top: 508,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 65,
              left: 332,
              top: 505,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 66,
              left: 359,
              top: 508,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 67,
              left: 393,
              top: 505,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 68,
              left: 111,
              top: 559,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 69,
              left: 146,
              top: 556,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 70,
              left: 171,
              top: 559,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 71,
              left: 207,
              top: 556,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 72,
              left: 234,
              top: 559,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 73,
              left: 269,
              top: 556,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 74,
              left: 296,
              top: 559,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 75,
              left: 332,
              top: 556,
            },
            {
              nomal_url: 'cw/type1/object/202.png',
              over_url: 'cw/type1/object/over/202.png',
              icon_normal_url: 'cw/type1/icon/202.png',
              icon_dim_url: 'cw/type1/icon/dim/202_dim.png',
              linkListIdx: -1,
              imgIdx: 76,
              left: 359,
              top: 559,
            },
            {
              nomal_url: 'cw/type1/object/34.png',
              over_url: 'cw/type1/object/over/34.png',
              icon_normal_url: 'cw/type1/icon/34.png',
              icon_dim_url: 'cw/type1/icon/dim/34_dim.png',
              linkListIdx: -1,
              imgIdx: 77,
              left: 393,
              top: 556,
            },
            {
              nomal_url: 'cw/type1/object/191.png',
              over_url: 'cw/type1/object/over/191.png',
              icon_normal_url: 'cw/type1/icon/191.png',
              icon_dim_url: 'cw/type1/icon/dim/191_dim.png',
              linkListIdx: -1,
              imgIdx: 78,
              left: 70,
              top: 247,
            },
            {
              nomal_url: 'cw/type1/object/189.png',
              over_url: 'cw/type1/object/over/189.png',
              icon_normal_url: 'cw/type1/icon/189.png',
              icon_dim_url: 'cw/type1/icon/dim/189_dim.png',
              linkListIdx: -1,
              imgIdx: 79,
              left: 67,
              top: 362,
            },
            {
              nomal_url: 'cw/type1/object/192.png',
              over_url: 'cw/type1/object/over/192.png',
              icon_normal_url: 'cw/type1/icon/192.png',
              icon_dim_url: 'cw/type1/icon/dim/192_dim.png',
              linkListIdx: -1,
              imgIdx: 80,
              left: 60,
              top: 451,
            },
            {
              nomal_url: 'cw/type1/object/194.png',
              over_url: 'cw/type1/object/over/194.png',
              icon_normal_url: 'cw/type1/icon/194.png',
              icon_dim_url: 'cw/type1/icon/dim/194_dim.png',
              linkListIdx: -1,
              imgIdx: 81,
              left: 283,
              top: 597,
            },
            {
              nomal_url: 'cw/type1/object/183.png',
              over_url: 'cw/type1/object/over/183.png',
              icon_normal_url: 'cw/type1/icon/183.png',
              icon_dim_url: 'cw/type1/icon/dim/183_dim.png',
              linkListIdx: -1,
              imgIdx: 82,
              left: 111,
              top: 609,
            },
            {
              nomal_url: 'cw/type1/object/183-1.png',
              over_url: 'cw/type1/object/over/183-1.png',
              icon_normal_url: 'cw/type1/icon/183.png',
              icon_dim_url: 'cw/type1/icon/dim/183_dim.png',
              linkListIdx: -1,
              imgIdx: 83,
              left: 146,
              top: 612,
            },
            {
              nomal_url: 'cw/type1/object/183-2.png',
              over_url: 'cw/type1/object/over/183-2.png',
              icon_normal_url: 'cw/type1/icon/183.png',
              icon_dim_url: 'cw/type1/icon/dim/183_dim.png',
              linkListIdx: -1,
              imgIdx: 84,
              left: 201,
              top: 609,
            },
            {
              nomal_url: 'cw/type1/object/183-3.png',
              over_url: 'cw/type1/object/over/183-3.png',
              icon_normal_url: 'cw/type1/icon/183.png',
              icon_dim_url: 'cw/type1/icon/dim/183_dim.png',
              linkListIdx: -1,
              imgIdx: 85,
              left: 241,
              top: 610,
            },
            {
              nomal_url: 'cw/type1/object/183-4.png',
              over_url: 'cw/type1/object/over/183-4.png',
              icon_normal_url: 'cw/type1/icon/183.png',
              icon_dim_url: 'cw/type1/icon/dim/183_dim.png',
              linkListIdx: -1,
              imgIdx: 86,
              left: 332,
              top: 612,
            },
            {
              nomal_url: 'cw/type1/object/183-5.png',
              over_url: 'cw/type1/object/over/183-5.png',
              icon_normal_url: 'cw/type1/icon/183.png',
              icon_dim_url: 'cw/type1/icon/dim/183_dim.png',
              linkListIdx: -1,
              imgIdx: 87,
              left: 375,
              top: 612,
            },
            {
              nomal_url: 'cw/type1/object/13.png',
              over_url: 'cw/type1/object/over/13.png',
              icon_normal_url: 'cw/type1/icon/13.png',
              icon_dim_url: 'cw/type1/icon/dim/13_dim.png',
              linkListIdx: -1,
              imgIdx: 88,
              left: 61,
              top: 658,
            },
            {
              nomal_url: 'cw/type1/object/20.png',
              over_url: 'cw/type1/object/over/20.png',
              icon_normal_url: 'cw/type1/icon/20.png',
              icon_dim_url: 'cw/type1/icon/dim/20_dim.png',
              linkListIdx: -1,
              imgIdx: 89,
              left: 198,
              top: 656,
            },
            {
              nomal_url: 'cw/type1/object/20-1.png',
              over_url: 'cw/type1/object/over/20-1.png',
              icon_normal_url: 'cw/type1/icon/20.png',
              icon_dim_url: 'cw/type1/icon/dim/20_dim.png',
              linkListIdx: -1,
              imgIdx: 90,
              left: 258,
              top: 656,
            },
            {
              nomal_url: 'cw/type1/object/13-1.png',
              over_url: 'cw/type1/object/over/13-1.png',
              icon_normal_url: 'cw/type1/icon/13.png',
              icon_dim_url: 'cw/type1/icon/dim/13_dim.png',
              linkListIdx: -1,
              imgIdx: 91,
              left: 346,
              top: 658,
            },
            {
              nomal_url: 'cw/type1/object/5.png',
              over_url: 'cw/type1/object/over/5.png',
              icon_normal_url: 'cw/type1/icon/5.png',
              icon_dim_url: 'cw/type1/icon/dim/5_dim.png',
              linkListIdx: -1,
              imgIdx: 92,
              left: 411,
              top: 239,
            },
            {
              nomal_url: 'cw/type1/object/5.png',
              over_url: 'cw/type1/object/over/5.png',
              icon_normal_url: 'cw/type1/icon/5.png',
              icon_dim_url: 'cw/type1/icon/dim/5_dim.png',
              linkListIdx: -1,
              imgIdx: 93,
              left: 408,
              top: 290,
            },
            {
              nomal_url: 'cw/type1/object/5.png',
              over_url: 'cw/type1/object/over/5.png',
              icon_normal_url: 'cw/type1/icon/5.png',
              icon_dim_url: 'cw/type1/icon/dim/5_dim.png',
              linkListIdx: -1,
              imgIdx: 94,
              left: 409,
              top: 337,
            },
            {
              nomal_url: 'cw/type1/object/5.png',
              over_url: 'cw/type1/object/over/5.png',
              icon_normal_url: 'cw/type1/icon/5.png',
              icon_dim_url: 'cw/type1/icon/dim/5_dim.png',
              linkListIdx: -1,
              imgIdx: 95,
              left: 403,
              top: 377,
            },
            {
              nomal_url: 'cw/type1/object/5.png',
              over_url: 'cw/type1/object/over/5.png',
              icon_normal_url: 'cw/type1/icon/5.png',
              icon_dim_url: 'cw/type1/icon/dim/5_dim.png',
              linkListIdx: -1,
              imgIdx: 96,
              left: 405,
              top: 438,
            },
            {
              nomal_url: 'cw/type1/object/5.png',
              over_url: 'cw/type1/object/over/5.png',
              icon_normal_url: 'cw/type1/icon/5.png',
              icon_dim_url: 'cw/type1/icon/dim/5_dim.png',
              linkListIdx: -1,
              imgIdx: 97,
              left: 408,
              top: 499,
            },
            {
              nomal_url: 'cw/type1/object/29.png',
              over_url: 'cw/type1/object/over/29.png',
              icon_normal_url: 'cw/type1/icon/29.png',
              icon_dim_url: 'cw/type1/icon/dim/29_dim.png',
              linkListIdx: -1,
              imgIdx: 98,
              left: 435,
              top: 353,
            },
            {
              nomal_url: 'cw/type1/object/6.png',
              over_url: 'cw/type1/object/over/6.png',
              icon_normal_url: 'cw/type1/icon/6.png',
              icon_dim_url: 'cw/type1/icon/dim/6_dim.png',
              linkListIdx: -1,
              imgIdx: 99,
              left: 426,
              top: 403,
            },
            {
              nomal_url: 'cw/type1/object/13-2.png',
              over_url: 'cw/type1/object/over/13-2.png',
              icon_normal_url: 'cw/type1/icon/13.png',
              icon_dim_url: 'cw/type1/icon/dim/13_dim.png',
              linkListIdx: -1,
              imgIdx: 100,
              left: 470,
              top: 258,
            },
            {
              nomal_url: 'cw/type1/object/13-3.png',
              over_url: 'cw/type1/object/over/13-3.png',
              icon_normal_url: 'cw/type1/icon/13.png',
              icon_dim_url: 'cw/type1/icon/dim/13_dim.png',
              linkListIdx: -1,
              imgIdx: 101,
              left: 469,
              top: 402,
            },
          ],
        },
      },
      {
        codeNum: 'CW_002',
        name: 'CW_002',
        data: {
          backImg_url: 'cw/type2/cw_class_bg.png',
          interactionObjects: [
            {
              nomal_url: 'cw/type2/object/40.png',
              over_url: 'cw/type2/object/over/40.png',
              icon_normal_url: 'cw/type2/icon/40.png',
              icon_dim_url: 'cw/type2/icon/dim/40_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 0,
              left: 88,
              top: 10,
            },
            {
              nomal_url: 'cw/type2/object/186.png',
              over_url: 'cw/type2/object/over/186.png',
              icon_normal_url: 'cw/type2/icon/186.png',
              icon_dim_url: 'cw/type2/icon/dim/186_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 1,
              left: 63,
              top: 72,
            },
            {
              nomal_url: 'cw/type2/object/185.png',
              over_url: 'cw/type2/object/over/185.png',
              icon_normal_url: 'cw/type2/icon/185.png',
              icon_dim_url: 'cw/type2/icon/dim/185_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 2,
              left: 192,
              top: 72,
            },
            {
              nomal_url: 'cw/type2/object/186_2.png',
              over_url: 'cw/type2/object/over/186_2.png',
              icon_normal_url: 'cw/type2/icon/186.png',
              icon_dim_url: 'cw/type2/icon/dim/186_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 3,
              left: 365,
              top: 72,
            },
            {
              nomal_url: 'cw/type2/object/58.png',
              over_url: 'cw/type2/object/over/58.png',
              icon_normal_url: 'cw/type2/icon/58.png',
              icon_dim_url: 'cw/type2/icon/dim/58_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 4,
              left: -5,
              top: 105,
            },
            {
              nomal_url: 'cw/type2/object/52.png',
              over_url: 'cw/type2/object/over/52.png',
              icon_normal_url: 'cw/type2/icon/52.png',
              icon_dim_url: 'cw/type2/icon/dim/52_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 5,
              left: 271,
              top: 154,
            },
            {
              nomal_url: 'cw/type2/object/202_1.png',
              over_url: 'cw/type2/object/over/202_1.png',
              icon_normal_url: 'cw/type2/icon/202.png',
              icon_dim_url: 'cw/type2/icon/dim/202_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 6,
              left: 117,
              top: 276,
            },
            {
              nomal_url: 'cw/type2/object/47_3.png',
              over_url: 'cw/type2/object/over/47_3.png',
              icon_normal_url: 'cw/type2/icon/47.png',
              icon_dim_url: 'cw/type2/icon/dim/47_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 7,
              left: 136,
              top: 246,
            },
            {
              nomal_url: 'cw/type2/object/35_5.png',
              over_url: 'cw/type2/object/over/35_5.png',
              icon_normal_url: 'cw/type2/icon/35.png',
              icon_dim_url: 'cw/type2/icon/dim/35_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 8,
              left: 170,
              top: 273,
            },
            {
              nomal_url: 'cw/type2/object/4_1.png',
              over_url: 'cw/type2/object/over/4_1.png',
              icon_normal_url: 'cw/type2/icon/4.png',
              icon_dim_url: 'cw/type2/icon/dim/4_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 9,
              left: 193,
              top: 272,
            },
            {
              nomal_url: 'cw/type2/object/33_5.png',
              over_url: 'cw/type2/object/over/33_5.png',
              icon_normal_url: 'cw/type2/icon/33.png',
              icon_dim_url: 'cw/type2/icon/dim/33_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 10,
              left: 213,
              top: 244,
            },
            {
              nomal_url: 'cw/type2/object/35_1.png',
              over_url: 'cw/type2/object/over/35_1.png',
              icon_normal_url: 'cw/type2/icon/35.png',
              icon_dim_url: 'cw/type2/icon/dim/35_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 11,
              left: 316,
              top: 246,
            },
            {
              nomal_url: 'cw/type2/object/33_4.png',
              over_url: 'cw/type2/object/over/33_4.png',
              icon_normal_url: 'cw/type2/icon/33.png',
              icon_dim_url: 'cw/type2/icon/dim/33_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 12,
              left: 330,
              top: 273,
            },
            {
              nomal_url: 'cw/type2/object/202_2.png',
              over_url: 'cw/type2/object/over/202_2.png',
              icon_normal_url: 'cw/type2/icon/202.png',
              icon_dim_url: 'cw/type2/icon/dim/202_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 13,
              left: 341,
              top: 247,
            },
            {
              nomal_url: 'cw/type2/object/4_2.png',
              over_url: 'cw/type2/object/over/4_2.png',
              icon_normal_url: 'cw/type2/icon/4.png',
              icon_dim_url: 'cw/type2/icon/dim/4_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 14,
              left: 384,
              top: 277,
            },
            {
              nomal_url: 'cw/type2/object/47_2.png',
              over_url: 'cw/type2/object/over/47_2.png',
              icon_normal_url: 'cw/type2/icon/47.png',
              icon_dim_url: 'cw/type2/icon/dim/47_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 15,
              left: 399,
              top: 242,
            },
            {
              nomal_url: 'cw/type2/object/33_6.png',
              over_url: 'cw/type2/object/over/33_6.png',
              icon_normal_url: 'cw/type2/icon/33.png',
              icon_dim_url: 'cw/type2/icon/dim/33_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 16,
              left: 137,
              top: 380,
            },
            {
              nomal_url: 'cw/type2/object/184_1.png',
              over_url: 'cw/type2/object/over/184_1.png',
              icon_normal_url: 'cw/type2/icon/184.png',
              icon_dim_url: 'cw/type2/icon/dim/184_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 17,
              left: 165,
              top: 377,
            },
            {
              nomal_url: 'cw/type2/object/35_6.png',
              over_url: 'cw/type2/object/over/35_6.png',
              icon_normal_url: 'cw/type2/icon/35.png',
              icon_dim_url: 'cw/type2/icon/dim/35_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 18,
              left: 202,
              top: 355,
            },
            {
              nomal_url: 'cw/type2/object/184_2.png',
              over_url: 'cw/type2/object/over/184_2.png',
              icon_normal_url: 'cw/type2/icon/184.png',
              icon_dim_url: 'cw/type2/icon/dim/184_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 19,
              left: 318,
              top: 377,
            },
            {
              nomal_url: 'cw/type2/object/35_2.png',
              over_url: 'cw/type2/object/over/35_2.png',
              icon_normal_url: 'cw/type2/icon/35.png',
              icon_dim_url: 'cw/type2/icon/dim/35_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 20,
              left: 329,
              top: 355,
            },
            {
              nomal_url: 'cw/type2/object/33_4.png',
              over_url: 'cw/type2/object/over/33_4.png',
              icon_normal_url: 'cw/type2/icon/33.png',
              icon_dim_url: 'cw/type2/icon/dim/33_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 21,
              left: 364,
              top: 373,
            },
            {
              nomal_url: 'cw/type2/object/48_1.png',
              over_url: 'cw/type2/object/over/48_1.png',
              icon_normal_url: 'cw/type2/icon/48.png',
              icon_dim_url: 'cw/type2/icon/dim/48_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 22,
              left: 387,
              top: 352,
            },
            {
              nomal_url: 'cw/type2/object/202_3.png',
              over_url: 'cw/type2/object/over/202_3.png',
              icon_normal_url: 'cw/type2/icon/202.png',
              icon_dim_url: 'cw/type2/icon/dim/202_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 23,
              left: 388,
              top: 386,
            },
            {
              nomal_url: 'cw/type2/object/4_4.png',
              over_url: 'cw/type2/object/over/4_4.png',
              icon_normal_url: 'cw/type2/icon/4.png',
              icon_dim_url: 'cw/type2/icon/dim/4_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 24,
              left: 112,
              top: 489,
            },
            {
              nomal_url: 'cw/type2/object/202_4.png',
              over_url: 'cw/type2/object/over/202_4.png',
              icon_normal_url: 'cw/type2/icon/202.png',
              icon_dim_url: 'cw/type2/icon/dim/202_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 25,
              left: 133,
              top: 461,
            },
            {
              nomal_url: 'cw/type2/object/48_3.png',
              over_url: 'cw/type2/object/over/48_3.png',
              icon_normal_url: 'cw/type2/icon/48.png',
              icon_dim_url: 'cw/type2/icon/dim/48_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 26,
              left: 175,
              top: 484,
            },
            {
              nomal_url: 'cw/type2/object/33_7.png',
              over_url: 'cw/type2/object/over/33_7.png',
              icon_normal_url: 'cw/type2/icon/33.png',
              icon_dim_url: 'cw/type2/icon/dim/33_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 27,
              left: 205,
              top: 460,
            },
            {
              nomal_url: 'cw/type2/object/35_8.png',
              over_url: 'cw/type2/object/over/35_8.png',
              icon_normal_url: 'cw/type2/icon/35.png',
              icon_dim_url: 'cw/type2/icon/dim/35_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 28,
              left: 211,
              top: 488,
            },
            {
              nomal_url: 'cw/type2/object/33_6.png',
              over_url: 'cw/type2/object/over/33_6.png',
              icon_normal_url: 'cw/type2/icon/33.png',
              icon_dim_url: 'cw/type2/icon/dim/33_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 29,
              left: 313,
              top: 480,
            },
            {
              nomal_url: 'cw/type2/object/4.png',
              over_url: 'cw/type2/object/over/4.png',
              icon_normal_url: 'cw/type2/icon/4.png',
              icon_dim_url: 'cw/type2/icon/dim/4_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 30,
              left: 334,
              top: 492,
            },
            {
              nomal_url: 'cw/type2/object/202_5.png',
              over_url: 'cw/type2/object/over/202_5.png',
              icon_normal_url: 'cw/type2/icon/202.png',
              icon_dim_url: 'cw/type2/icon/dim/202_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 31,
              left: 366,
              top: 463,
            },
            {
              nomal_url: 'cw/type2/object/47_1.png',
              over_url: 'cw/type2/object/over/47_1.png',
              icon_normal_url: 'cw/type2/icon/47.png',
              icon_dim_url: 'cw/type2/icon/dim/47_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 32,
              left: 371,
              top: 493,
            },
            {
              nomal_url: 'cw/type2/object/35_3.png',
              over_url: 'cw/type2/object/over/35_3.png',
              icon_normal_url: 'cw/type2/icon/35.png',
              icon_dim_url: 'cw/type2/icon/dim/35_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 33,
              left: 409,
              top: 458,
            },
            {
              nomal_url: 'cw/type2/object/33_8.png',
              over_url: 'cw/type2/object/over/33_8.png',
              icon_normal_url: 'cw/type2/icon/33.png',
              icon_dim_url: 'cw/type2/icon/dim/33_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 34,
              left: 131,
              top: 569,
            },
            {
              nomal_url: 'cw/type2/object/47_4.png',
              over_url: 'cw/type2/object/over/47_4.png',
              icon_normal_url: 'cw/type2/icon/47.png',
              icon_dim_url: 'cw/type2/icon/dim/47_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 35,
              left: 160,
              top: 598,
            },
            {
              nomal_url: 'cw/type2/object/35_7.png',
              over_url: 'cw/type2/object/over/35_7.png',
              icon_normal_url: 'cw/type2/icon/35.png',
              icon_dim_url: 'cw/type2/icon/dim/35_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 36,
              left: 187,
              top: 575,
            },
            {
              nomal_url: 'cw/type2/object/35_4.png',
              over_url: 'cw/type2/object/over/35_4.png',
              icon_normal_url: 'cw/type2/icon/35.png',
              icon_dim_url: 'cw/type2/icon/dim/35_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 37,
              left: 310,
              top: 572,
            },
            {
              nomal_url: 'cw/type2/object/184_3.png',
              over_url: 'cw/type2/object/over/184_3.png',
              icon_normal_url: 'cw/type2/icon/184.png',
              icon_dim_url: 'cw/type2/icon/dim/184_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 38,
              left: 323,
              top: 592,
            },
            {
              nomal_url: 'cw/type2/object/48_2.png',
              over_url: 'cw/type2/object/over/48_2.png',
              icon_normal_url: 'cw/type2/icon/48.png',
              icon_dim_url: 'cw/type2/icon/dim/48_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 39,
              left: 365,
              top: 583,
            },
            {
              nomal_url: 'cw/type2/object/33_1.png',
              over_url: 'cw/type2/object/over/33_1.png',
              icon_normal_url: 'cw/type2/icon/33.png',
              icon_dim_url: 'cw/type2/icon/dim/33_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 40,
              left: 403,
              top: 568,
            },
            {
              nomal_url: 'cw/type2/object/22_1.png',
              over_url: 'cw/type2/object/over/22_1.png',
              icon_normal_url: 'cw/type2/icon/22.png',
              icon_dim_url: 'cw/type2/icon/dim/22_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 41,
              left: 1,
              top: 365,
            },
            {
              nomal_url: 'cw/type2/object/22_2.png',
              over_url: 'cw/type2/object/over/22_2.png',
              icon_normal_url: 'cw/type2/icon/22.png',
              icon_dim_url: 'cw/type2/icon/dim/22_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 42,
              left: 1,
              top: 551,
            },
            {
              nomal_url: 'cw/type2/object/57_2.png',
              over_url: 'cw/type2/object/over/57_2.png',
              icon_normal_url: 'cw/type2/icon/57.png',
              icon_dim_url: 'cw/type2/icon/dim/57_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 43,
              left: 57,
              top: 331,
            },
            {
              nomal_url: 'cw/type2/object/57_3.png',
              over_url: 'cw/type2/object/over/57_3.png',
              icon_normal_url: 'cw/type2/icon/57.png',
              icon_dim_url: 'cw/type2/icon/dim/57_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 44,
              left: 57,
              top: 520,
            },
            {
              nomal_url: 'cw/type2/object/57_1.png',
              over_url: 'cw/type2/object/over/57_1.png',
              icon_normal_url: 'cw/type2/icon/57.png',
              icon_dim_url: 'cw/type2/icon/dim/57_dim.png',
              linkListIdx: -1,
              lessonData: {},
              imgIdx: 45,
              left: 466,
              top: 376,
            },
          ],
        },
      },
    ]
    this.dropMenuList = []
    for (let i = 0; i < this.dropMenuListData.length; i++) {
      this.dropMenuList.push(this.dropMenuListData[i].name)
    }
  },
  methods: {
    selectDropMenu(value) {
      for (let i = 0; i < this.dropMenuListData.length; i++) {
        if (value === this.dropMenuListData[i].name) {
          this.curriculumData.cwInfo = this.dropMenuListData[i]
          break
        }
      }
      this.currentClassName = value
      this.$refs.listView.unLinkAllItem()
      this.$refs.imgListView.setData(this.curriculumData.cwInfo.data)
      this.$refs.imgListViewSwiper.setData(
        this.curriculumData.cwInfo.data.interactionObjects
      )
    },
    setData(curriculumData) {
      $('#modalCuriRegi .modal-body').scrollTop(0)
      if (curriculumData) {
        this.isUpdate = true
        this.submitBtnName = '수정'
        this.$refs.listView.unLinkAllItem()
        this.curriculumData = curriculumData
        this.currentClassName = this.curriculumData.cwInfo.name
        this.$refs.imgListView.setData(this.curriculumData.cwInfo.data)
        this.$refs.imgListViewSwiper.setData(
          this.curriculumData.cwInfo.data.interactionObjects
        )
        this.saveFileFullPath =
          this.curriculumData.savePathInfo.path +
          ' > ' +
          this.curriculumData.savePathInfo.fileName +
          '.link'
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
          isOpenEducation: true,
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
        '.link'
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
      isAllClear = true
      if (isAllClear) {
        const newData = {}
        for (const item in this.curriculumData) {
          if (item === 'cwInfo') {
            newData[item] = {}
            newData[item].codeNum = this.curriculumData[item].codeNum
            newData[item].name = this.curriculumData[item].name
            newData[item].data = {
              backImg_url: this.curriculumData[item].data.backImg_url,
              interactionObjects: this.$refs.imgListView.getData(),
            }
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
        if(!this.isUpdate){
          this.$emit('add-curiiculum-data', newData)
        }else{
          this.$emit('update-curiiculum-data', newData)
        }
        $('#modalCuriRegi').modal('hide')
      }
    }
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
