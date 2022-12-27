<template>
  <div :class="`divide_area ${directionType}`">
    <ul
      v-if="directionType==='left'"
      id="myTab"
      class="nav nav-tabs"
      role="tablist"
    >
      <CustomTabBtn
        idName="class"
        :isActive="true"
        dataTarget="franchise"
        ariaControls="profile"
        ariaSelected="false"
        tabName="프랜차이즈"
      />
      <button
        class="btn btn_crud_default btn_get"
        data-toggle="modal"
        data-target="#modalDataGet"
        @click="$emit('show-ins-to-fran-modal')"
      >+ 가져오기</button>
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
        dataTarget="franReal"
        ariaControls="home"
        ariaSelected="true"
        tabName="프랜 Real"
      />
    </ul>

    <div
      v-if="directionType==='left'"
      id="myTabContent"
      class="tab-content"
    >
      <div
        id="franchise"
        class="tab-pane fade show active"
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
    franchiseData: {
      type: Array,
      default: () => [],
    },
    curriculumData: {
      type: Array,
      default: () => [],
    },
    isUpdate: Boolean,
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
