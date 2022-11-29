<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMoreMemo"
      class="modal modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">메모</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="search_section">
              <div class="dropdown form-inline">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  최신 등록순
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">이름 오름차순</a>
                  <a class="dropdown-item" href="#">이름 내림차순</a>
                  <a class="dropdown-item" href="#">학년 오름차순</a>
                  <a class="dropdown-item" href="#">학년 내림차순</a>
                </div>
              </div>
              <button class="btn btn_crud_point">등록</button>
            </div>
            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <!-- <colgroup>
									<col width="10%">
									<col width="15%">
									<col width="15%">
									<col width="40%">
									<col width="10%">
									<col width="10%">
								</colgroup> -->
                  <thead>
                    <tr>
                      <th class="th01">번호</th>
                      <th class="th02">상담일자</th>
                      <th>면담/상담자</th>
                      <th class="th04">내용</th>
                      <th class="th05">수정/삭제</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <!-- <colgroup>
									<col width="10%">
									<col width="15%">
									<col width="15%">
									<col>
									<col width="10%">
								</colgroup> -->
                  <tbody>
                    <tr>
                      <td class="td01">1</td>
                      <td class="td02">2022.08.17 PM 09:00</td>
                      <td class="td03">홍길동</td>
                      <td class="memo td04">
                        <input
                          type="text"
                          placeholder="내용 입력"
                          class="form-control"
                        />
                      </td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>2022.08.17 PM 09:00</td>
                      <td>홍길동</td>
                      <td class="memo">금일 홍길동 학생 어머니와 면담 진행</td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>2022.08.17 PM 09:00</td>
                      <td>홍길동</td>
                      <td class="memo memo02">
                        금일 홍길동 학생 어머니와 면담 진행 금일 홍길동 학생
                        어머니와 면담 진행금일 홍길동 학생 어머니와 면담
                        진행금일 홍길동 학생 어머니와 면담 진행금일 홍길동 학생
                        어머니와 면담 진행금일 홍길동 학생 어머니와 면담
                        진행금일 홍길동 학생 어머니와 면담 진행
                      </td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  </Transition>
</template>
<script>
export default {
  name: 'StudentMemoModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.modal-index {
  z-index: 999;
}
</style>
