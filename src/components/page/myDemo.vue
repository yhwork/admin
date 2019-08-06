<template>
    <div>
            <div @click="demo">
                {{demo}}
            </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    name:'Demo',
    data(){
        return {
            demo:'121'
        }
    },
    methods:{
        demo(){
            console.log('方法')
            this.demo='好的'
        }
    }
}
</script>