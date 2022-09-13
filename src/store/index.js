import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from 'js-cookie'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    avatar: null,
    nickname: null,
    blogInfo: {},
    language: "zh-CN"
  },
  mutations: {
    checkBlogInfo(state, blogInfo) {
      state.blogInfo = blogInfo;
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
      location.reload();
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
