import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "./assets/css/index.css";
import "./assets/css/iconfont.css";
import "./assets/css/markdown.css";
import "./assets/css/vue-social-share/client.css";
import InfiniteLoading from "v3-infinite-loading"; // 引用无限加载组件
import "highlight.js/styles/atom-one-dark.css";    // 代码高亮组件
// import VueImageSwipe from "vue-image-swipe";        // 图片预览组件
import VuePictureSwipe from 'vue3-picture-swipe'; // 图片预览组件
import { vueBaberrage } from 'vue-baberrage'    // 弹幕组件
import NProgress from "nprogress";
import "vue-image-swipe/dist/vue-image-swipe.css";
// import Toast from "./components/toast/index";       // 全局消息提示
// import global from "@./assets/js/global";        // 全局变量



router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
router.afterEach(() => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
    NProgress.done();
});

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
.use(router)
.use(InfiniteLoading)
.use(VuePictureSwipe)
.use(vuetify)
.use(vueBaberrage)
.use(store)
.mount('#app')
// .use(Toast)




