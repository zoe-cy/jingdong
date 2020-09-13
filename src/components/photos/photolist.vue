<template>
  <div>
    <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
                        <!-- 默认id-0 active -->
						<a :class="['mui-control-item',item.id === 0 ? 'mui-active' : '']"  
                        v-for="item in tabs" :key="item.id+100"  @click="getInfo(item.id)"
                        data-wid="tab-top-subpage-1.html">
							{{item.title}}
						</a>
						
					</div>
				</div>
                
	</div>
    <ul class="photo-list">
         <router-link :to="'/home/photoinfo/'+item.id" v-for="item in list" :key='item.id' tag="li">
            <img v-lazy="item.img_url">
            <div class="info"> 
                <h3>{{item.title}}</h3>
                <p>{{item.zhaiyao}}</p>
            </div>
         </router-link>
    </ul>
  </div>
</template>
<script>
  // mui.js与webpack打包时的严格模式冲突
    // transform-remove-strict-mode 禁用严格模式

// 初始化scroll
import mui from '../../lib/mui/js/mui.min.js'

import Toast from 'mint-ui'
export default {
    data(){
        return {
            tabs:[],
            list:[]
        }
    },
    methods:{
       getTabs(){
           this.$http.get('typeList').then(res=>{
             if(res.status === 200){
                 res.body.unshift({title:"全部",id:0})
                 this.tabs = res.body
             } else {
                 Toast('err')
             }
          })
       },
       getInfo(id){
             this.$http.get('detailList?id='+id).then(res=>{
             if(res.status === 200){
                 this.list = res.body
             } else {
                 Toast('err')
             }
         })
       }
    },
    created(){
         this.getTabs()
        //  默认 quanbu
         this.getInfo(0)
    },
    mounted(){
      mui(".mui-scroll-wrapper").scroll({
          deceleration: 0.0005
      });
  }
}
</script>
<style lang="less" scoped>
//   chrome 滑动
 * {
     touch-action:pan-y;
    }
.photo-list {
    padding: 0;
    
   li{
       list-style: none;
      text-align: center;
     image[lazy=loading] {
       width: 40px;
       height: 300px;   
       margin: auto;
    }
    img{
        width: 95%;
        height: 100px;
        box-shadow: 1px 1px 1px #d38585;
    }
    .photo-info {
        position: absolute;
        bottom: 10px;
        h3{
            color: #000;
        }
    }
   }
}
</style>