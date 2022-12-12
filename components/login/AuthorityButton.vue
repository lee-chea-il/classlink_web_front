<template>
  <div class="status_section">
    <div
      v-for="(item, idx) in authList"
      v-show="userPermission.includes(item.account)"
      :key="idx"
      class="status"
      aria-hidden
      @click="$emit('select-auth', idx)"
    >
      <i :class="item.className"></i>
      <div class="custom-control custom-radio">
        <input
          :id="item.idProps"
          type="radio"
          name="customRadio"
          class="custom-control-input"
          :checked="item.checked"
        />
        <label class="custom-control-label" :for="item.idProps">{{
          item.title
        }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorityButton',
  props: {
    authList: {
      type: Array,
      default: () => [],
    },
    userPermission: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
