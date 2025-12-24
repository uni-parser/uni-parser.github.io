<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale, tm } = useI18n()

const items = computed(() => tm('partners.items') || [])

</script>

<template>
  <section id="partners" class="partners">
    <div class="partners__header">
      <h1>{{ t('partners.title') }}</h1>
      <el-alert type="success" :title="t('partners.invitation')" :closable="false" />
    </div>
    <el-row :gutter="16" class="partners-row" style="margin-top: 6px;" justify="center">
      <el-col
        v-for="(txt, i) in items"
        :key="txt"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6"
        :xxl="6"
        class="partner-col"
        style="margin-top: 8px;"
        :style="{ animationDelay: `${i * 100}ms` }"
      >
        <el-card shadow="never" class="partner-card" :body-style="{ padding: '0px' }">
          <img :src="txt.image" :alt="txt.text" class="partner-image" />
          <p class="partner-text">{{ txt.text }}</p>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<style scoped>
.partners {
  padding: 4rem 1rem;
  background: #ffffff;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .partners {
    padding: 3rem 1rem;
  }
}

.partners__header {
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.partners__header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 2rem 0 1.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.partners__header .el-alert {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  border: 0px solid #e8eaed;
  background: #f8f9fa;
  color: #24292f;
  font-weight: 500;
}

.partners-row {
  position: relative;
  z-index: 1;
  padding-left: 0rem;
  padding-right: 0rem;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.partner-col {
  animation: fadeUp 0.8s ease both;
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.partner-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e8eaed;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 320px;
  width: 100%;
  max-width: 320px;
  overflow: hidden;
  position: relative;
}

.partner-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-color: #d0d7de;
}

.partner-card:deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0rem 1rem;
  text-align: center;
}

.partner-image {
  width: 100%;
  height: auto;
  max-width: 200px;
  max-height: 280px;
  object-fit: contain;
  border-radius: 12px;
  transition: all 0.4s ease;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.partner-card:hover .partner-image {
  transform: scale(1.08);
  filter: drop-shadow(0 8px 20px rgba(102, 126, 234, 0.2));
}

.partner-text {
  font-family: 'DingTalk Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-top: 1rem;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.partner-card:hover .partner-text {
  color: #667eea;
}

/* Responsive design */
@media (min-width: 1200px) {
  .partners-row :deep(.el-row) {
    max-width: 1200px;
    margin: 0 auto;
  }
}

@media (max-width: 1024px) {
  .partner-card {
    max-width: 280px;
    min-height: 300px;
  }

  .partner-image {
    max-width: 180px;
    max-height: 240px;
  }
}

@media (max-width: 768px) {
  .partners__header h1 {
    font-size: 2rem;
  }

  .partner-col {
    margin-bottom: 1rem;
  }

  .partner-card {
    max-width: 260px;
    min-height: 280px;
  }

  .partner-card:deep(.el-card__body) {
    padding: 1rem 1rem;
  }

  .partner-image {
    max-width: 160px;
    max-height: 200px;
  }

  .partner-text {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .partners__header h1 {
    font-size: 1.75rem;
  }

  .partner-card {
    max-width: 280px;
    min-height: 260px;
  }

  .partner-image {
    max-width: 140px;
    max-height: 180px;
  }

  .partner-text {
    font-size: 1rem;
  }
}
</style>


