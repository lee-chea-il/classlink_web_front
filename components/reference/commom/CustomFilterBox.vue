<template>
  <div class="filter_name">
    <div class="custom-control custom-checkbox form-inline">
      <input
        :id="id"
        :name="name"
        type="checkbox"
        :data-value="label"
        class="custom-control-input"
        :checked="allCheck ? listItem.length === 0 : listItem.includes(label)"
        @input="$emit('click-item', $event)"
      />
      <label class="custom-control-label" :for="id">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFilterBox',
  props: {
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    listItem: {
      type: Array,
      default: () => [],
    },
    allCheck: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>

matchFilterArrayName(name){ if(name==='type') return 'typeList' else
if(name==='subject') return 'subjectList' else return 'categoryList' }, else if
( result[name].length === this[this.matchFilterArrayName(name)].length ) return
(result[name] = []) (result[name] = [...result[name], dataset.value])
