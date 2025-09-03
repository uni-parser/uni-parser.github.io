<script setup>
import { ref, reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const { t, locale, tm } = useI18n()

const features = computed(() => tm('hero.features') || [])

const waitingListLinks = {
  zh: 'https://www.dp.tech/',
  en: 'https://www.dp.tech/'
}

const externalApplicationFormLink = 'https://dptechnology.feishu.cn/share/base/form/shrcngJBcTILY4XdARDmZj0ppqh'

function openForm(lang) {
  // openedFromLang.value = lang
  // dialogVisible.value = true
  window.open(externalApplicationFormLink, '_blank')
}

</script>

<template>
  <section id="home" class="hero">
    <div class="hero__content">
      <div class="hero__text" v-reveal="{ animation: 'fade-up' }">
        <h1 style="text-align: left;" v-html="t('hero.title')"></h1>
        <ul>
          <li v-for="(feature, index) in features" :key="index" v-reveal>{{ feature }}</li>
        </ul>
        <div class="hero__cta">
          <el-button class="hover-lift" type="primary" size="large" v-tilt @click="openForm('zh')">{{ t('hero.join_waiting_list_zh') }}</el-button>
          <el-button size="large" @click="openForm('en')">Join Waiting List (EN)</el-button>
        </div>
      </div>
      <div class="hero__image">
        <img src="/src/assets/small_images/project_page_showcase.png" alt="Hero" />
      </div>
    </div>

  </section>
</template>

<style scoped>
.hero {
  padding: 4rem 0rem;
  background: #ffffff;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.hero__content {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero__text h1 {
  font-size: 2.0rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__text ul {
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}

.hero__text ul li {
  font-size: 1.1rem;
  font-family: 'DingTalk Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
  line-height: 1.6;
}

.hero__text ul li::before {
  content: '✨';
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1rem;
}

.hero__cta {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__cta .el-button {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
}

.hero__cta .el-button:first-child {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.hero__cta .el-button:first-child:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

.hero__cta .el-button:last-child {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #667eea;
  border: none;
}

.hero__cta .el-button:last-child:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.hero__image {
  position: relative;
}

.hero__image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  filter: brightness(1.02);
}

.hero__image img:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* Responsive design */
@media (max-width: 1024px) {
  .hero__content {
    gap: 3rem;
  }

  .hero__text h1 {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .hero__content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero__text h1 {
    font-size: 2rem;
    text-align: center;
  }

  .hero__text ul li {
    font-size: 1rem;
    text-align: center;
    padding-left: 2rem;
  }

  .hero__cta {
    justify-content: center;
  }

  .hero__image img {
    max-width: 400px;
    margin: 0 auto;
    display: block;
  }
}

@media (max-width: 480px) {
  .hero__text h1 {
    font-size: 1.8rem;
  }

  .hero__cta {
    flex-direction: column;
    align-items: center;
  }

  .hero__cta .el-button {
    width: 100%;
    max-width: 280px;
  }
}
</style>


