<template>
  <div
    id="modalInstinfo01"
    class="modal fade modal_Instinfo01"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">
            프랜차이즈 정보 수정
          </h5>
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
          <div class="thumbnail_area">
            <button
              type="button"
              class="btn icons_camera_gray"
              data-toggle="modal"
              data-target="#modalInstinfo04"
              data-dismiss="modal"
            ></button>
            <i id="thumbnail"></i>
            <div class="edit_result">
              <button
                type="button"
                class="btn icons_camera"
                data-toggle="modal"
                data-target="#modalInstinfo02"
                data-dismiss="modal"
              ></button>
              <div class="outer2">
                <i class="icons_thumbnail"></i>
              </div>
            </div>
          </div>
          <div class="form_section">
            <form>
              <div class="form-group">
                <label for="form01">프랜차이즈 이름</label>
                <input
                  id="form01"
                  type="text"
                  placeholder="프랜차이즈 이름 입력"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="form02">연락처</label>
                <input
                  id="form02"
                  type="text"
                  placeholder="연락처 입력"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="form03">프랜차이즈 주소</label>
                <input
                  id="form03"
                  type="text"
                  placeholder="프랜차이즈 주소 입력"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="form03">프랜차이즈 설명</label>
                <input
                  id="form03"
                  type="text"
                  placeholder="프랜차이즈 설명 입력"
                  class="form-control"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">저장</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {name: 'UpdateFranInfoModal'}
</script>
<style scoped></style>
