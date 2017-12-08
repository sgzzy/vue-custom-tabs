import Vue from 'vue'
import App from './App.vue'
import {Tabs, TabPane} from "element-ui";
Vue.use(Tabs);
Vue.use(TabPane);
new Vue({
  el: '#app',
  render: h => h(App)
})
