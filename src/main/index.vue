<template>
    <div class='set-content'>
        <mt-header fixed title="京东">
             <span slot="left" @click="reback" v-show="flag">
             <mt-button icon="back">返回</mt-button>
             </span>
        </mt-header>
        <transition name="my">
            <router-view></router-view>
        </transition>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-itemm" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-itemm" to="/menber">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-itemm" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-itemm" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
export default {
    data(){
        return {
            flag:true
        }
    },
    // while init
    created(){
        this.flag = this.$route.path === '/home'? false : true;
    },
    methods:{
        reback(){
            this.$router.go(-1)
        }
    },
    watch:{
        "$route.path":function(){
            this.flag = this.$route.path === '/home'? false : true           
        }
    }
}
</script>
<style scoped>
   .set-content{
       padding-top: 40px;
       padding-bottom: 40px;
   }
   .my-enter{
       opacity: 0;
       transform:translateX(100%)
   }
   .my-leave-to{
       opacity: 0;
       transform:translateX(-100%);
       /* content占位，离开时脱离定位不影响enter */
       position: absolute;
   }
   .my-enter-active,
   .my-leave-active{
       transition: all 1s ease;
   }
   /* 解决样式冲突 */
   .mui-bar-tab .mui-tab-itemm.mui-active {
    color: #007aff;
}
   .mui-bar-tab .mui-tab-itemm {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-itemm .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-itemm .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header.is-fixed,.mui-bar{
    z-index: 999;
}
</style>