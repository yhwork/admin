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
  .font_size{
    overflow: hidden;
    text-overflow: ellipsis;
    // display:-webkit-box; //作为弹性伸缩盒子模型显示。
    // -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp:1; //显示的行
    white-space:nowrap;   // 不换行
  }
</style>
