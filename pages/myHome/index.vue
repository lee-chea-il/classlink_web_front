<template>
  <div>
    <Link rel="stylesheet" href="assets/css/myhome.css" />

    <MyHomeHeaderSection />
    <MyHomeDefault v-if="pageType == 'main'" />
    <MyHomeDataroom v-else-if="pageType == 'dataroom'" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { myHome } from "@/stores/Myhome";
import MyHomeHeaderSection from "@/components/common/MyHomeHeaderSection.vue";
import MyHomeDefault from "@/components/MyHomeDefault.vue";
import MyHomeDataroom from "@/components/MyHomeDataroom.vue";

const myHomeStore = myHome();
const { pageType } = storeToRefs(myHomeStore);
/*watch(pageType, () => {
    listData.value = pageType.value;
  })*/
</script>
