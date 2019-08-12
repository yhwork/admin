<template>
  <div id="app">
      <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
   provide () {   // 父元素中定义  变量  子元素课以获取到  inject['reload']  可以获取到
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {

    reload () {
      // 重新加载
      // this.isRouterAlive = false
      this.$nextTick(function() {  //监听 dom树渲染   
        console.log('我又渲染了dom')
        //  this.isRouterAlive = true
      })
    }
  }
};
</script>
<style lang="scss">
  $bg:red;
  @import "./assets/css/main.css";
    #editor_s img{
      width: 100%;
  }
</style>
