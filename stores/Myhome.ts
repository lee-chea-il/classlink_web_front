import { defineStore } from 'pinia';
import axios from "axios"

export const myHome = defineStore('MyHome', () => {
  const pageType = ref('main');
  const myDatas = ref([
    ["국어", "윤동주", "id13",''],
    ["수학", "id22"],
  ]);
  
  return { pageType, myDatas }
})