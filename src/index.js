// import './css/app.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
// while get ,url use relative
Vue.http.options.root = 'http://192.168.0.104:8088/'
Vue.http.options.emulateJSON = true

// filter -g
import moment from 'moment'
Vue.filter('dateFormat',function(str,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(str).format(pattern)
})

// mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)

import 'mint-ui/lib/style.css'

// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)

// 缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 刷新页面后重新执行代码 每次进入网站则调用index.js就马上getItem
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state:{
        // car count data
        car:car,
       
    },
    mutations:{
        // 当前信息页 goodsinfo add to car
        addToCar(state,goodsInfo){
            var flag = false
            state.car.some(item=>{
                if (item.id === parseInt(goodsInfo.id)){
                    item.count += parseInt(goodsInfo.count)
                    flag = true
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsInfo)
            }
            // 本地存储car
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        // numbox return car
        getCount(state,goodinfo){
            state.car.some(item=>{
                if(item.id === goodinfo.id){
                    item.count = goodinfo.count
                    return true
                }
            })
        },
        deleteCarGoods(state,id){
            state.car.some((item,i)=>{
                if(item.id = id){
                    state.car.splice(i,1)
                    return true
                }
            })
        },
        selectedChanges(state,infos){
            state.car.some((item,i)=>{
                if(item.id === infos.id){
                    state.car[i].selected = infos.val
                    localStorage.setItem('car',JSON.stringify(state.car))
                    return true
                }
            })
        }
    },
    getters:{
        // => computer fillter
        
        // add all count in car icon
        getAllCount(state){
            var c = 0
            state.car.forEach(item=>{
                c += parseInt(item.count)
            })
            // 渲染页面需要return值
            return c
        },

        // render numbox count by car id/count
        getGoodsCount(state){
            var o ={}
            state.car.forEach(item=>{
               o[item.id] = item.count
           })
           return o
        } ,
        // get data from car
        getSelected(state){
            var o = {}
            state.car.forEach(item=>{
                o[item.id] = item.selected
            })
            return o
        },
        // sell card
        getSellInfos(state){
            var c = {
                count:0,
                price:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    c.count += parseInt(item.count)
                    c.price += parseInt(item.price)*parseInt(item.count)
                }
            })
            return c
        }
        
    }
})

import index from './main/index.vue'
import router from './router.js'

var vm = new Vue({
    el:'#app',
    router,
    render: c => c(index),
    store
})

//  npm i babel-core babel-loader babel-plugin-transform-runtime -D
// npm i babel-preset-env babel-preset-stage-0 -D
class Person {
    static info ={ name:'ls'}
}
console.log(Person.info)
