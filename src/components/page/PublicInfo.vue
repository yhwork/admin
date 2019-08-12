<template>
    <div class="content_box1">欢迎使用小豆包管理系统(*^▽^*)</div>
</template>

<script>
export default {
     name:'public_info',
    data(){
        return {

        }
    },
    mounted(){
        // 判断浏览器是否支持pushState
        if (window.history && window.history.pushState) {
            history.pushState(null, null, document.URL);
            window.addEventListener('popstate', this.goBack, false);
        }
    },
    destroyed(){
        window.removeEventListener('popstate', this.goBack, false); 
    },
    methods: {
        // 禁止后退
    goBack(){
        // 转一圈再回来-增加栈数量
        // console.log(this.$route)
        // alert('浏览器后退啦')
        // this.$router.push('/')
         this.$router.push({
                    name: '/'
                }, () => {
                    this.$router.push({name: 'public_info'})
                })
        this.$router.replace({path:this.$route.path})
    },
    },
}
</script>

