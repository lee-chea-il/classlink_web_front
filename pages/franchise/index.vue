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
  name: 'FranchiseMain',
  layout: 'FranchiseLayout',
  data() {
    return {
      linkData: [
        {
          id: 1,
          class: 'btn_favorite_notice',
          to: '/franchise/management/notice',
        },
        {
          id: 2,
          class: 'btn_favorite_franchise',
          to: '/franchise/management/affilate',
        },
        {
          id: 3,
          class: 'btn_favorite_pay',
          to: '/franchise/management/payment',
        },
        {
          id: 4,
          class: 'btn_favorite_class',
          to: '/franchise/class/reference',
        },
      ],
    }
  },
}
</script>

<style></style>
