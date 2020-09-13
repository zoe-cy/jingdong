<template>
   <div>
       <p>this is app.vue</p>
        <button type="button"  class="mui-btn mui-icon mui-icon-home mui-right">
		    首页
		</button>
       <router-link to="/login">link to login</router-link>
       <router-view></router-view>
   </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            tip:''
        }
    },
    // 钩子函数created
    created(){
        this.getList()
    },
    methods:{
        getList(){
            this.show()
            setTimeout(()=>{
                this.tip.close()
            },3000)
        },
        show() {
            // return 删除
            this.tip = Toast({
                message:'the page is loading',
                position:'bottom',
                duration:-1,
                className:'mybutton'
            })
        }
    }
}
</script>
<style scoped>

</style>