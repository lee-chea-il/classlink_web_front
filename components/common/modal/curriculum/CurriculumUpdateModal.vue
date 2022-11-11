<template>
  <Transition name="modal">
    <!-- 모달 팝업 ------------------------------------->
	  <!-- 커리큘럼등록/수정 (팝업 L) -->
    <div id="modalCuriRegi" class="modal fade modal_ac_manage_curi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">커리큘럼 등록 / 수정</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_curiregi"><!-- 모달 내용 구분 class-->
              <!-- 2단 분류 컨텐츠 -->
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <div class="divide_area left">
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">
                      <input type="text" placeholder="입력해 주세요" class="form-control" value="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">
                      <textarea placeholder="메모입력"></textarea>
                    </div>
                  </div>
                  <!-- 	<div class="form-group">
                    <label for="">교육 목표</label>
                    <div class="col">
                      <input type="text" placeholder="입력해 주세요" class="form-control" value="">
                    </div>
                  </div> -->

                  <div class="title">
                    CW 교실
                    <div class="dropdown form-inline">
                      <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        교실선택
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
                          {{dropMenu}}
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
                    />
                  </div>
                  <div class="item_list_wrap">
                    <div class="item_list">
                      <!-- [개발참조] 아이템이 있을때 : class="item ok" -->
                      <div class="item ok">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
                      <div class="item">
                        <button class="btn icons_x_circle_off" type="button"></button>
                      </div>
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
                        <input id="fileName" type="text" class="file_input_textbox" readonly >
                        <div class="file_input_div">
                          <button class="btn btn_crud_default">찾아보기</button>
                          <input type="file" name="file_1" class="file_input_hidden" onchange="javascript: document.getElementById('fileName').value = this.value"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">제목</label>
                    <div class="col">
                      찾아온 레슨 제목
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">설명</label>
                    <div class="col">
                      찾아온 레슨에 대한 설명
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">교육 목표</label>
                    <div class="col">
                      입력했던 교육 목표
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" style="place-self: flex-start">레슨 자료</label>
                    <div class="col">
                      <div class="list_box">
                        <!-- 자료가 없을 경우 텍스트
                        <div class="nothing_txt">
                          현재 불러온 레슨이 없습니다.
                        </div>-->  	

                        <div class="section">
                          <span class="custom-control custom-checkbox form-inline checkbox00">
                            <input id="checkbox01" type="checkbox" class="custom-control-input">
                            <label class="custom-control-label checkbox01" for="checkbox01"></label>
                          </span>
                          <!-- 커리큘럼 등록 시 출력됨 -->
                          <span class="sum">연결 개수: 1개</span>
                          <button class="btn btn_crud_default cancel">전체 해제</button>
                          <!-- 커리큘럼 수정 시 출력됨
                          <button class="btn btn_crud_default cancel">초기화</button> -->
                        </div>
                        <div class="list_area">
                          <CustomListView
                            ref="update"
                            :dataList="lessonDataList"
                            :pidNum="3000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">저장 경로</label>
                    <div class="col">
                      <input type="text" placeholder="저장할 폴더를 선택해 주세요" class="form-control form-inline front_button">
                      <button class="btn btn_crud_default" data-toggle="modal" data-target="#modalStoragepath">찾아보기</button> 
                    </div>
                  </div>

                  <div class="check_sec">
                    <span class="custom-control custom-checkbox form-inline">
                      <input id="checkbox06" type="checkbox" class="custom-control-input" checked>
                      <label class="custom-control-label checkbox06" for="checkbox06">교육기관에 해당 자료를 공개합니다.</label>
                    </span>
                    <span class="custom-control custom-checkbox form-inline">
                      <input id="checkbox07" type="checkbox" class="custom-control-input" checked>
                      <label class="custom-control-label checkbox07" for="checkbox07">계속 등록하기</label>
                    </span>
                  </div>

                </div>
                <!-- /.오른쪽 영역 -->
              </div>
              <!-- /.2단 분류 컨텐츠 -->
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">등록</button>
            <button class="btn btn_crud_default" data-dismiss="modal">취소</button>
            <!-- [개발참조] 커리큘럼 수정 시 출력되는 버튼 -->
            <!-- <button class="btn btn_crud_point">수정</button>
            <button class="btn btn_crud_danger" data-dismiss="modal">삭제</button> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CustomListView from '@/components/common/custom/CustomListView.vue'
import CustomImgListView from '@/components/common/custom/CustomImgListView.vue'

