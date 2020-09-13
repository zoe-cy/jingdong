import VueRouter from 'vue-router'

import home from './components/tabbar/HomeContainer.vue'
import menber from './components/tabbar/MenberContainer.vue'
import shopcar from './components/tabbar/SearchContainer.vue'
import search from './components/tabbar/ShopcarContainer.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsDetail from './components/goods/goodsDetail.vue'
import goodsComment from './components/goods/goodsComment.vue'

var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/menber',component:menber},
        {path:'/shopcar',component:shopcar},
        {path:'/home',component:home},
        {path:'/home/newslist',component:newslist},
        // 对应 link to id
        {path:'/home/newslist/:id',component:newsinfo},
        {path:'/home/photolist',component:photolist},
        {path:'/home/photoinfo/:id',component:photoinfo},
        {path:'/home/goodslist',component:goodslist},
        {path:'/home/goodsinfo/:id',component:goodsinfo,name:'goods'},
        {path:'/home/goodsinfo/detail/:id',component:goodsDetail,name:'goodsDetail'},
        {path:'/home/goodsinfo/comment/:id',component:goodsComment,name:'goodsComment'},

    ],
    // 覆盖路由默认样式
    linkActiveClass:'mui-active'
})

export default router