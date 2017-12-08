<template>
  <div class="vue-custom-tab">
    <div class="vue-tab-nav">
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="vue-tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "vue-custom-tab",
  props: {
    activeName: String
  },
  data: function() {
    return {
      curName: this.activeName,
      panes: []
    };
  },
  watch: {
    activeName: function(value) {
      this.setCurName(value);
    }
  },
  methods: {
    setCurName: function(value) {
      this.curName = value;
    },
    handleClick: function(tab, tabName, event) {
      if(tab.disabled) return;
      this.setCurName(tabName);
      this.$emit('tab-click', tab, event);
    }
  }
};
</script>
