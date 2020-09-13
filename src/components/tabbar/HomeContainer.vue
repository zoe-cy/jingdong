<template>
    <div>
        <!-- 轮播图 -->
       <swp :swiperList="lubotuList" :isFull="true"></swp>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		         <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                     <router-link to="/home/newslist">
		                 <img src="../../images/menu1.png">
		                 <div class="mui-media-body">新闻资讯</div>
                     </router-link>
                 </li>
		         <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                     <router-link to="/home/photolist">
		                 <img src="../../images/menu2.png">
		                 <div class="mui-media-body">图片分享</div>
                     </router-link>
                 </li>
		         <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                      <router-link to="/home/goodslist">
		                 <img src="../../images/menu3.png">
		                 <div class="mui-media-body">商品购买</div>
                      </router-link>
                 </li>
		         <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                     <a href="#">
		                 <img src="../../images/menu4.png">
		                 <div class="mui-media-body">留言反馈</div>
                     </a>
                 </li>
		         <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                     <a href="#">
		                 <img src="../../images/menu5.png">
		                 <div class="mui-media-body">视频专区</div>
                     </a>
                 </li>
		         <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
                     <a href="#">
		                 <img src="../../images/menu6.png">
		                 <div class="mui-media-body">联系我们</div>
                     </a>
                 </li>
		    </ul>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            lubotuList:[]
        }
    },
    created(){
        this.getList()
     
    },
    components:{
        swp:swiper
    },
    methods:{
        getList() {
            // get arr from api
            this.$http.get("test").then(result=>{
                if(result.status === 200){
                    console.log(result.body)
                    this.lubotuList = result.body
                } else {
                    Toast('error')
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>


.mui-table-view.mui-grid-view.mui-grid-9{
    background-color: rgb(250, 250, 250);

    img{
        width: 50px;
    }
}
</style>