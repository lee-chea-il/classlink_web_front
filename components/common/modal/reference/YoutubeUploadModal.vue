<template>
  <div
    id="modalDataregi03"
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
            <!-- 유튜브일 경우 -->
            <div class="box01">
              <div class="title">유튜브 동영상 주소(URL)를 입력해 주세요</div>
              <form
                id="uploadForm"
                action="upload"
                method="post"
                enctype="multipart/form-data"
              >
                <!-- <input
                  id="file"
                  type="file"
                  name="file"
                  style="display: none"
                /> -->
                <input
                  id="input00"
                  type="text"
                  class="form-control form-inline"
                  name="youtube"
                  :value="urlData.youtube"
                  placeholder="URL 입력"
                  @change="$emit('change-url', $event)"
                />
                <div
                  class="btn btn_crud_default"
                  @click="$emit('upload-youtube')"
                >
                  등록
                </div>
                <div
                  id="youtube_btn"
                  class="btn btn_crud_default"
                  data-toggle="modal"
                  data-target="#modalDataRegiModi"
                  data-dismiss="modal"
                  style="display: none"
                ></div>
                <!-- [개발참조] url 입력하지 않고 버튼 클릭 시 URL 입력 팝업창 노출 
								<div class="btn btn_crud_default" data-toggle="modal" data-target="#modalDataregi04" data-dismiss="modal">등록</div>
								-->
              </form>
              <div class="sub">
                유튜브 동영상 주소(URL)를 입력하여 등록할 수 있습니다. <br />
                youtu.be 또는 youtube.com으로 시작하는 URL만 등록 가능
              </div>
            </div>
            <!-- /.유튜브일 경우 -->
            <!-- URL의 경우 -->
            <div class="box01">
              <div class="title">URL을 입력해 주세요</div>
              <form
                id="uploadForm"
                action="upload"
                method="post"
                enctype="multipart/form-data"
              >
                <!-- <input
                  id="file"
                  type="file"
                  name="file"
                  style="display: none"
                /> -->
                <input
                  id="input00"
                  type="text"
                  class="form-control form-inline"
                  name="page"
                  :value="urlData.page"
                  placeholder="URL 입력"
                  @change="$emit('change-url', $event)"
                />
                <div
                  class="btn btn_crud_default"
                  data-toggle="modal"
                  data-target="#modalDataRegiModi"
                  data-dismiss="modal"
                  @click="$emit('upload-page')"
                >
                  등록
                </div>
                <!-- [개발참조] url 입력하지 않고 버튼 클릭 시 URL 입력 팝업창 노출 
								<div class="btn btn_crud_default" data-toggle="modal" data-target="#modalDataregi04" data-dismiss="modal">등록</div>
								-->
              </form>
              <div class="sub">URL을 입력하여 등록할 수 있습니다.</div>
            </div>
            <!-- /.URL의 경우 -->
          </div>
        </div>
        <div class="modal-footer">
          <!-- <button class="btn btn_crud_point">확인</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubeUploadModal',
  props: {
    urlData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
