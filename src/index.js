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
Vue.http.options.root = 'http://192.168.0.105:8088/'
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

import index from './main/index.vue'
import router from './router.js'

var vm = new Vue({
    el:'#app',
    router,
    render: c => c(index)
})

//  npm i babel-core babel-loader babel-plugin-transform-runtime -D
// npm i babel-preset-env babel-preset-stage-0 -D
class Person {
    static info ={ name:'ls'}
}
console.log(Person.info)
