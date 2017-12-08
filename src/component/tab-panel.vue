<template>
  <div class="vue-custom-tab-content">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: 'vue-custom-tab-panel',
  props: {
    label: String,
    disabled: Boolean,
    name: String
  }
}
</script>
