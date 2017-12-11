<template>
  <div class="vue-custom-tab-content" :class="this.$parent.curName === name ? 'show' : 'hide'">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vue-custom-tab-panel',
  props: {
    label: String,
    name: String
  },
  mounted() {
    this.$parent.addPanes(this);
  }
}
</script>
