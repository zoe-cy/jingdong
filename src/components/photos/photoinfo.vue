<template>
    <div>
        <h3>{{info.title}}</h3>
        <p class="subtitle">
            <span>点击：{{info.click}}</span>
            <span>提交时间：{{info.add_time | dateFormat}}</span>
        </p>
        <hr>
          <div class="thumbs">
            <vue-preview :slides="thumbsList" class="imgPrev"></vue-preview>
          </div>
        <p>
            {{info.content}}
        </p>
        <cmt :id="id"></cmt>
    </div>
</template>
<script>
import Toast from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            info:[],
            thumbsList: [],
        }
    },
    components:{
        'cmt':comment
    },
    created(){
        this.getinfo()
        this.getprev()
    },
    methods:{
        getinfo(){
            this.$http.get('imgDetail?id='+this.id).then(res=>{
                if(res.status === 200){
                    this.info = res.body
                } else {
                    Toast('err')
                }
            })
        },
        getprev(){
            this.$http.get('detailListImg?id='+this.id).then(res=>{
                if(res.status === 200 ) {
                    res.body.forEach(item => {
                        item.h = 400;
                        item.w = 600;
                        item.src = item.src;  //大图
                        item.msrc = item.src;  //小图
                    });
                    this.thumbsList = res.body
                } else {
                    Toast('err')
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
  .subtitle{
      display: flex;
      justify-content: space-between;
  }
  img{
      margin: 10px;
      box-shadow: 1px 1px 5px #ecbfbf;
  }
</style>