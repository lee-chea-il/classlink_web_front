<template>
  <div :class="`divide_area ${directionType}`">
    <ul
      v-if="directionType==='left'"
      id="myTab"
      class="nav nav-tabs"
      role="tablist"
    >
      <CustomTabBtn
        idName="grade"
        :isActive="true"
        dataTarget="institute"
        ariaControls="home"
        ariaSelected="true"
        tabName="교육기관"
      />
      <CustomTabBtn
        idName="class"
        dataTarget="franchise"
        ariaControls="profile"
        ariaSelected="false"
        tabName="프랜차이즈"
      />
    </ul>
    <ul
      v-else
      id="myTab"
      class="nav nav-tabs"
      role="tablist"
    >
      <CustomTabBtn
        idName="grade"
        :isActive="true"
        dataTarget="mydata"
        ariaControls="home"
        ariaSelected="true"
        :tabName="rightListTitle"
      />
    </ul>

    <div
      v-if="directionType==='left'"
      id="myTabContent"
      class="tab-content"
    >
      <div
        id="institute"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="grade-tab"
      >
        <TreeView
          ref="institution"
          :dataList="institutionData"
          :editable="identity == 'master' ? true : false"
          :identity="identity"
          :pidNum="0"
          :isHideDownload="false"
          @un-active="$emit('un-active')"
          @update-data="$emit('update-data',$event,'institution')"
          @copyDataCallBack="$emit('copyDataCallBack',$event)"
        />
      </div>
      <div
        id="franchise"
        class="tab-pane fade"
        role="tabpanel"
        aria-labelledby="class-tab"
      >
        <TreeView
          ref="franchise"
          :dataList="franchiseData"
          :editable="identity == 'master' ? true : false"
          :identity="identity"
          :pidNum="1000"
          :isHideDownload="false"
          @un-active="$emit('un-active')"
          @update-data="$emit('update-data',$event,'franchise')"
          @copyDataCallBack="copyDataCallBack"
        />
      </div>
    </div>

    <div
      v-else
      id="myTabContent"
      class="tab-content"
    >
      <div
        id="mydata"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="grade-tab"
      >
        <TreeView
          ref="curriculum"
          :expanded="true"
          :dataList="curriculumData"
          identity="master"
          :pidNum="2000"
          :isHideDownload="false"
          :isUpdate="isUpdate"
          @un-active="$emit('un-active')"
          @update-data="$emit('update-data',$event,'curriculum')"
        />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import CustomTabBtn from '~/components/curriculum/custom/CustomTabBtn.vue'
import TreeView from '@/components/common/custom/CustomTreeView.vue'

export default {
  name: 'DivideSection',
  components: {
    CustomTabBtn,
    TreeView
  },
  props: {
    directionType:{
      type: String,
      default: 'left'
    },
    identity:{
      type: String,
      default: ''
    },
    institutionData: {
      type: Array,
      default: () => [],
    },
    franchiseData: {
      type: Array,
      default: () => [],
    },
    curriculumData: {
      type: Array,
      default: () => [],
    },
    isUpdate: Boolean,
    rightListTitle:{
      type: String,
      default: ''
    },
  },
  data(){
    return {
      
    }
  },
  methods:{
    unActive(){
      console.log('unActive')
    },
    copyDataCallBack(){

    }
  }
}
</script>

<style>
#institute > .vtl {
  height: 349px;
}
#franchise > .vtl {
  height: 349px;
}
#mydata > .vtl {
  height: 300px;
}
</style>
