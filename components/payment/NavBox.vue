<template>
  <ul class="nav nav-tabs depth03">
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/payment/editpaymentplan"
        :class="{ active: $route.fullPath.includes('/editpaymentplan') }"
      >
        현재 요금제 편집
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/payment/cardinfo"
        :class="{ active: $route.fullPath.includes('/cardinfo') }"
      >
        카드 정보
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/payment/paymenthistory"
        :class="{ active: $route.fullPath.includes('/paymenthistory') }"
      >
        결제내역
      </NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink
        class="nav-link"
        to="/management/payment/paymentplan"
        :class="{ active: $route.fullPath.includes('/paymentplan') }"
      >
        요금제
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CustomPageHeader',
  props: {
    title1: {
      type: String,
      default: '',
    },
    title2: {
      type: String,
      default: '',
    },
    title3: {
      type: String,
      default: '',
    },
    title4: {
      type: String,
      default: '',
    },
    url1: {
      type: String,
      default: '',
    },
    url2: {
      type: String,
      default: '',
    },
    url3: {
      type: String,
      default: '',
    },
    url4: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
