<template>
  <div>
    <div class="page_title">다음과 같이 결제를 진행할까요?</div>

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
              <th>구독료</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="check_circle"></span> 최대 학생 수 70명</td>
              <td>12</td>
              <td>2022.08.01</td>
              <td>₩750,000/월</td>
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
              <td><span class="check_circle"></span> 프랜차이즈 확장 불가</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="info_txt">
      <ul>
        <li>
          ㆍ정기 결제 요금제는 현재 사용 중인 결제 방법을 사용하여 자동으로
          갱신되며, 취소할 때까지 갱신 기간마다 요금이 청구되고 ‘구독 취소’를
          클릭하여 취소할 수 있습니다.
        </li>
        <li>
          ㆍ자동 갱신이 적용되기 전에 자동 갱신 전날까지 취소를 요청할 수
          있으며, 취소해도 결제한 기간 동안은 서비스를 이용하실 수 있습니다.
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmPaymentPlan',
}
</script>
<style scoped></style>
