import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';
import Routers from "./router.js";


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

    },
    mutations:{

    },
    actions:{

    },
});


new Vue({
    el:"#app",
    router:router,
    render: h =>{
        return h(App)
    },
})