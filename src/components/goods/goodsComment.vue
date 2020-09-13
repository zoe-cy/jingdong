<template>
    <cmt :id="id"></cmt>
</template>
<script>
import cmt from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        cmt
    }
}
</script>
<style lang="less" scoped>

</style>