<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{},
  components: {}
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
body,html{
  height: 100%;
  /*background: #cac6c6;*/
}
#app {
  height: 100%;
}
</style>
