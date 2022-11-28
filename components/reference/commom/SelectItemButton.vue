<template>
  <div
    :id="id"
    class="box01"
    data-dismiss="modal"
    data-toggle="modal"
    data-target="#modalDataRegiModi"
  >
    <label :for="inputId" class="label" @click.stop>
      <div class="sub">
        <form
          id="uploadForm"
          action="upload"
          method="post"
          enctype="multipart/form-data"
        >
          <input
            :id="inputId"
            type="file"
            :accept="accept"
            style="display: none"
            @click.stop
            @input="$emit('upload-item', $event)"
          />
          <div>{{ title }}</div>
          <div class="sub02">{{ desc }}</div>
        </form>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SelectItemButton',
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    inputId: {
      type: String,
      default: '',
    },
    accept: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
