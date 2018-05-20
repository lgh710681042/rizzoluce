import Vue from 'vue'
import App from './App.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import index from './components/index.vue'
import d_edit from './components/d_edit.vue'
import m_edit from './components/m_edit.vue'
import m_show from './components/message_show.vue'
import d_show from './components/diary_show.vue'
import about from './components/about.vue'
import common_head from './components/common_head.vue'
import rizzoluce from './components/rizzoluce_index.vue'
import company from './components/company.vue'
import project from './components/project.vue'
import products from './components/products.vue'
import product from './components/product.vue'
import news from './components/news.vue'
import download from './components/download.vue'
import contact from './components/contact.vue'
import $ from 'jquery'
import './assets/js/bootstrap.min.js'
import './assets/js/swiper.jquery.min.js'
// import './assets/js/swiper.min.js'
import './assets/js/jquery-migrate.min.js'
import './assets/js/jquery.easing.js'
import './assets/js/jquery.back-to-top.js'
import './assets/js/jquery.smooth-scroll.js'
import './assets/js/jquery.masonry.pkgd.min.js'
import './assets/js/imagesloaded.pkgd.min.js'
import './assets/js/layout.min.js'
import './assets/js/jquery.parallax.min.js'
// import './assets/js/wow.min.js'
// import './assets/js/masonry.min.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

// 注册组件
Vue.use(VueResource)
Vue.use(VueRouter)


// 路由
const routes = [{
        path: '/',
        component: rizzoluce
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/message_board/m_edit',
        component: m_edit
    },
    {
        path: '/diary/d_edit',
        component: d_edit
    },
    {
        path: '/message_board/message_show',
        component: m_show
    },
    {
        path: '/diary/diary_show',
        component: d_show
    },
    {
        path: '/rizzoluce',
        component: rizzoluce
    },
    {
        path: '/company',
        component: company
    },
    {
        path: '/project',
        component: project
    },
    {
        path: '/products',
        component: products
    },
    {
        path: '/product',
        component: product
    },
    {
        path: '/download',
        component: download
    },
    {
        path: '/news',
        component: news
    },
    {
        path: '/contact',
        component: contact
    }
]
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
new Vue({
        router,
        components: {
            app: App
        },
        store,
        render: h => h(App)
    }).$mount('#app')
    // router.start(App, '#app');