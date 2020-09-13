<template>
    <div class="info-container">
        <h3>essay{{info.id}}--{{info.title}}</h3>
        <p>
           <span>发布时间：{{info.add_time | dateFormat}}</span>
           <span>查看次数：{{info.click}}</span>
        </p>
        <hr>
        <p v-text="info.zhaiyao"></p>
        <!-- 引用 comment 父子传值 :id-->
        <cmt :id="id"></cmt>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
     components:{
        "cmt":comment
    },
    data(){
        return {
            // 定义方便调用
            id:this.$route.params.id,
            // 根据id调数据
            info:{}
        }
    },
    created(){
        this.getinfo()
    },
   
    methods:{
        getinfo(){
            // url relative ,if / mean root!!!!!
            this.$http.get('detail?id='+this.id).then(res=>{
                if(res.status === 200){
                    this.info = res.body
                } else {
                    Toast('err')
                }
            })
        }
    }
}
</script>
<style scoped>

</style>