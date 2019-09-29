
<template>
  <!--下拉筛选-->
  <div class="content_box1" v-clickOut="test">
    <div class="inputWrapper" @click.stop="showOptions = !showOptions">
      <input type="text" readonly placeholder="请选择内容" :value="selected" />
      <span class="iconfont icon-zhankaishangxia"></span>
    </div>
    <!--下拉-->
    <ul class="options" v-show="showOptions">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click.stop="choose(item.value)"
      >{{item.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "explame",
  data() {
    return {
      showOptions: false,
      selected: "",
      options: [{ value: "第一个" }, { value: "第二个" }],

      // 计算属性
      list:[{price:100,num:10,id:1},{price:101,num:11,id:2},{price:103,num:13,id:3},{price:104,num:14,id:4}],
      value1:100,
      value2:200
    }
  },
  props: {
    option: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    choose(value) {
      console.log("开始选择");
      this.showOptions = false;
      if (value !== this.selected) {
        this.selected = value;
      }
    },
    test() {
      console.log("关闭显示");
      this.showOptions = false;
    }
  },
    //计算属性
  computed:{
      getSum(){
        var sum = 0
        for(var item  of this.list){
          sum+=item.price * item.num;
        }
        // 总价
          return sum
      },
      changeData:{ 
          // getter
            get: function () {
                return this.value1 + ' ' + this.value2
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.value1 = names[0]
                this.value2 = names[names.length - 1]
            }
     }
    },
  directives: {
    clickOut: {
      bind: function(el, binding) {
        // el 绑定的元素
        function handler(e) {
          // e.target  // 点击的元素
          console.log("指令内容", e.target, el);
          // 判断当前元素是否包含该元素
          if (el.contains(e.target)) return false;
          if (binding.expression) {
            binding.value();
          }
        }

        let timer;
        el.handler = handler; // 给元素绑定方法
        document.addEventListener("click", () => {
           if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            el.handler;
          }, 300);
         
        });

        /**
         *  第一个参数是事件的类型 (如 “click” ).

            第二个参数是事件触发后调用的函数

            第三个参数是个布尔值。默认是false（冒泡阶段执行）true(捕获阶段产生)
         */
      },
      unbind: function(el) {
        document.removeEventListener("click", el.handler);
      }
    }
  },
  mounted() {
    let that = this;
    document.addEventListener("click", function() {
      that.showOptions = false;
    });
  },
  created() {
    //  获取计算属性的值·
    console.log(this.getSum ,this.changeData)
    // 设置计算属性的值
    this.changeData = '500 500'
    console.log()
  }
};
</script>