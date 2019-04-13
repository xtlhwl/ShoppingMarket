import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';
import Routers from "./router.js";
import product_data from './product.js';

Vue.use(VueRouter);
Vue.use(Vuex);


const RouterConfig = {
    mode:history,
    router:Routers,
};

const router = new VueRouter(RouterConfig);


router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})

router.beforeEach((to, from, next) => {
    window.scroll(0,0);     //跳转后直接到置顶；
})

const store = new Vuex.Store({
    state:{
        //商品列表数据
        productList:[],
        //购物车数据
        carSList:[],
    },
    mutations:{
        setProductList(state,data){
            state.productList = data;
        }
    },
    actions:{
        getProductList(context){
            setTimeout(()=>{
                //真实环境用ajax获取，这里用异步获取   模仿ajax请求
                context.commit('setProductList',product_data)
            })
        }
    },
});


new Vue({
    el:"#app",
    router:router,
    render: h =>{
        return h(App)
    },
})