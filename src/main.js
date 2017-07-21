// 1、npm install vue  --save
//  2、在main.js中编写解析.vue的代码
// 1.0 导入vue这个包
import Vue from 'vue';

// 2.0 导入 App.vue文件
import App from './App.vue';

// 将vue-router集成到这个项目中来'
import vueRouter from "vue-router";
// 将vueRouter绑定到Vue对象上;
Vue.use(vueRouter)

// 没有导出对象直接把当前的mint-ui包名导入
import 'mint-ui/lib/style.min.css';

// 引入Mint
import Mint from 'mint-ui';
Vue.use(Mint);

// 引入MUI
import "../statics/mui/css/mui.css";

//引入模块vue文件需要的路由页面
import home from '../components/home.vue'; //主页
import shopcar from '../components/shopcar/car.vue'; //购物车
import newlist from '../components/new/newlist.vue'; //资讯页面
import newinfo from '../components/new/newinfo.vue'; //资讯详情页面
import photolist from '../components/photo/photolist.vue'; //图片分享
import photoinfo from '../components/photo/photoinfo.vue'; //图片详情页
import goodslist from '../components/goods/goodslist.vue'; //商品购买
import goodsinfo from '../components/goods/goodsinfo.vue'; //商品信息
import goodsdesc from '../components/goods/goodsdesc.vue'; //商品详情页面
import goodscomment from '../components/goods/goodscomment.vue'; //goods下边的goodscomment评论组件

// 引入css文件
import "../statics/css/site.css"

//将vue-resource在vue中绑定,自动在vue对象实例汇总注入一个$http对象
import vueResource from "vue-resource"
Vue.use(vueResource);

// 定义一个全局过滤器改变日期的格式;使用monentjs来格式化 先在node中下载 cnpm install moment --save 引入;
import moment from "moment";
Vue.filter("datafmt", function (input, fmtstring) {
    return moment(input).format(fmtstring) //使用形式
})

//photoinfo 页面图片轮播效果;
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


var router1 = new vueRouter({
    linkActiveClass: "mui-active", //改变路由激活时候的样式;
    routes: [{
            path: '/',
            redirect: '/home' //如果是根目录则默认跳转到home页面下
        },
        {
            path: '/home',
            component: home
        }, {
            path: '/shopcar',
            component: shopcar
        }, {
            path: '/new/newlist',
            component: newlist
        },
        {
            path: '/new/newinfo/:id',
            component: newinfo
        },
        {
            path: '/photo/photolist',
            component: photolist
        },
        {
            path: '/photo/photoinfo/:id',
            component: photoinfo
        },
        {
            path: '/goods/goodslist',
            component: goodslist
        },
        {
            path: '/goods/goodsinfo/:id',
            component: goodsinfo
        },
        {
            path: '/goods/goodsdesc/:id',
            component: goodsdesc
        },
        {
            path: '/goods/goodscomment/:id',
            component: goodscomment
        },
    ]
})

// 3.0 利用vue对象进行解析渲染

new Vue({
    el: '#app',
    router: router1,
    // render:function(create){create(App);}  es5语法  调用这个函数就会将前边的App.vue的对象添加进去
    render: create => create(App) //webpack  es6语法 如何函数中有多个函数体则{create(App);create(App)}
});