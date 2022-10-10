<template>
  <div class="default-layout">
    <Link rel="canonical" href="https://www.metaclasslink.com" />
		<Link rel="shortcut icon" href="../images/favicon.png" />
		<Link href="assets/css/base.css" rel="stylesheet" />
    <Link href="assets/css/common.css" rel="stylesheet" />
    <Script src="plugins/jquery/jquery-3.6.0.min.js"></Script>
    <Script src="plugins/bootstrap/bootstrap.bundle.min.js"></Script>
    <Script src="plugins/js/victor.js"></Script>

    <HeaderSection :title="titleTxt" />
    <div class="page_login">
      <LoginLeftSection />
      <LoginRightSection v-if="store.loginPageType=='login'"/>
      <LoginIdentity
        v-else-if="store.loginPageType == 'identity'"
        @identity-comp="setLoginIdentity"
      />
    </div>
    <FindIdModal />
    <FindPwModal />
  </div>
</template>

<script setup lang="ts">
  import { member } from "@/stores/Member"
  import HeaderSection from '@/components/HeaderSection.vue'
  import LoginLeftSection from '@/components/LoginLeftSection.vue'
  import LoginRightSection from '@/components/LoginRightSection.vue'
  import LoginIdentity from '@/components/LoginIdentity.vue'
  import FindIdModal from "@/components/modal/FindIdModal.vue"
  import FindPwModal from "@/components/modal/FindPwModal.vue"
  
  const store = member();

  const titleTxt='로그인';
  const setLoginIdentity = () => {
    //() => (signUpProcedure = 'signUp')
    console.log('set comp');
  }
</script>