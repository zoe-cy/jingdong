<template>
    <div class="mui-numbox" data-numbox-min='1' >
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" ref="num" @change="changes" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
    mounted(){
        // init
        mui(".mui-numbox").numbox()
        console.log("max",this.max)
    },
    methods:{
        // 数据传递后，box生效
        changes(){
            this.$emit("getCount",parseInt(this.$refs.num.value))
        }, 
    },
    props:["max"],
    watch:{
            // 监听属性
            max:function(newVal,oldVal){
                mui(".mui-numbox")
                 .numbox()
                 .setOption("max",newVal)
            }
    },
   
}
</script>
<style lang="less" scoped>

</style>