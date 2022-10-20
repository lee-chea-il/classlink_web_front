import { defineStore } from "pinia";

export const member = defineStore("Member", () => {
  const myInfo = ref({});
  const loginPageType = ref("login");

  return { myInfo, loginPageType };
});
