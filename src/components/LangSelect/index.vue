<template>
  <!-- <v-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <v-icon large color="blue darken-2">
        mdi-message-text
      </v-icon>
    </div>
    <v-dropdown-menu slot="dropdown">
      <v-dropdown-item :disabled="language === 'zh-CN'" command="zh-CN">
        中文(简体)
      </v-dropdown-item>
      <v-dropdown-item :disabled="language === 'en-US'" command="en-US">
        English
      </v-dropdown-item>
      <v-dropdown-item :disabled="language === 'zh-TW'" command="zh-TW">
        中文(繁体)
      </v-dropdown-item>
    </v-dropdown-menu>
  </v-dropdown> -->
  <div class="menus-item">
    <div class="menu-btn">
      <i class="iconfont iconfaxian" /> 语言
      <i class="iconfont iconxiangxia2 expand" />
    </div>
    <div class="menus-submenu">
      <div v-for="i in languageList" :key="i.name" @click="handleSetLanguage(i.language)">
        {{i.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  data() {
    return {
      languageList: [
        {
          language: "zh-CN",
          name: "中文(简体)"
        },
        {
          language: "en-US",
          name: "English"
        },
        {
          language: "ru",
          name: "Pоссия"
        }
      ]
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    }
  }
}
</script>
<style scoped lang="scss">
.menus-item {
  position: relative;
  display: inline-block;
  margin: 0 0 0 0.875rem;
}

.menu-btn:hover:after {
  width: 100%;
}

.menus-item {
  .menu-btn {
    text-shadow: none;
    transition: all 0.2s;
    font-size: 18px;
    &:after {
      position: absolute;
      bottom: -5px;
      left: 0;
      z-index: -1;
      width: 0;
      height: 3px;
      background-color: #80c8f8;
      content: "";
      transition: all 0.3s ease-in-out;
    }
  }

}


.menus-item:hover .menus-submenu {
  display: block;
}

.menus-submenu {
  position: absolute;
  display: none;
  right: 0;
  width: max-content;
  margin-top: 8px;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  animation: submenu 0.3s 0.1s ease both;
}

.menus-submenu:before {
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 20px;
  content: "";
}

.menus-submenu div {
  line-height: 1;
  color: #4c4948 !important;
  text-shadow: none;
  display: block;
  padding: 6px 14px;
}

.menus-submenu div:hover {
  background: #4ab1f4;
}

@keyframes submenu {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    filter: none;
    transform: translateY(0);
  }
}
</style>
