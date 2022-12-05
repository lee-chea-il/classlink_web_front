<template>
  <div id="myTabContent" class="tab-content depth03 fran_myhome">
    <div
      id="home"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div class="myhome">
        <NuxtLink v-for="(item, idx) in linkData" :key="idx" :to="item.to">
          <button class="btn" :class="item.class" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassLinkManagerHome',
  layout: 'ClassLinkLayout',
  data() {
    return {
      linkData: [
        {
          id: 1,
          class: 'btn_favorite_fc',
          to: '/classLink/management/fcUsageStatus',
        },
        {
          id: 2,
          class: 'btn_favorite_edu',
          to: '/classLink/management/educationUsageStatus',
        },
        {
          id: 3,
          class: 'btn_favorite_pay',
          to: '/classLink/management/payment',
        },
        {
          id: 4,
          class: 'btn_favorite_notice_mint',
          to: '/classLink/management/notice',
        },
      ],
    }
  },
}
</script>

<style></style>
