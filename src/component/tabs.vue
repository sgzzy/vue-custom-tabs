<template>
  <div class="vue-custom-tab">
    <div class="vue-tab-nav">
      <ul>
        <li v-for="(item, index) in panes" :key="item.name" class="curName === item.name ? 'active' : ''">
          <a @click="handleClick(item, item.name)">{{item.label}}</a>
        </li>
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
      panes: [],
      nav: []
    };
  },
  beforeUpdate() {
    console.info(1);
  },
  watch: {
    // 外部切换选项卡的途径
    activeName: function(value) {
      this.setCurName(value);
    }
  },
  methods: {
    // 选项卡切换
    setCurName: function(value) {
      this.curName = value;
    },
    handleClick: function(tab, tabName) {
      this.setCurName(tabName);
    },
    // 利用this.$parent添加选项信息
    addPanes: function(item) {
      var index = this.$slots.default
        .filter(function(item) {
          return (
            item.elm.nodeType === 1 &&
            /\bvue-custom-tab-content\b/.test(item.elm.className)
          );
        })
        .indexOf(item.$vnode);
      this.panes.splice(index, 0, item);
    }
  }
};
</script>
<style scoped>
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
</style>

