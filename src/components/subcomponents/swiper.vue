<template>
     <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swiperList" :key="item.url">
                <!-- 自定义样式 :class-->
                <img :src="item.url" :class="{full:isFull}">
            </mt-swipe-item>
        </mt-swipe>
</template>
<script>
export default {
    // 传样式值 
    props:["swiperList","isFull"],

}
</script>
<style lang="less" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
        &:nth-child(1){
            background-color: rgb(223, 117, 117);
        }
        &:nth-child(2){
            background-color: rgb(91, 161, 91);
        }
        &:nth-child(3){
            background-color: rgb(93, 93, 189);
        }
        img{
            // width: 100%;
            height: 100%;
        }
    }
}

.full{
   width: 100%;
}
</style>