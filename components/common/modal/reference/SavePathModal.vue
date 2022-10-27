<template>
  <div
    id="modalStoragepath"
    class="modal fade modal_ac_manage_dtr double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">저장경로</h5>
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
          <!-- 탭 컨텐츠 -->
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="grade-tab"
                class="nav-link active"
                data-toggle="tab"
                data-target="#tab01"
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
                data-target="#tab02"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                프랜차이즈
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="class-tab"
                class="nav-link"
                data-toggle="tab"
                data-target="#tab03"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                내자료
              </button>
            </li>
          </ul>
          <div id="myTabContent" class="tab-content path_list">
            <!-- 탭01 내용 -->
            <div
              id="tab01"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="grade-tab"
            >
              <ul>
                <li>
                  <!-- 리스트01 -->
                  <div class="list">
                    <i
                      id="show_sublistLessonRegi01"
                      class="btn icons_arrow_r"
                    ></i>
                    <span class="text">국어</span>
                    <!-- <i class="icons_plus_circle_off"></i> -->
                  </div>
                  <!-- 리스트01_sub-->
                  <div
                    id="list_sublistLessonRegi01"
                    class="list_sub"
                    style="display: none"
                  >
                    <ul>
                      <li>
                        <i
                          id="show_sublistLessonRegi01_sub"
                          class="btn icons_arrow_r"
                        ></i>
                        <span class="text">대단원1</span>
                        <!-- <i class="icons_plus_circle_off"></i> -->
                      </li>
                    </ul>
                  </div>
                  <!-- /.리스트01_sub-->
                  <!-- 리스트01_sub_sub-->
                  <div
                    id="list_sublistLessonRegi01_sub"
                    class="list_sub_sub"
                    style="display: none"
                  >
                    <ul>
                      <li>
                        <span class="text">자연수의 혼합 계산 영상1.mp4</span>
                      </li>
                      <li>
                        <span class="text">자연수의 혼합 계산 영상2.mp4</span>
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
                      id="show_sublistLessonRegi02"
                      class="btn icons_arrow_r"
                    ></i>
                    <span class="text">수학</span>
                    <!-- <i class="icons_plus_circle_off"></i> -->
                  </div>
                  <div
                    id="list_sublistLessonRegi02"
                    class="list_sub"
                    style="display: none"
                  >
                    <ul>
                      <li>
                        <i
                          id="show_sublistLessonRegi02_sub"
                          class="btn icons_arrow_r"
                        ></i>
                        <span class="text">자연수 I</span>
                        <!-- <i class="icons_plus_circle_off"></i> -->
                      </li>
                    </ul>
                  </div>
                  <!-- /.리스트02 -->
                </li>
              </ul>
            </div>
            <!-- /.탭01 내용 -->
            <!-- 탭02 내용 -->
            <div
              id="tab02"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="class-tab"
            >
              동일 형식
            </div>
            <!-- /.탭02 내용 -->
            <!-- 탭02 내용 -->
            <div
              id="tab03"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="class-tab"
            >
              동일 형식
            </div>
            <!-- /.탭02 내용 -->
          </div>
          <!-- /.탭 컨텐츠 -->
          <div class="select_path">
            <span class="tit">선택폴더</span>
            <span>수학 &gt; 대단원</span>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">저장</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavePathModal',
}
</script>

<style></style>
