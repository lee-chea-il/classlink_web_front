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
                        <a class="dropdown-item" href="#">01</a>
                        <a class="dropdown-item" href="#">02</a>
                      </div>
                    </div>
                  </div>
                  <div class="cw_box">
                    <img id="cwBoxBackImg" />
                    <CustomImgListView
                      ref="classWorld"
                      :expanded="false"
                      :cwData="cwData"
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
      lessonDataList: [
        {
          name: '화법과 작문111.mp4',
          type: 'institution',
          dbIdx: 1
        },
        {
          name: '화법과 작문222.txt',
          type: 'institution',
          dbIdx: 1
        },
        {
          name: '화법과 작문333.pdf',
          type: 'institution',
          dbIdx: 1
        },
        {
          name: '화법과 작문444.mp3',
          type: 'institution',
          dbIdx: 1
        },
        {
          name: '화법과 작문555.quiz',
          type: 'institution',
          dbIdx: 1
        },
      ],
      cwData: {
        backImg_url: require('@/assets/images/cw/type1/cw_bg_guide.jpg'),
        interactionObjects:[
          {
            nomal_url: require('@/assets/images/cw/type1/object/101.png'),
            over_url: require('@/assets/images/cw/type1/object/101.png'),
            icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
            icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
            imgIdx: 0,
            left:15,
            top:56
          },
          {
            nomal_url: require('@/assets/images/cw/type1/object/99.png'),
            over_url: require('@/assets/images/cw/type1/object/99.png'),
            icon_nomal_url: require('@/assets/images/cw/type1/icon/4.png'),
            icon_over_url: require('@/assets/images/cw/type1/icon/4.png'),
            imgIdx: 1,
            left:15,
            top:56
          }
        ]
      }
    }
  },
  methods: {
    copyData() {
      const instiTab = document.getElementById('institute')
      if (instiTab.classList.contains('show')) {
        this.$refs.institution.copyData()
      } else {
        this.$refs.franchise.copyData()
      }
    },
    pasteData() {
      this.$refs.curriculum.pasteData(this.copyCheckData)
    },
    delData() {
      this.$refs.curriculum.delData()
    },
    copyDataCallBack(copyData) {
      this.copyCheckData = copyData
      console.log(this.copyCheckData)
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
</style>
