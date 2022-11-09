<template>
  <div class="modal-footer">
    <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
    <button class="btn btn_crud_point">등록</button>
    <button
      id="close"
      class="btn btn_crud_default"
      data-dismiss="modal"
      @click="$emit('close')"
    >
      취소
    </button>
    <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
    <!-- 	<button class="btn btn_crud_point">완료</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
  </div>
</template>

<script>
export default {
  name: 'ModalBtnBox',
}
</script>

<style></style>
