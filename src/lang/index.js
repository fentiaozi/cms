import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import zhCN from './zh-CN'
import zhTW from './ru'
import enUS from './en-US'
Vue.use(VueI18n)

export const messages = {
  'zh-CN': {
    '_lang': '简体中文',
    ...zhCN,
  },
  'ru': {
    '_lang': 'Pоссия',
    ...zhTW,
  },
  'en-US': {
    '_lang': 'English',
    ...enUS,
  }
}
export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh-CN'
}
export default new VueI18n({
  locale: getLanguage(),
  messages,
})
