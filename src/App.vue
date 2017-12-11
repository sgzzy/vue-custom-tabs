<template>
  <div>
     <vue-tabs :activeName="activeName" @tab-click="handleClick">
    <vue-tab-panel label="用户管理" name="first">用户管理</vue-tab-panel>
    <vue-tab-panel label="配置管理" name="second">配置管理</vue-tab-panel>
    <vue-tab-panel label="角色管理" name="third">角色管理</vue-tab-panel>
    <vue-tab-panel label="定时任务补偿" name="fourth">定时任务补偿</vue-tab-panel>
  </vue-tabs>
  </div>
</template>

<script>
import VueTabs from "./component/tabs";
import VueTabPanel from "./component/tab-panel";

export default {
  name: "app",
  components: {VueTabs, VueTabPanel},
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    // 选项点击事件函数tab-click
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>

</style>
