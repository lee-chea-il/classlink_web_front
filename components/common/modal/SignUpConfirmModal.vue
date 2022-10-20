<template>
  <div class="modal fade modal_login" :id="modalData.id" tabindex="-1" :aria-labelledby="modalData.id" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="modalData.id">{{modalData.title}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="pretxt_area">{{modalData.txt}}</div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
	import { defineComponent } from 'vue';
	
	export default defineComponent({
	  props:{
      modalData:{
        type:Object,
        required:true
      }
    }
	});
	</script>

<style scoped>

</style>
