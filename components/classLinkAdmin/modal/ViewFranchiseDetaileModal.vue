<template>
  <div
    id="modalViewDetail"
    class="modal fade ac_manage_std"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">상세보기</h5>
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
          <div class="view_box">
            <div class="row">
              <span class="title">기관 이름</span>
              <span class="col">{{ selectFranchise.name }}</span>
            </div>
            <div class="row">
              <span class="title">기관 연락처</span>
              <span class="col">{{ selectFranchise.phone }}</span>
            </div>
            <div class="row">
              <span class="title">기관 주소</span>
              <span class="col view_address">{{
                selectFranchise.address
              }}</span>
            </div>

            <div class="line"></div>

            <div class="row">
              <span class="title">기관장 이름</span>
              <span class="col">{{ selectFranchise.owner }}</span>
            </div>
            <div class="row">
              <span class="title">성별</span>
              <span class="col">{{
                selectFranchise.gender === 1 ? '남자' : '여자'
              }}</span>
            </div>
            <div class="row">
              <span class="title">기관장 ID</span>
              <span class="col">{{ selectFranchise.account }}</span>
            </div>
            <div class="row">
              <span class="title">이메일</span>
              <span class="col">{{ selectFranchise.email }}</span>
            </div>

            <div class="line"></div>

            <div class="row">
              <span class="title">가맹 날짜</span>
              <span class="col">{{ selectFranchise.createdAt }}</span>
            </div>

            <div class="row">
              <span class="title">상태</span>
              <span class="col">{{
                selectFranchise.status === 1 ? '활동' : '정지'
              }}</span>
            </div>

            <!-- <div class="row">
							<span class="title">지점 수</span>
							<span class="col">9,999</span>
						</div> -->

            <div class="row">
              <span class="title">학생 수</span>
              <span class="col">{{ selectFranchise.studentCnt }}</span>
            </div>

            <div class="row">
              <span class="title">선생님 수</span>
              <span class="col">{{ selectFranchise.teacherCnt }}</span>
            </div>
          </div>
          <!-- div class="view_box" -->
        </div>
        <!-- div class="modal-body" -->
        <div class="modal-footer">
          <button class="btn btn_crud_default">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewBuildingDetailModal',
  props: {
    selectFranchise: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
