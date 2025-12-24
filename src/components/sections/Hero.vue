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

const uniParserToolsLink = 'https://uniparser.dp.tech/'
function openUniParserTools() {
  window.open(uniParserToolsLink, '_blank')
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
      </div>
      <div class="hero__image">
        <video autoplay loop muted playsinline class="hero__video">
          <source src="/src/assets/videos/project_page_showcase.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div class="hero__image", style="margin-top: 2rem; margin-left: 0rem; margin-bottom: 2rem;">
      <h3 style="margin-top: 2rem; text-align: left; font-size: 1.25rem; font-weight: bold;">
      <el-button v-if="locale === 'zh'" class="hover-lift" style="margin-right: 1rem;" size="large" v-tilt @click="openForm('zh')">{{ t('hero.join_waiting_list_zh') }}</el-button>
      <el-button v-if="locale === 'en'" class="hover-lift" style="margin-right: 1rem;" size="large" v-tilt @click="openForm('en')">{{ t('hero.join_waiting_list_en') }}</el-button>
        {{ t('hero.tools_description') }} <span style="color: rgba(66, 126, 234, 1.0); text-decoration: underline; cursor: pointer;" @click="openUniParserTools()"> Uni-Parser Tools </span>(Coming Soon)</h3>
    </div>

    <!-- <div class="hero__cta">
      <el-button v-if="locale === 'zh'" class="hover-lift" size="middle" v-tilt @click="openForm('zh')">{{ t('hero.join_waiting_list_zh') }}</el-button>
      <el-button v-if="locale === 'en'" class="hover-lift" size="middle" v-tilt @click="openForm('en')">{{ t('hero.join_waiting_list_en') }}</el-button>
    </div> -->
  </section>
</template>

<style scoped>
.hero {
  padding: 0rem 0rem;
  background: #ffffff;
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.hero__content {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 1rem;
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
  font-size: 1rem;
  font-family: 'DingTalk Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 1rem 0;
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
  /* flex-wrap: wrap; */
}

.hero__image .el-button {
  /* padding: 0.875rem 2rem; */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(10px);
  color: #ffffff;
  /* text-decoration: underline; */
}

.hero__image .el-button:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  border: none;
}

.hero__image {
  position: relative;
}

.hero__image video {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  filter: brightness(1.02);
}

.hero__image video:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
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

  .hero__image video {
    max-width: 600px;
    width: 100%;
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


