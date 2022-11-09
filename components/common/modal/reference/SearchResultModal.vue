<template>
  <div
    id="modalDatafilterResult"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">자료 검색 결과</h5>
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
          <div class="modal_datafilter_result">
            <!-- 모달 내용 구분 class-->
            <div class="search_section">
              <div class="left_area">
                <button class="btn btn_crud_default copy" data-dismiss="modal">
                  복사
                </button>
              </div>
              <div class="right_area">
                <div class="input-group input-search form-inline">
                  <input
                    type="text"
                    placeholder="검색어 입력"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
                <button
                  class="btn btn_filter"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#modalDatafilter"
                >
                  필터
                </button>
              </div>
            </div>

            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <thead>
                    <tr>
                      <th>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk01"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk01"
                          ></label>
                        </div>
                      </th>
                      <th class="th01">파일이름</th>
                      <th class="th02">경로</th>
                      <th></th>
                      <th></th>
                      <th class="th03">과목</th>
                      <th class="th04">키워드</th>
                      <th class="th05">보기</th>
                      <th class="th06">위치</th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <tbody>
                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk02"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk02"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="title">
                          나의 덧셈과 뺄셈 혼합계산 혼합계산 나의 덧셈과 뺄셈
                          혼합계산 혼합계산.pdf 나의 덧셈과 뺄셈 혼합계산
                          혼합계산 나의 덧셈과 뺄셈 혼합계산 혼합계산.pdf
                        </div>
                      </td>
                      <td>
                        <div class="path">
                          학원 > 수학 > 자연수의 혼합계산 > 학원 > 수학 >
                          자연수의 혼합계산
                        </div>
                      </td>
                      <td><div class="subject">수학</div></td>
                      <td>
                        <div class="keyword">
                          키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6,
                          키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6
                        </div>
                      </td>
                      <td><i class="icons_zoom_off"></i></td>
                      <td>
                        <button
                          class="btn btn_crud_default"
                          data-dismiss="modal"
                        >
                          이동
                        </button>
                      </td>
                    </tr>

                    <tr class="bg">
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk03"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk03"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="title">
                          나의 덧셈과 뺄셈 혼합계산 혼합계산 나의 덧셈과 뺄셈
                          혼합계산 혼합계산.pdf 나의 덧셈과 뺄셈 혼합계산
                          혼합계산 나의 덧셈과 뺄셈 혼합계산 혼합계산.pdf
                        </div>
                      </td>
                      <td>
                        <div class="path">
                          학원 > 수학 > 자연수의 혼합계산 > 학원 > 수학 >
                          자연수의 혼합계산
                        </div>
                      </td>
                      <td><div class="subject">수학</div></td>
                      <td>
                        <div class="keyword">
                          키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6,
                          키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6
                        </div>
                      </td>
                      <td><i class="icons_zoom_off"></i></td>
                      <td>
                        <button
                          class="btn btn_crud_default"
                          data-dismiss="modal"
                        >
                          이동
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk04"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk04"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="title">
                          나의 덧셈과 뺄셈 혼합계산 혼합계산 나의 덧셈과 뺄셈
                          혼합계산 혼합계산.pdf 나의 덧셈과 뺄셈 혼합계산
                          혼합계산 나의 덧셈과 뺄셈 혼합계산 혼합계산.pdf
                        </div>
                      </td>
                      <td>
                        <div class="path">
                          학원 > 수학 > 자연수의 혼합계산 > 학원 > 수학 >
                          자연수의 혼합계산
                        </div>
                      </td>
                      <td><div class="subject">수학</div></td>
                      <td>
                        <div class="keyword">
                          키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6,
                          키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6
                        </div>
                      </td>
                      <td><i class="icons_zoom_off"></i></td>
                      <td>
                        <button
                          class="btn btn_crud_default"
                          data-dismiss="modal"
                        >
                          이동
                        </button>
                      </td>
                    </tr>

                    <tr class="bg">
                      <td>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chk05"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="chk05"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="title">
                          나의 덧셈과 뺄셈 혼합계산 혼합계산 나의 덧셈과 뺄셈
                          혼합계산 혼합계산.pdf 나의 덧셈과 뺄셈 혼합계산
                          혼합계산 나의 덧셈과 뺄셈 혼합계산 혼합계산.pdf
                        </div>
                      </td>
                      <td>
                        <div class="path">
                          학원 > 수학 > 자연수의 혼합계산 > 학원 > 수학 >
                          자연수의 혼합계산
                        </div>
                      </td>
                      <td><div class="subject">수학</div></td>
                      <td>
                        <div class="keyword">
                          키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6,
                          키워드1, 키워드2, 키워드3, 키워드4, 키워드5, 키워드6
                        </div>
                      </td>
                      <td><i class="icons_zoom_off"></i></td>
                      <td>
                        <button
                          class="btn btn_crud_default disabled"
                          data-dismiss="modal"
                        >
                          이동
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="result">
              총 <span>999</span>개의 검색 결과가 있습니다
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="previous"></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="next"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResultModal',
}
</script>

<style></style>
