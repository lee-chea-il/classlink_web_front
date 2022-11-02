<template>
  <!-- 자료등록01:자료의 6가지 구분 선택 (팝업 L) -->
  <div
    id="modalDataregi"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">자료 등록</h5>
          <button
            id="referenceSelectClose"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal_dataregi">
            <!-- 모달 내용 구분 class-->
            <div
              class="box01"
              type="button"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalDataregi02"
            >
              <span class="regi_icon01"></span>
              <div>동영상</div>
              <div>
                mp4, mp3, avi, mov, flv 등의 <br />
                동영상 파일을 업로드할 수 있습니다.
              </div>
            </div>

            <div
              class="box02"
              type="button"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalDataregi02"
            >
              <span class="regi_icon02"></span>
              <div>문서</div>
              <div>
                pdf, ppt, doc, xls, hwp, txt 등의 <br />
                문서 파일을 업로드할 수 있습니다.
              </div>
            </div>

            <div
              class="box03"
              type="button"
              data-dismiss="modal"
              data-toggle="modal"
              @click="$emit('add-quiz')"
            >
              <span class="regi_icon03"></span>
              <div>퀴즈</div>
              <div>
                OX 퀴즈, 단답형 퀴즈, <br />
                주관식 단답형 퀴즈를 만들 수 있습니다.
              </div>
            </div>

            <div
              class="box04"
              type="button"
              data-dismiss="modal"
              data-toggle="modal"
              @click="$emit('add-test')"
            >
              <span class="regi_icon04"></span>
              <div>쪽지시험</div>
              <div>5지선다형 시험 문제를 만들 수 있습니다.</div>
            </div>

            <div
              class="box05"
              type="button"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalDataregi03"
            >
              <span class="regi_icon05"></span>
              <div>유튜브</div>
              <div>
                유튜브 동영상 URL을 등록할 수 있습니다. <br />
                영상의 제목과 설명을 자동으로 가져옵니다.
              </div>
            </div>

            <div
              class="box06"
              type="button"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalDataregi03"
            >
              <span class="regi_icon06"></span>
              <div>URL</div>
              <div>
                웹사이트 주소를 등록할 수 있습니다. <br />
                사이트의 제목과 설명을 자동으로 가져옵니다.
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- <button class="btn btn_crud_point" data-dismiss="modal" data-toggle="modal" data-target="#modalDataregi02">확인</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferenceSelectModal',
}
</script>

<style></style>