export default {
  name: 'CurriculumUpdateModal',
  components: {
    CustomListView,
    CustomImgListView
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
      dropMenuList: [],
      dropMenuListData: [],
      lessonDataList: [
        {
          name: '화법과 작문111.mp4',
          type: 'institution',
          dbIdx: 1
        },
        {
          name: '화법과 작문222.txt',
          type: 'institution',
          dbIdx: 2
        },
        {
          name: '화법과 작문333.pdf',
          type: 'institution',
          dbIdx: 3
        },
        {
          name: '화법과 작문444.mp3',
          type: 'institution',
          dbIdx: 4
        },
        {
          name: '화법과 작문555.quiz',
          type: 'institution',
          dbIdx: 5
        },
        {
          name: '화법과 작문111.mp4',
          type: 'institution',
          dbIdx: 6
        },
        {
          name: '화법과 작문222.txt',
          type: 'institution',
          dbIdx: 7
        },
        {
          name: '화법과 작문333.pdf',
          type: 'institution',
          dbIdx: 8
        },
        {
          name: '화법과 작문444.mp3',
          type: 'institution',
          dbIdx: 9
        },
        {
          name: '화법과 작문555.quiz',
          type: 'institution',
          dbIdx: 10
        },
      ],
      cwData: null
    }
  },
  mounted() {
    this.dropMenuListData=[
      {
        codeNum:'CW_001',
        name:'CW_001',
        data: {
          backImg_url: require('@/assets/images/cw/type1/cw_bg.jpg'),
          interactionObjects:[
            {
              nomal_url: require('@/assets/images/cw/type1/object/40.png'),
              over_url: require('@/assets/images/cw/type1/object/40.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 0,
              left:271,
              top:7
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/101.png'),
              over_url: require('@/assets/images/cw/type1/object/101.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 1,
              left:18,
              top:56
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/99.png'),
              over_url: require('@/assets/images/cw/type1/object/99.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 2,
              left:160,
              top:56
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/102.png'),
              over_url: require('@/assets/images/cw/type1/object/102.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 3,
              left:334,
              top:56
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/184.png'),
              over_url: require('@/assets/images/cw/type1/object/184.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 4,
              left:239,
              top:128
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/36.png'),
              over_url: require('@/assets/images/cw/type1/object/36.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 5,
              left:206,
              top:137
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/11.png'),
              over_url: require('@/assets/images/cw/type1/object/11.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 6,
              left:161,
              top:158
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/4.png'),
              over_url: require('@/assets/images/cw/type1/object/4.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 7,
              left:284,
              top:158
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 8,
              left:117,
              top:231
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 9,
              left:150,
              top:228
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 10,
              left:177,
              top:231
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 11,
              left:210,
              top:228
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 12,
              left:240,
              top:231
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 13,
              left:273,
              top:228
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 14,
              left:302,
              top:231
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 15,
              left:336,
              top:228
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 16,
              left:365,
              top:231
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 17,
              left:397,
              top:228
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 18,
              left:117,
              top:286
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 19,
              left:150,
              top:284
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 20,
              left:177,
              top:286
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 21,
              left:210,
              top:284
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 22,
              left:240,
              top:286
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 23,
              left:273,
              top:284
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 24,
              left:302,
              top:286
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 25,
              left:336,
              top:284
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 26,
              left:365,
              top:286
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 27,
              left:397,
              top:284
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 28,
              left:117,
              top:343
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 29,
              left:150,
              top:340
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 30,
              left:177,
              top:343
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 31,
              left:210,
              top:340
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 32,
              left:240,
              top:343
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 33,
              left:273,
              top:340
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 34,
              left:302,
              top:343
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 35,
              left:336,
              top:340
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 36,
              left:365,
              top:343
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 37,
              left:397,
              top:340
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 38,
              left:117,
              top:400
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 39,
              left:150,
              top:397
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 40,
              left:177,
              top:400
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 41,
              left:210,
              top:397
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 42,
              left:240,
              top:400
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 43,
              left:273,
              top:397
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 44,
              left:302,
              top:400
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 45,
              left:336,
              top:397
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 46,
              left:365,
              top:400
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 47,
              left:397,
              top:397
            },

            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 48,
              left:117,
              top:458
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 49,
              left:150,
              top:455
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 50,
              left:177,
              top:458
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 51,
              left:210,
              top:455
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 52,
              left:240,
              top:458
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 53,
              left:273,
              top:455
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 54,
              left:302,
              top:458
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 55,
              left:336,
              top:455
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 56,
              left:365,
              top:458
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 57,
              left:397,
              top:455
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 58,
              left:117,
              top:513
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 59,
              left:150,
              top:510
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 60,
              left:177,
              top:513
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 61,
              left:210,
              top:510
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 62,
              left:240,
              top:513
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 63,
              left:273,
              top:510
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 64,
              left:302,
              top:513
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 65,
              left:336,
              top:510
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 66,
              left:365,
              top:513
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 67,
              left:397,
              top:510
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 68,
              left:117,
              top:564
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 69,
              left:150,
              top:561
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 70,
              left:177,
              top:564
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 71,
              left:210,
              top:561
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 72,
              left:240,
              top:564
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 73,
              left:273,
              top:561
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 74,
              left:302,
              top:564
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 75,
              left:336,
              top:561
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/202.png'),
              over_url: require('@/assets/images/cw/type1/object/202.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 76,
              left:365,
              top:564
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/34.png'),
              over_url: require('@/assets/images/cw/type1/object/34.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 77,
              left:397,
              top:561
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/191.png'),
              over_url: require('@/assets/images/cw/type1/object/191.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 78,
              left:76,
              top:252
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/189.png'),
              over_url: require('@/assets/images/cw/type1/object/189.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 79,
              left:73,
              top:367
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/192.png'),
              over_url: require('@/assets/images/cw/type1/object/192.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 80,
              left:66,
              top:456
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/194.png'),
              over_url: require('@/assets/images/cw/type1/object/194.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 81,
              left:289,
              top:602
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/183.png'),
              over_url: require('@/assets/images/cw/type1/object/183.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 82,
              left:117,
              top:614
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/183-1.png'),
              over_url: require('@/assets/images/cw/type1/object/183-1.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 83,
              left:152,
              top:617
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/183-2.png'),
              over_url: require('@/assets/images/cw/type1/object/183-2.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 84,
              left:207,
              top:614
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/183-3.png'),
              over_url: require('@/assets/images/cw/type1/object/183-3.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 85,
              left:247,
              top:615
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/183-4.png'),
              over_url: require('@/assets/images/cw/type1/object/183-4.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 86,
              left:338,
              top:617
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/183-5.png'),
              over_url: require('@/assets/images/cw/type1/object/183-5.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 87,
              left:381,
              top:617
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/13.png'),
              over_url: require('@/assets/images/cw/type1/object/13.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 88,
              left:67,
              top:663
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/20.png'),
              over_url: require('@/assets/images/cw/type1/object/20.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 89,
              left:204,
              top:661
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/20-1.png'),
              over_url: require('@/assets/images/cw/type1/object/20-1.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 90,
              left:264,
              top:661
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/13-1.png'),
              over_url: require('@/assets/images/cw/type1/object/13-1.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 91,
              left:352,
              top:663
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/5.png'),
              over_url: require('@/assets/images/cw/type1/object/5.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 92,
              left:417,
              top:244
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/5.png'),
              over_url: require('@/assets/images/cw/type1/object/5.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 93,
              left:414,
              top:295
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/5.png'),
              over_url: require('@/assets/images/cw/type1/object/5.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 94,
              left:415,
              top:342
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/5.png'),
              over_url: require('@/assets/images/cw/type1/object/5.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 95,
              left:409,
              top:382
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/5.png'),
              over_url: require('@/assets/images/cw/type1/object/5.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 96,
              left:411,
              top:443
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/5.png'),
              over_url: require('@/assets/images/cw/type1/object/5.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 97,
              left:414,
              top:504
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/29.png'),
              over_url: require('@/assets/images/cw/type1/object/29.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 98,
              left:441,
              top:358
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/6.png'),
              over_url: require('@/assets/images/cw/type1/object/6.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 99,
              left:432,
              top:408
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/13-2.png'),
              over_url: require('@/assets/images/cw/type1/object/13-2.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 100,
              left:476,
              top:263
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/13-3.png'),
              over_url: require('@/assets/images/cw/type1/object/13-3.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 101,
              left:475,
              top:407
            }
          ]
        }
      },
      {
        codeNum:'CW_002',
        name:'CW_002',
        data: {
          backImg_url: require('@/assets/images/cw/type1/cw_bg_guide.jpg'),
          interactionObjects:[
            {
              nomal_url: require('@/assets/images/cw/type1/object/101.png'),
              over_url: require('@/assets/images/cw/type1/object/101.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 0,
              left:18,
              top:56,
              height:319
            },
            {
              nomal_url: require('@/assets/images/cw/type1/object/99.png'),
              over_url: require('@/assets/images/cw/type1/object/99.png'),
              icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
              icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
              imgIdx: 1,
              left:160,
              top:56,
              height:179
            }
          ]
        }
      },
    ]
    this.dropMenuList=[]
    for(let i=0;i<this.dropMenuListData.length;i++){
      this.dropMenuList.push(this.dropMenuListData[i].name)
    }
  },
  methods: {
    selectDropMenu(value) {
      this.cwData=null
      for(let i=0;i<this.dropMenuListData.length;i++){
        if(value===this.dropMenuListData[i].name){
          this.cwData=this.dropMenuListData[i]
          break
        }
      }
      if(this.cwData){
        this.$refs.imgListView.setData(this.cwData.data)
      }
    }
  }
}
</script>

<style>
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
#modalCuriRegi .form-inline{
  width: initial;
}
.custom-control-input:checked ~ .custom-control-label::after {
  margin-left: 0.15rem;
}
</style>
