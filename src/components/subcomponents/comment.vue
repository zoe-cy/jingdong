<template>
    <div class="cmt">
        <hr>
        <h4>发表评论</h4>
        <textarea class="texta" placeholder="请输入内容" maxlength="120" v-model="cmt"></textarea>
        <mt-button class="btn" type="primary" size="large"  @click='sendCmt'>提交评论</mt-button>
        <div class="cmt-list" >
            <div class="cmt-info" v-for="(item, i) in contents" :key="item.user_name">
                <div class="cmt-title">
                    #{{i+1}}&nbsp;&nbsp;用户名：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat }}
                </div>
                <div class="cmt-body" >
                    {{item.content === '' ? '用户什么都没留下' : item.content}}
                </div>
            </div>
        </div>
        <mt-button class="btns" type="danger" size="large" plain @click="getMore">查看更多 </mt-button>       
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            contents:[],
            pageIndex: 1,
            cmt:''
        }
    },
    // 父子传值
    props:['id'],
    created(){
     
        this.getlist()
    },
    methods:{
        getlist(){
              this.$http.get('comments?pageIndex='+this.pageIndex).then(res=>{
                if( res.status === 200){
                    this.contents = this.contents.concat(res.body)
                    console.log('obj1',this.contents)
                } else {
                    Toast('这里空空如也')
                }
              })
        },
        getMore(){
            this.pageIndex++,
            this.getlist()
            
        },
        sendCmt(){
            if (this.cmt.trim().length === 0){
                return  Toast('评论不能为空')

            }
            else {
                this.$http.post('insert',{content:this.cmt.trim()})
                .then(res=>{
                  if( res.status === 200){
                    var msg = {
                        user_name:'佚名',
                        add_time: Date.now(),
                        content: this.cmt.trim()
                    }
                    this.contents.unshift(msg)
                    this.cmt = ''
                  } })
            } 
        }
    },
    
}
</script>
<style lang="less" scoped>
   .cmt{
       h4{
           margin: 20px 10px;
       }
      .texta{
          height: 200px;
          font-size: 14px;
      }
      .cmt-list{
          font-size: 14px;
          margin: 10px 0;
          div>div{
              line-height: 40px;
              padding: 0 10px;
              &.cmt-title{
                 background-color: rgba(202, 191, 191, 0.2); 
              }
          }
          
      }
   }
</style>