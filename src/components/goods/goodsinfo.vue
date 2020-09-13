<template>
    <div>
    	<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swp :swiperList="lunbo" :isFull="false"></swp>
					</div>
				</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-header">
                {{infos.title}}
            </div>
			<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                            <span>{{infos.sell_price}}</span>
					     	<span>{{infos.market_price}}</span>
                        </p>
                        <p>
                            <!-- 获取子组件数据 -->
                            购买数量：<numbox @getCount="getCount" :max="infos.stock_quantity"></numbox>
                        </p>
                        <p>
                             <mt-button type="danger" size="small" @click="addGoods">加入购物车</mt-button> 
                            <mt-button type="primary" size="small" >立即购买</mt-button>
                                   
                        </p>
                    </div>
			</div>
		    
		</div>
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                            货号：{{infos.goods_no}}
                        </p>
                        <p>
                            库存：{{infos.stock_quantity}}件
                        </p>
                        <p>
                            上架时间：{{infos.add_time ?infos.add_time:Date.now()}}
                        </p>
					</div>
				</div>
		    	<div class="mui-card-footer">
                    <mt-button class="btn" type="primary" size="large" plain @click="toDetail(infos.id)">商品详情</mt-button>
                    <mt-button class="btn" type="danger" size="large" plain @click="toComment(infos.id)">商品评论</mt-button>         
                </div>
		</div>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
        >
            <div class="ball" v-show="isShow" ref="ball"></div> 
        </transition> 
    </div>
</template>
<script>
import numbox from '../subcomponents/goods_numbox.vue'
import swiper from '../subcomponents/swiper.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbo:[],
            infos:{},
            isShow:false,
            count:1
        }
    },
    components:{
        swp:swiper,
        numbox
    },
    created(){
        this.getLunbotu(),
        this.getinfo()
    },
    methods:{
        getLunbotu(){
            this.$http.get('detailListImg?id='+this.id).then(res=>{
                if(res.status === 200){
                    res.body.forEach(ele => {
                        ele.url = ele.src
                    });
                    this.lunbo = res.body
          
                }
            })
        },
        getinfo(){
            this.$http.get('phoneDetail?id='+this.id).then(res=>{
                if (res.status === 200) {
                    this.infos = res.body
      
                }
            })
        },
        toDetail(id){
            this.$router.push({name:'goodsDetail',params:{id}})
        },
        toComment(id){
            this.$router.push({name:'goodsComment',params:{id}})
        },
        // ball
        addGoods(){
            this.isShow = !this.isShow
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
            el.style.opacity = 0
        },
        enter(el,done){
            el.offsetWidth
            // box.getBoundingClientRect().top 与页面距离
            const balldis = this.$refs.ball.getBoundingClientRect()
            const cardis = document.getElementById('badge').getBoundingClientRect()
         
            const distop = cardis.top-balldis.top
            const disleft = cardis.left-balldis.left
            // es6模版语``
            el.style.transform = `translate(${disleft}px,${distop}px)`
            el.style.transition = "all 1s cubic-bezier(0,.68,.65,.21)"
            el.style.opacity = 1
            done()
        },
        afterEnter(){
            this.isShow = !this.isShow
        },
        // num-box
        getCount(num){
            this.count = num
        }
    }
}
</script>
<style lang="less" scoped>
  .mui-card-footer{
          display: block;
      .btn{
 
      margin: 10px 0;
     }
  }
  .ball{
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: rgb(218, 132, 132);
     position: absolute;
     left: 150px;
     top:400px;
     z-index: 1000;
  }
</style>