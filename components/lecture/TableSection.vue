<template>
  <div class="table_section">
    <table class="table">
      <colgroup>
        <col />
        <col />
        <col />
        <col width="120" />
        <col />
        <col width="120" />
        <col width="120" />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>
            <div class="custom-control custom-checkbox form-inline">
              <input id="chkAll" type="checkbox" class="custom-control-input" />
              <label class="custom-control-label" for="chkAll"></label>
            </div>
          </th>
          <th>개설 날짜</th>
          <th>강좌</th>
          <th>정담임/부담임</th>
          <th>반</th>
          <th>커리큘럼</th>
          <th>수업시간</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="custom-control custom-checkbox form-inline">
              <input id="chk01" type="checkbox" class="custom-control-input" />
              <label class="custom-control-label" for="chk01"></label>
            </div>
          </td>
          <td>2022.07.10</td>
          <td>영어 심화 1</td>
          <td>홍길동/김지원</td>
          <td>1-1A</td>
          <td>
            <div class="lec_curi">
              영어 심화1A <br />
              리딩 교재 리딩 교재 리딩 교재 리딩 교재 리딩 교재
            </div>
          </td>
          <td>
            <div class="lec_time">
              화, 목, 금 <br />
              13~15시 13~15시 13~15시
            </div>
          </td>
          <td>
            <i
              class="btn icons_pencil_off"
              data-toggle="modal"
              data-target="#modalLectureRegi"
            ></i>
          </td>
          <td>
            <i class="icons_x_circle_off"></i>
          </td>
        </tr>
        <tr>
          <td>
            <div class="custom-control custom-checkbox form-inline">
              <input id="chk02" type="checkbox" class="custom-control-input" />
              <label class="custom-control-label" for="chk02"></label>
            </div>
          </td>
          <td>2022.07.10</td>
          <td>영어 심화 1</td>
          <td>홍길동/김지원</td>
          <td>1-1A</td>
          <td>
            <div class="lec_curi">
              영어 심화1A <br />
              리딩 교재 리딩 교재 리딩 교재
            </div>
          </td>
          <td>
            <div class="lec_time">
              화, 목, 금 <br />
              13~15시 13~15시 13~15시
            </div>
          </td>
          <td>
            <i
              class="btn icons_pencil_off"
              data-toggle="modal"
              data-target="#modalLectureRegi"
            ></i>
          </td>
          <td>
            <i class="icons_x_circle_off"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableSection',
}
</script>

<style></style>
