<template>
  <div>
    결제
    <form
      id="frmApprove"
      name="frmApprove"
      method="post"
      action="https://api.allthatpay.kr/alltalkpay.do"
    >
      <table style="width: 100%">
        <tr>
          <td valign="top">
            <table id="requestApprove" class="table">
              <tr>
                <th colspan="2" class="title">결제 요청 정보</th>
              </tr>
              <tr>
                <th>포스번호 *별도전달</th>
                <td>
                  <input
                    id="req_posNo"
                    type="text"
                    name="req_posNo"
                    value="000"
                  />
                </td>
              </tr>
              <tr>
                <th>사업자번호</th>
                <td>
                  <input
                    id="req_busiNo"
                    type="text"
                    name="req_busiNo"
                    value="4528801339"
                  />
                </td>
              </tr>
              <tr>
                <th>TID</th>
                <td><input type="text" name="req_trmlId" value="2389746" /></td>
              </tr>
              <tr>
                <th>상품명</th>
                <td>
                  <input type="text" name="req_productNm" value="7월수강료" />
                </td>
              </tr>
              <tr>
                <th>할부</th>
                <td><input type="text" name="req_install" value="00" /></td>
              </tr>
              <tr>
                <th>무이자여부</th>
                <td>
                  <select name="req_nointYn">
                    <option value="Y" selected>무이자</option>
                    <option value="N">유이자</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>상품금액</th>
                <td><input type="text" name="req_tranAmt" value="1000" /></td>
              </tr>
              <tr>
                <th>부가세</th>
                <td><input type="text" name="req_taxAmt" value="0" /></td>
              </tr>
              <tr>
                <th>봉사료</th>
                <td><input type="text" name="req_svcAmt" value="0" /></td>
              </tr>
              <tr>
                <th>사용자 추가 키</th>
                <td><input type="text" name="req_usrAddKey" value="" /></td>
              </tr>
              <tr>
                <th>사용자 추가 키1</th>
                <td><input type="text" name="req_usrAddKey1" value="" /></td>
              </tr>
              <tr>
                <th>사용자 추가 키2</th>
                <td><input type="text" name="req_usrAddKey2" value="" /></td>
              </tr>
              <tr>
                <th>사용자 추가 키3</th>
                <td><input type="text" name="req_usrAddKey3" value="" /></td>
              </tr>
              <tr>
                <th>사용자 추가 키4</th>
                <td><input type="text" name="req_usrAddKey4" value="" /></td>
              </tr>
              <tr>
                <th>사용자 추가 키5</th>
                <td><input type="text" name="req_usrAddKey5" value="" /></td>
              </tr>
              <tr>
                <th>사용자 추가 키6</th>
                <td><input type="text" name="req_usrAddKey6" value="" /></td>
              </tr>
              <tr>
                <th>사용자 추가 키7</th>
                <td><input type="text" name="req_usrAddKey7" value="" /></td>
              </tr>
              <tr>
                <th>결과 전송 URL</th>
                <td>
                  <input
                    type="text"
                    name="req_sendUrl"
                    value="http://api.allthatpay.kr/test.do"
                  />
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td><input type="submit" value="결제요청" /></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Payment',
}
</script>
<style scoped>
textarea {
  width: 300px;
  height: 80px;
}
.price {
  text-align: right;
  width: 80px;
}
.etc {
  width: 300px !important;
}
.table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
.table td,
th {
  padding: 5pt;
  border: 1px solid #cccccc;
  height: 20px;
  font-size: 9pt;
  color: #5a5a5a;
}
.table th {
  background-color: #f9f9f9;
  text-align: left;
  width: 130px;
}
.table .title {
  font-size: 11pt;
  color: #000000;
  text-align: center;
}
input[type='text'] {
  border: solid 1px #cccccc;
  width: 220px;
  font-size: 10pt;
}
input[name='_goods'],
input[name='_cardym'],
input[name='_cardalias'] {
  width: 210px;
}
input[name='_orderno'] {
  width: 220px;
}
input[name='_enckey'],
input[name='_encitem'] {
  width: 200px;
}
</style>
