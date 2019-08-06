<template>
  <div id="app">
    <div>
      <button size="primary" type="info" icon="plus" @click="getContent">获取内容</button>
      <UEditor :config="config" ref="ueditor"></UEditor>
    </div>
  </div>
</template>

<script>
import UEditor from "@/components/page/ueditor.vue";

export default {
  name: "hello",
  components: { UEditor },
  data() {
    return {
      config: {
        //可以在此处定义工具栏的内容
        // toolbars: [
        //  ['fullscreen', 'undo', 'redo','|','bold', 'italic', 'underline',
        //  '|','superscript','subscript','|', 'insertorderedlist', 'insertunorderedlist',
        //  '|','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify']
        // ],
        autoHeightEnabled: false,
        autoFloatEnabled: true,
        initialContent: "请输入内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        // autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        initialFrameWidth: null,
        initialFrameHeight: 450,
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/ueditor/"
      },
      addFormVisible: false,
      demo: ""
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    //获取文档内容
    getContent() {
      var that = this;
      // let content = this.$refs.ueditor.getUEContent();
      // alert(content);
      that
        .$axios({
          method: "get",
          url: "/store/menu/getMenuList"
          // headers: { Authorization: sessionStorage.getItem("Authorization") }
        })
        .then(res => {
          console.log(52356);
          setTimeout(() => {
            var ue = UE.getEditor("editor");
            console.log(ue);
            // editor准备好之后才可以使用
            ue.addListener("ready", function() {
              console.log("ready");
              //赋值
              ue.setContent("<p>要传入的值</p>");
            });
          }, 800);
        });
    }
  }
};
</script>
