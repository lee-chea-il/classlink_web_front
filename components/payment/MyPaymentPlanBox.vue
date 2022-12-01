<template>
  <div class="tab-content depth03 ac_manage_pay">
    <div class="tab-pane active">
      <!-- [개발참조]구독중 서비스가 없을때  -->
      <div v-if="!paymentPlan.title" class="page_nodata">
        <p>
          현재 구독 중인 서비스가 없습니다.<br />
          서비스를 구독하여 사용해 보세요.
        </p>
        <p>
          <button class="btn btn_crud_point">내 카드 등록</button>
          <button class="btn btn_crud_point">서비스 구독</button>
        </p>
      </div>
      <div v-else>
        <div class="page_title">구독 중인 요금제</div>
        <div class="box_blue">
          <div class="title">
            중ㆍ소형 교육기관 <br />
            Basic
          </div>
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>기능</th>
                  <th>사용자 수</th>
                  <th>구독 갱신한 날짜</th>
                  <th>상태</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="check_circle"></span> 최대 학생 수 70명</td>
                  <td>12</td>
                  <td>2022.08.01</td>
                  <td>활성</td>
                  <td></td>
                </tr>
                <tr>
                  <td><span class="check_circle"></span> 자료실 용량 70GB</td>
                  <td></td>
                  <td><div class="font01">다음 갱신할 날짜</div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><span class="check_circle"></span> 선생님 추가 가능</td>
                  <td></td>
                  <td><div class="font02">2022.09.10</div></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span class="check_circle"></span> 프랜차이즈 확장 불가
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <button
              class="btn btn_crud_default unpay"
              type="button"
              data-toggle="modal"
              data-target="#modalCancleSub"
              data-dismiss="modal"
            >
              구독 취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyPaymentPlanBox',
  props: {
    paymentPlan: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped></style>
