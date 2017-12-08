<template>
  <div class="vue-tab-nav">
    <ul>
      <li v-for="(item, index) in labels" :key="item.name" class="curName === item.name ? 'active' : ''">
        <a href="javascript;" @click="handleClick(item.name, $event)">{{item.label}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "vue-cunstom-tab-nav",
  props: {
    labels: Array
  },
  data: function() {
    return {
      curName: labels[0].name,
    }
  },
  methods: {
    handleClick: function(name, event) {
      this.curName = name;
    }
  }
}
</script>
