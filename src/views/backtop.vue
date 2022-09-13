<template>
  <div>
    <div id="btnBox" class="top" @click="goBack">
<!--      ⬆️-->
      <img width="50" height="50" src="/images/cd-top-arrow.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 回到顶部操作
    goBack() {
      document.documentElement.scrollTop = 0;
    },
    //监听回到顶部按钮距浏览器顶部的距离
    scrollToTop() {
      // 获取dom元素id
      let topBtn = document.getElementById("btnBox");
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log("距离顶部的距离:" + scrollTop);
      // 判断距离顶部多少显示回到顶部图标
      if (scrollTop > 500) {
        topBtn.style.display = "block";
      } else if (scrollTop < 500) {
        topBtn.style.display = "none";
      }
    },
    //离开该页面需要移除这个监听的事件，不然会报错;
    destroyed() {
      window.removeEventListener("scroll", this.scrollToTop);
    },
  },
  mounted() {
    // 侦听事件并处理相应函数
    window.addEventListener("scroll", this.scrollToTop);
  },
};
</script>

<style scoped>
#btnBox {
  position: fixed;
  bottom: 100px;
  right: 10px;
  font-size: 30px;
  display: none;
}
</style>
