<template>
  <v-app-bar app :class="navClass" height="60" hide-on-scroll flat>
    <div :class="navClass">
      <div style="font-size: 30px;vertical-align: center">
        <img src="../assets/logo.png" style="height:60px;margin-top:5px;" alt="">
        XIN FA
      </div>
      <div class="headCont">
        <ul>
          <router-link to="/home" tag="li">HOME</router-link>
          <router-link to="/about" tag="li">ABOUT</router-link>
        </ul>
      </div>
      <lang-select class="right-menu-item hover-effect" style="width:100px" />
    </div>
  </v-app-bar>

</template>

<script>
import LangSelect from '@/components/LangSelect'

export default {
  components: {
    LangSelect
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
  },
  data: function () {
    return {
      navClass: 'headerNav',
      languageList: [
        {
          language: 'zh-CN',
          name: '中文(简体)'
        },
        {
          language: 'en-US',
          name: 'English'
        },
        {
          language: 'ru',
          name: 'Pоссия'
        }
      ]
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    },
    scroll() {
      const that = this
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.navClass = 'headerNav-fixed'
      } else {
        that.navClass = 'headerNav'
      }
    },
    openSearch() {
      this.$store.state.searchFlag = true
    },
    openDrawer() {
      this.$store.state.drawer = true
    },
    openLogin() {
      this.$store.state.loginFlag = true
    },
    logout() {
      //如果在个人中心则跳回上一页
      if (this.$route.path == '/user') {
        this.$router.go(-1)
      }
      this.axios.get('/api/logout').then(({ data }) => {
        if (data.flag) {
          this.$store.commit('logout')
          this.$toast({ type: 'success', message: '注销成功' })
        } else {
          this.$toast({ type: 'error', message: data.message })
        }
      })
    }
  },
  computed: {
    avatar() {
      return this.$store.state.avatar
    },
    blogInfo() {
      return this.$store.state.blogInfo
    }
  }
}
</script>

<style scoped >
i {
  margin-right: 4px;
}
ul {
  list-style: none;
}
ul li:hover {
  color: #4ab1f4;
}
.headerNav {
  background: rgba(0, 0, 0, 0) !important;
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
}
.headerNav div {
  color: #000 !important;
}
.headerNav div:hover {
  color: blue;
}
.headerNav-fixed {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.headCont {
  font-size: 22px;
  width: 1170px;
}
.headCont ul > li {
  float: left;
  line-height: 60px;
  width: 100px;
  text-align: center;
}
</style>
