<template>
  <ul id="myTab" class="nav nav-tabs" role="tablist">
    <li v-if="idType" class="nav-item" role="presentation">
      <button
        id="grade-tab"
        class="nav-link active"
        data-toggle="tab"
        data-target="#tab01"
        type="button"
        role="tab"
        aria-controls="home"
        aria-selected="true"
      >
        교육기관
      </button>
    </li>
    <li v-if="identity !== 'institution'" class="nav-item" role="presentation">
      <button
        id="class-tab"
        class="nav-link"
        data-toggle="tab"
        data-target="#tab02"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        프랜차이즈
      </button>
    </li>
    <li v-if="myType" class="nav-item" role="presentation">
      <button
        id="class-tab"
        class="nav-link"
        data-toggle="tab"
        data-target="#tab03"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        내자료
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SavePathHeader',
  props: {
    identity: { type: String, default: '' },
    idType: { type: Boolean, default: false },
    myType: { type: Boolean, default: false },
  },
}
</script>

<style></style>
