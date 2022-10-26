<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>신분 유형</h2>
      </div>
      <div class="status_section">
        <div class="status">
          <i class="btn_status_head"></i>
          <div class="custom-control custom-radio">
            <input
              id="radio01"
              type="radio"
              name="customRadio"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="radio01">교육기관장</label>
          </div>
        </div>
        <div class="status">
          <i class="btn_status_franchise_director"></i>
          <div class="custom-control custom-radio">
            <input
              id="radio02"
              type="radio"
              name="customRadio"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="radio02"
              >프랜차이즈장</label
            >
          </div>
        </div>
        <div class="status">
          <i class="btn_status_teacher"></i>
          <div class="custom-control custom-radio">
            <input
              id="radio03"
              type="radio"
              name="customRadio"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="radio03">선생님</label>
          </div>
        </div>
        <div class="status">
          <i class="btn_status_franchise_administrator"></i>
          <div class="custom-control custom-radio">
            <input
              id="radio04"
              type="radio"
              name="customRadio"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="radio04"
              >프랜차이즈 관리자</label
            >
          </div>
        </div>
      </div>
      <!-- [개발참조]:class="disabled"제거시 활성 -->
      <button class="btn btn btn_crud_point disabled">다음</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIdentity',
}
</script>

<style scoped></style>
