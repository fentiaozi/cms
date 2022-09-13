<template>
  <v-app id="app">
    <TopNavBar/>
    <router-view></router-view>
  </v-app>
</template>
<script>
import TopNavBar from './components/TopNavBar'

export default {
  components:{
    TopNavBar
  },
  created() {
    if (!sessionStorage.getItem("anonymous")) {
      sessionStorage.setItem(
        'anonymous',
        new Date().getTime() + Math.floor(Math.random() * 100000)
      )
    }
  },
  methods: {
    getBlogInfo() {
      this.$http.get('/').then(({ data }) => {
        this.$store.commit('checkBlogInfo', data.data)
      })
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}

#Copyright {
  display: none;
}
</style>
