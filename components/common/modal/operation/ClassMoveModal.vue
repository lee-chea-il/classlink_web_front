<template>
  <div
    id="modalClassMove"
    class="modal fade modal_ac_manage_cls"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">반 이동</h5>
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
            <!-- 이름 검색 - 왼쪽 -->
            <div class="search_std">
              <div class="search_name">
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    이름 내림차순
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">이름 내림차순</a>
                    <a class="dropdown-item" href="#">이름 오름차순</a>
                  </div>
                </div>
                <div class="input-group input-search form-inline">
                  <input
                    type="text"
                    placeholder="학생 이름 검색"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
              </div>
              <div class="table_area">
                <div class="table_thead">
                  <table class="tb">
                    <!-- <colgroup>
											<col width="50">
											<col>
										</colgroup> -->
                    <thead>
                      <tr>
                        <th class="th01">
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk02all"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk02all"
                            ></label>
                          </div>
                        </th>
                        <th>심화A반</th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div class="table_tbody">
                  <table class="tb">
                    <!-- <colgroup>
											<col width="50">
											<col width="70">
											<col width="100">
											<col>
										</colgroup> -->
                    <tbody>
                      <tr>
                        <td class="td01">
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk0201"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk0201"
                            ></label>
                          </div>
                        </td>
                        <td class="td02">중1</td>
                        <td class="td03">홍미미</td>
                        <td class="td04">010-1111-2222</td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk0202"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk0202"
                            ></label>
                          </div>
                        </td>
                        <td>중3</td>
                        <td>홍미미</td>
                        <td>010-1111-2222</td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk0203"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk0203"
                            ></label>
                          </div>
                        </td>
                        <td>중3</td>
                        <td>홍미미</td>
                        <td>010-1111-2222</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.이름 검색 - 왼쪽 -->
            <!-- 이동버튼 영역 -->
            <div class="btn_move_area">
              <div class="custom-control custom-checkbox form-inline">
                <input
                  id="checkbox01"
                  type="checkbox"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="checkbox01"
                  >복사</label
                >
              </div>
              <!-- [개발참조]toasts 메세지 '이동할 반을 선택해주세요.'' : 아무런 반을 체크하지 않고 누르면 -->
              <button
                class="btn btn_arrow_square2_r"
                onClick="toasts('이동할 반을 선택해주세요.')"
              ></button>
              <button
                class="btn btn_arrow_square2_l"
                onClick="toasts('이동할 반을 선택해주세요.')"
              ></button>
              <button class="btn btn_crud_default">초기화</button>
            </div>
            <!-- /.이동버튼 영역 -->
            <!-- 이름 검색 - 오른쪽 -->
            <div class="search_std">
              <div class="search_name">
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    이름 내림차순
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">이름 내림차순</a>
                    <a class="dropdown-item" href="#">이름 오름차순</a>
                  </div>
                </div>
                <div class="input-group input-search form-inline">
                  <input
                    type="text"
                    placeholder="학생 이름 검색"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
              </div>
              <div class="table_area right">
                <!-- 반 list -->
                <div class="list_class">
                  <table class="tb">
                    <!-- <colgroup>
											<col width="50">
											<col>
										</colgroup> -->
                    <thead>
                      <tr class="class_tr">
                        <th>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk03all"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk03all"
                            ></label>
                          </div>
                        </th>
                        <th colspan="2">심화A반</th>
                        <th>
                          <button id="showStudents01" class="btn btn_filter">
                            펴기
                          </button>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <!-- 반 list -->
                <!-- 해당반의학생 list -->
                <div
                  id="listStudents01"
                  class="list_class_students"
                  style="display: none"
                >
                  <table class="tb">
                    <!-- 	<colgroup>
											<col width="50">
											<col width="70">
											<col width="100">
											<col>
										</colgroup> -->
                    <tbody>
                      <!-- 반 소속 학생리스트 -->
                      <div class="list_class_students" style="display: none">
                        <tr>
                          <td>
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                id="chk0301"
                                type="checkbox"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label"
                                for="chk0301"
                              ></label>
                            </div>
                          </td>
                          <td class="text-right">
                            <i class="icons_new"></i> 중1
                          </td>
                          <td>홍미미</td>
                          <td>010-1111-2222</td>
                        </tr>
                        <tr>
                          <td>
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                id="chk0302"
                                type="checkbox"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label"
                                for="chk0302"
                              ></label>
                            </div>
                          </td>
                          <td class="text-right">
                            <i class="icons_new"></i> 중3
                          </td>
                          <td>홍미미</td>
                          <td>010-1111-2222</td>
                        </tr>
                        <tr>
                          <td>
                            <div
                              class="custom-control custom-checkbox form-inline"
                            >
                              <input
                                id="chk0303"
                                type="checkbox"
                                class="custom-control-input"
                              />
                              <label
                                class="custom-control-label"
                                for="chk0303"
                              ></label>
                            </div>
                          </td>
                          <td class="text-right">중3</td>
                          <td>홍미미</td>
                          <td>010-1111-2222</td>
                        </tr>
                      </div>
                      <!-- /.반 소속 학생리스트 -->
                    </tbody>
                  </table>
                </div>
                <!-- 해당반의학생 list -->

                <!-- 반 list -->
                <div class="list_class">
                  <table class="tb">
                    <!-- 	<colgroup>
											<col width="50">
											<col>
										</colgroup> -->
                    <thead>
                      <tr class="class_tr">
                        <th>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk03all"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk03all"
                            ></label>
                          </div>
                        </th>
                        <th colspan="2">심화B반</th>
                        <th>
                          <button class="btn btn_filter">펴기</button>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <!-- 반 list -->
              </div>
            </div>
            <!-- /.이름 검색 - 오른쪽 -->
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">저장하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassMoveModal',
}
</script>

<style></style>
