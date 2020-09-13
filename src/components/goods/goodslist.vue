<template>
    <div class="goodslist">
        
       <div class="goodsitem" v-for="item in list" :key="item.id"
          @click='getRouter(item.id)'>
           <img :src="item.img_url">
           <h3>{{item.title}}</h3>
           <div class="info">
               <p class='price'>
                   <span class='p1>'>{{sell_price}}</span>
                   <span class='p2>'>{{market_price}}</span>
               </p>
               <p class="num">
                   <span class='n1>'>热卖中</span>
                   <span class='n2>'>剩{{item.stock_quantity}}件</span>
               </p>
           </div>
       </div>
       <mt-button class="btn" type="primary" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pageIndex:1,
            list:[]
        }
    },
    created(){
        this.getList()
        
    },
    methods:{
        // 编程式导航
        getRouter(id){
            this.$router.push({name:"goods",params:{id}})
        },
        getList(){
            
            this.$http.get('phoneList?pageIndex='+this.pageIndex).then(res=>{
                if( res.status === 200){
                    this.list = this.list.concat(res.body)
                    console.log('goods',this.list)
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getList()
        }
    }
}
</script>
<style lang="less" scoped>
 .goodslist{
     display: flex;
     flex-wrap: wrap;
     .goodsitem{
         width: 48%;
         margin: 3px;
         padding: 2px;
         background: rgb(219, 216, 216);
         img {
             width: 99%;
         }
     }
 }
</style>