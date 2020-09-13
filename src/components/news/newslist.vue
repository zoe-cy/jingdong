<template>
    	<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<router-link  :to="'/home/newslist/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h3>{{item.title}}</h3>	
					    <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat }}</span>
                            <span>点击：{{item.click}}</span>
                        </p>
					</div>
				</router-link>
			</li>
		
		</ul>
	
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            newslist: []
        }
    },
    created(){
        this.getlist()
    },
    methods:{
        getlist(){
            // $http获取数据
            this.$http.get('information').then(res=>{
                if(res.status === 200){
                    this.newslist = res.body
                } else {
                    Toast('err')
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
  .mui-ellipsis{
      display: flex;
      justify-content: space-between;
  }
</style>