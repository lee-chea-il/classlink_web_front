<template>
  <button @click="nextClickEvent" :class="btnAbled?'btn btn btn_crud_point':'btn btn btn_crud_point disabled'">{{title}}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title:{
      type:String,
      required:false,
      default:'다음'
    },
    btnAbled:{
      type:Boolean,
      required:false,
      default:false
    }
  },
  methods:{
    nextClickEvent(){
      this.$emit("nextBtn-click");
    }
  }
});
</script>

<style scoped>
</style>