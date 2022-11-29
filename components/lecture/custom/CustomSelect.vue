<template>
  <div>
    {{ title }}
    <div class="dropdown form-inline">
      <select
        :id="name"
        class="btn dropdown-toggle"
        :name="name"
        :data-target="target"
        :value="value"
        @input="$emit('change-input', $event)"
      >
        <option class="dropdown-item" value="5분">5분</option>
        <option class="dropdown-item" value="10분">10분</option>
        <option class="dropdown-item" value="15분">15분</option>
        <option class="dropdown-item" value="20분">20분</option>
        <option class="dropdown-item" value="25분">25분</option>
        <option class="dropdown-item" value="30분">30분</option>
        <option class="dropdown-item" value="35분">35분</option>
        <option class="dropdown-item" value="40분">40분</option>
        <option class="dropdown-item" value="45분">45분</option>
        <option class="dropdown-item" value="50분">50분</option>
        <option class="dropdown-item" value="55분">55분</option>
        <option class="dropdown-item" value="1시간">1시간</option>
        <option class="dropdown-item" value="2시간">2시간</option>
        <option class="dropdown-item" value="3시간">3시간</option>
        <option class="dropdown-item" value="4시간">4시간</option>
        <option class="dropdown-item" value="5시간">5시간</option>
        <option class="dropdown-item" value="6시간">6시간</option>
      </select>
    </div>
    {{ desc }}
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    title: { type: String, default: '' },
    desc: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: String, default: '' },
    target: { type: String, default: '' },
  },
}
</script>

<style></style>
