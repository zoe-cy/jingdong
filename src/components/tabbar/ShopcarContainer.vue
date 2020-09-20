<template>
    <div class="shopcar-content">
        <div class="mui-card" v-for="(item,i) in infoslist" :key="item.id">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-switch
                       v-model="$store.getters.getSelected[item.id]"
                       @change="selectedChanges(item.id,$store.getters.getSelected[item.id])"></mt-switch>
                    <img :src="item.thumb_path">
                    <!-- <div class="cons"> -->
                        <p>{{item.title}}</p>
                        <p>
                            {{item.sell_price}}
                            <numbox :id="item.id" :initcount="$store.getters.getGoodsCount[item.id]"></numbox>
                            <a @click.prevent="deleteGoods(item.id,i)">删除</a>
                        </p>
                    <!-- </div>  -->
                </div>	
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div class="left-cons">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span class="auto">{{$store.getters.getSellInfos.count}}</span>
                            件，总价：<span class="auto">¥{{$store.getters.getSellInfos.price}}</span></p>
                    </div>
					<mt-button type="danger" size="small">去结算</mt-button>
                </div>	
			</div>
		</div>
    </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    data(){
        return {
           
            infoslist:[]
        }
    },
    created(){
        this.getList()
     
    },
    methods:{
        
        getList(){
            var ids = []
   
            this.$store.state.car.forEach(e => {
                ids.push(e.id)
            });
            
            if(ids.length<=0){
                return
            }

            this.$http.post('shoppingCarList',{ids:ids}).then(res=>{
                if(res.status === 200){
             
                    this.infoslist = res.body
                }
            })
        },
        deleteGoods(id,index){
            this.$store.commit("deleteCarGoods",id)
            this.infoslist.splice(index,1)
        },
        selectedChanges(id,val){
            this.$store.commit("selectedChanges",{id,selected:val})
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="less" scoped>
.shopcar-content{
    background-color: rgb(218, 216, 216,0.1);
    .mui-card-content-inner{
        display: flex;
        justify-content:space-between;
        .auto{
            color:red;
        }
    }
}
</style>