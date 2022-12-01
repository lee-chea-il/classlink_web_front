<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <NavBox />

      <div class="tab-content depth03 ac_manage_pay">
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <button class="btn btn_crud_default">한번에 인쇄</button>
            </div>
            <div class="right_area">
              <input
                type="text"
                placeholder=""
                class="form-control form-inline input_dates"
                value="22.01.01"
              />
              <button class="btn icons_calendar_off"></button> ~
              <input
                type="text"
                placeholder=""
                class="form-control form-inline input_dates"
                value="22.12.31"
              />
              <button class="btn icons_calendar_off"></button>
              <button class="btn btn_crud_default paymentDetail">검색</button>
              <button class="btn btn_crud_default paymentDetail">
                돌아가기
              </button>
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkAll"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chkAll"></label>
                    </div>
                  </th>
                  <th>청구서 번호</th>
                  <th>청구 날짜</th>
                  <th>기한</th>
                  <th>금액</th>
                  <th>영수증 인쇄</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chk01"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chk01"></label>
                    </div>
                  </td>
                  <td>2210382924458</td>
                  <td>2022.01.02</td>
                  <td>2022.02.02</td>
                  <td>11,900원</td>
                  <td>
                    <i class="icons_printer"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chk02"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chk02"></label>
                    </div>
                  </td>
                  <td>2210382924458</td>
                  <td>2022.01.02</td>
                  <td>2022.02.02</td>
                  <td>11,900원</td>
                  <td>
                    <i class="icons_printer"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.테이블 영역 -->
          <!-- 페이징 영역 -->
          <div class="pagination_section">
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
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="next"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- /.페이징 영역 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBox from '@/components/payment/NavBox.vue'
export default {
  name: 'PaymentHistory',
  components: {
    NavBox,
  },
}
</script>
<style scoped></style>
