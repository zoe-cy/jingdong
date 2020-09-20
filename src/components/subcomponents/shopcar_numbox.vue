<template>
    <div class="mui-numbox" data-numbox-min='1' >
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="num" @change="changes" readonly/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
    mounted(){
        // init
        mui(".mui-numbox").numbox()
     
    },
    props:['initcount','id'],
    methods:{
        // 数据传递后，box生效
        changes(){
            this.$store.commit('getCount',{id:this.id,count:this.$refs.num.value})
        }, 
    },

   
}
</script>
<style lang="less" scoped>

</style>