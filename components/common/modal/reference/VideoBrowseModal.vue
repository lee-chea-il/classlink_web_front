<template>
  <div
    id="modalDataRead"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">자료 열람</h5>
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
          <!-- [개발참조] 동영상 자료 열람 시 -->
          <!-- <div class="video"></div> -->
          <!-- [개발참조] 문서자료 열람 시 -->
          <div class="pdf">
            <div class="bar">
              <span class="pdf_title"
                >자연수의 혼합 계산 교재1.pdf 자연수의 혼합 계산 교재1.pdf
                자연수의 혼합 계산 교재1.pdf 자연수의 혼합 계산 교재1.pdf</span
              >
              <span class="list"></span>
              <span class="full"></span>
            </div>
          </div>
          <div class="btnsec">
            <button
              class="btn btn_crud_default"
              data-toggle="modal"
              data-target="#modalStoragepath"
            >
              이동
            </button>
            <button
              class="btn btn_crud_default"
              data-toggle="modal"
              data-target="#modalDataShare01"
            >
              공유
            </button>
            <button class="btn btn_crud_default">다운로드</button>
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalDataRegiModi"
            >
              수정
            </button>
            <button
              class="btn btn_crud_default"
              data-toggle="modal"
              data-target="#modalDataDelete"
            >
              삭제
            </button>
          </div>

          <!-- [개발참조] 하단 info_section 부분은 열람 팝업 공통 -->
          <div class="info_section">
            <div class="cont">
              <span class="title">파일 이름</span>
              <span>등록한 자료 이름</span>
            </div>
            <div class="cont">
              <div class="title">설명</div>
              <span>등록한 설명</span>
            </div>
            <div class="line"></div>

            <div class="cont02">
              <div class="title">자료 구분</div>
              <span class="title03-1">프랜차이즈</span>
            </div>
            <div class="cont02">
              <div class="title">콘텐츠 유형</div>
              <span class="title04-1">동영상</span>
            </div>
            <div class="cont02">
              <div class="title">공개 여부</div>
              <span class="title05-1">ON</span>
            </div>
            <div class="cont02">
              <div class="title">과목</div>
              <span class="title06-1">수학</span>
            </div>
            <div class="cont02">
              <div class="title">경로</div>
              <span class="title07-1">저장 경로가 입력되는 공간입니다.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoBrowseModal',
}
</script>

<style></style>
