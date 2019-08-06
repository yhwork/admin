<template>
  <div class="header_box">
    <div class="title_box">
        <i class="el-icon-warning"></i>
        <span>帮助中心</span>    
    </div>
  </div>
</template>

<script>
export default {
  name: "help_center",
  data() {
    return {};
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style  scoped>
.header_box {
  width: 10%;
  display: block;
  position: absolute;
  right: 0;
  top: 80px;
  bottom: 0;
  overflow-y: scroll;
  border-left: 1px solid #ddd;
}
.title_box{
    height: 40px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
}
.el-icon-warning{
    margin:0 10px ;
    color: #ddd;
}
</style>

