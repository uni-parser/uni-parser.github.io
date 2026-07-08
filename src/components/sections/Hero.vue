<script setup>
import { ref, reactive, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const { t, locale, tm } = useI18n()

const features = computed(() => tm('hero.features') || [])

const externalApplicationFormLink = 'https://dptechnology.feishu.cn/share/base/form/shrcngJBcTILY4XdARDmZj0ppqh'

function openForm() {
  window.open(externalApplicationFormLink, '_blank')
}

const homepageLink = 'https://uniparser.dp.tech/'
function openHomepage() {
  window.open(homepageLink, '_blank')
}

const wrapperToolsLink = 'https://github.com/dptech-corp/UniParser-Tools'
function openWrapperTools() {
  window.open(wrapperToolsLink, '_blank')
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
    <div class="hero__actions" v-reveal="{ animation: 'fade-up' }">
      <el-button class="hero__btn hero__btn--primary hover-lift" size="large" v-tilt @click="openHomepage">{{ t('hero.visit_homepage') }}</el-button>
      <el-button class="hero__btn hero__btn--primary hover-lift" size="large" v-tilt @click="openWrapperTools">{{ t('hero.visit_wrapper_tools') }}</el-button>
      <el-button class="hero__btn hero__btn--primary hover-lift" size="large" v-tilt @click="openForm">{{ t('hero.academic_cooperation') }}</el-button>
    </div>
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
  background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
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

.hero__actions {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero__btn {
  height: auto;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.hero__btn--primary {
  border: none;
  background: #0f172a;
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.2);
}

.hero__btn--primary:hover {
  background: #1e293b;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.3);
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

  .hero__actions {
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

  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .hero__btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>


