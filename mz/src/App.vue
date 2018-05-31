<template>
  <div id="app">
    <Myheader/>
    <router-view/>
  </div>
</template>

<script>
  import Myheader from '@/components/container/header/Myheader'
export default {
  name: 'App',
  components:{
    Myheader
  }
}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50/$sc+rem;
}
</style>
