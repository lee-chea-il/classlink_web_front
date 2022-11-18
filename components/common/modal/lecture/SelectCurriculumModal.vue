<template>
  <div
    id="modalLectureRegi02"
    class="modal fade modal_ac_manage_lec"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">강좌 만들기</h5>
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
          <div class="cnts_section">
            <!-- 왼쪽 SECTION -->
            <div class="class_section">
              <div class="tit">커리큘럼 선택</div>
              <div class="dropdown form-inline">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  선생님 선택
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">홍길동 선생님</a>
                  <a class="dropdown-item" href="#">홍길동 선생님</a>
                  <a class="dropdown-item" href="#">홍길동 선생님</a>
                </div>
              </div>
              <div class="move_section my_cur">
                <div class="list_section selected">
                  <div class="list_area" style="border: none">
                    <!-- 탭 컨텐츠 -->
                    <ul id="myTab" class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          id="grade-tab"
                          class="nav-link active"
                          data-toggle="tab"
                          data-target="#grade"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          홍길동 선생님 커리큘럼
                        </button>
                      </li>
                    </ul>
                    <div id="myTabContent" class="tab-content">
                      <!-- 탭 내용01 -->
                      <div
                        id="institute"
                        class="tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="grade-tab"
                      >
                        <CustomTreeView
                          ref="institution"
                          :dataList="curriculumList"
                          :editable="false"
                          identity="teacher"
                          :pidNum="0"
                        />
                      </div>
                      <!-- /.탭 내용01 -->
                    </div>
                    <!-- /.탭 컨텐츠 -->
                  </div>
                </div>
              </div>
            </div>
            <!-- 왼쪽 SECTION -->
            <!-- 오른쪽 SECTION -->
            <div class="class_section">
              <div class="tit"></div>
              <div class="move_section my_cur">
                <div class="list_section selected">
                  <div class="sum_info">선택된 커리큘럼 <span>2</span>개</div>
                  <div class="list_area02">
                    <!-- 탭 내용01 -->
                    <div
                      id="mydata"
                      class="tab-pane fade show active"
                      role="tabpanel"
                      aria-labelledby="grade-tab"
                    >
                      <ul>
                        <li>
                          <!-- 리스트01 -->
                          <div class="list">
                            <i
                              id="show_sublist01"
                              class="btn icons_arrow_r"
                            ></i>
                            <span class="text">국어</span>
                            <i class="icons_minus_circle_off"></i>
                          </div>
                          <!-- 리스트01_sub-->
                          <div id="list_sub01" class="list_sub">
                            <ul>
                              <li>
                                <i
                                  id="show_sublist01_sub"
                                  class="btn icons_arrow_r"
                                ></i>
                                <span class="text">대단원1</span>
                                <i class="icons_minus_circle_off icon"></i>
                              </li>
                            </ul>
                          </div>
                          <!-- /.리스트01_sub-->
                          <!-- 리스트01_sub_sub-->
                          <div id="list_sub01_sub" class="list_sub_sub">
                            <ul>
                              <li>
                                <span class="text">소단원1.link</span>
                                <i class="icons_minus_circle_off"></i>
                                <!-- <div class="more_list" style="display: none;">
																		<ul>
																			<li>다운로드</li>
																			<li>수정</li>
																			<li>보기</li>
																			<li>삭제</li>
																			<li>복사</li>
																		</ul>
																	</div> -->
                              </li>
                              <li>
                                <span class="text">소단원2.link</span>
                                <i class="icons_minus_circle_off"></i>
                                <!-- <div class="more_list" style="display: none;">
																		<ul>
																			<li>다운로드</li>
																			<li>수정</li>
																			<li>보기</li>
																			<li>삭제</li>
																			<li>복사</li>
																		</ul>
																	</div> -->
                              </li>
                            </ul>
                          </div>
                          <!-- /.리스트01_sub_sub-->
                          <!-- /.리스트01 -->
                        </li>
                        <li>
                          <!-- 리스트02 -->
                          <div class="list">
                            <i
                              id="show_sublist02"
                              class="btn icons_arrow_r"
                            ></i>
                            <span class="text">수학</span>
                            <i class="icons_minus_circle_off"></i>
                          </div>
                          <!-- /.리스트02 -->
                        </li>
                      </ul>
                    </div>
                    <!-- /.탭 내용01 -->
                  </div>
                </div>
              </div>
            </div>
            <!-- 오른쪽 SECTION -->
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_default"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalLectureRegi"
          >
            이전
          </button>
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalLectureRegi03"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTreeView from '../../custom/CustomTreeView.vue'

export default {
  name: 'SelectCurriculumModal',
  components: { CustomTreeView },
  props: {
    curriculumList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped>
#institute > .vtl {
  height: 349px;
}
#franchise > .vtl {
  height: 349px;
}
#mydata > .vtl {
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
