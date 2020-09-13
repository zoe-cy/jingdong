<template>
   <div>
       <h3>{{info.title}}1</h3>
       <hr>
       <p> 
           {{info.content}}
       </p>
   </div>
</template>
<script>

export default {
    data(){
        return {
             id:this.$route.params.id,
            info:{}
        }
    },
    created(){
        this.getinfo()
    },
    methods:{
        getinfo(){
            this.$http
            .get('goodsDetail?id='+this.id)
            .then(res=>{
                if(res.status === 200 ) {
                    this.info = res.body
                    console.log('444',this.info)
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>