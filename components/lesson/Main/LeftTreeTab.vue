<template>
  <div id="myTabContent" class="tab-content">
    <!-- 탭 내용01 -->
    <div
      id="institute"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="grade-tab"
    >
      <MainTreeView
        ref="institution"
        :dataList="institutionData"
        :editable="identity == 'master' ? true : false"
        :identity="identity"
        :pidNum="0"
        :isHideDownload="isHideDownload"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @open-data="setOpenData"
        @update-data="$emit('update-data', $event)"
        @download-data="$emit('download-data', $emit)"
        @un-active="$emit('un-active')"
      />
    </div>
    <!-- /.탭 내용01 -->
    <!-- 탭 내용02 -->
    <div
      id="franchise"
      class="tab-pane fade"
      role="tabpanel"
      aria-labelledby="class-tab"
    >
      <MainTreeView
        ref="franchise"
        :dataList="franchiseData"
        :editable="identity == 'master' ? true : false"
        :identity="identity"
        :pidNum="1000"
        :isHideDownload="isHideDownload"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @open-data="setOpenData"
        @update-data="$emit('update-data', $event)"
        @download-data="$emit('download-data', $emit)"
      />
    </div>
    <!-- /.탭 내용02 -->
  </div>
</template>

<script>
import MainTreeView from '~/components/common/MainTreeView.vue'
export default {
  name: 'LeftTreeTab',
  components: {
    MainTreeView,
  },
  props: {
    institutionData: {
      type: Array,
      default: () => [],
    },
    franchiseData: {
      type: Array,
      default: () => [],
    },
    identity: {
      type: String,
      default: '',
    },
    isHideDownload: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    setOpenData(e) {
      this.$emit('open-data', e)
    },
  },
}
</script>

<style scoped>
#institute > .vtl {
  height: 349px;
}
#franchise > .vtl {
  height: 349px;
}
#mydata > .vtl {
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
