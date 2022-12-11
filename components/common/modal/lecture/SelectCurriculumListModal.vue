<template>
  <div
    id="modalLectureRegi05"
    class="modal fade double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">커리큘럼 배정</h5>
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
          <div class="bar_sec">
            <div
              v-for="(item,index) in dataList"
              :key="`key_modal_${index}`"
              :idx="index"
              class="bar"
            >
              <div class="text">{{item.name}}</div>
              <span
                :id="`modalRemoveIdx_${index}`"
                class="minus"
                @click="removeData"
              ></span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- <button class="btn btn_crud_point">확인</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectCurriculumListModal',
  data(){
    return {
      dataList:[]
    }
  },
  methods:{
    setData(data){
      this.dataList=data
    },
    removeData(e){
      const idx=parseInt(e.target.id.split('_')[1])
      this.dataList.splice(idx,1)
    },
  }
}
</script>

<style></style>
