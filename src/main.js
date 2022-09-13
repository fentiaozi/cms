import Vue from 'vue'
import App from './App.vue';
import router from './router'
import store from './store'
import "./assets/css/iconfont.css";
import vuetify from "@/plugins/vuetify";
Vue.config.productionTip = false
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import http from '@/utils/request'
Vue.prototype.$http = http //将 axios 改写为 Vue 的原型属性
import Toast from "./components/toast/index";
Vue.use(Toast);
import i18n from './lang' // internationalization0
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(Viewer)
Viewer.setDefaults({
  // 需要配置的属性 注意属性并没有引号
  title: false,
  toolbar: false
})
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
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
