<template>
  <li class="nav-item" role="presentation">
    <button
      :id="`${idName}-tab`"
      :class="activeClass()"
      data-toggle="tab"
      :data-target="`#${dataTarget}`"
      type="button"
      role="tab"
      :aria-controls="ariaControls"
      :aria-selected="ariaSelected"
    >
      <span
        :class="iconClass()"
      ></span>
      {{tabName}}
    </button>
  </li>
</template>

<script>
export default {
  name: 'CustomTabBtn',
  props: {
    idName: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    dataTarget: {
      type: String,
      default: 'institute'
    },
    ariaControls: {
      type: String,
      default: ''
    },
    ariaSelected: {
      type: String,
      default: ''
    },
    tabName: {
      type: String,
      default: ''
    },
  },
  methods:{
    activeClass(){
      return this.isActive?'nav-link active':'nav-link'
    },
    iconClass(){
      if(this.dataTarget==='institute'){
        return 'icon_institute'
      }else if(this.dataTarget==='franchise'){
        return 'icon_fran'
      }else if(this.dataTarget==='franReal'){
        return 'icon_franReal'
      }else if(this.dataTarget==='mydata'){
        return 'icon_mydata'
      }else{
        return ''
      }
    }
  }
}
</script>

<style></style>
