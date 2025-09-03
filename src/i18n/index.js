import { createI18n } from 'vue-i18n'
import en from './langs/en'
import zh from './langs/zh'

const i18n = createI18n({
  legacy: false, // 使用 Composition API 需要设置为 false
  locale: localStorage.getItem('language') || 'zh', // 默认语言
  messages: {
    zh,
    en
  }
})

export default i18n
