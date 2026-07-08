<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import coreFnLd from '@/assets/images/core_fn_ld.jpeg'
import coreFnTable from '@/assets/images/core_fn_table.jpeg'
import coreFnMol from '@/assets/images/core_fn_mol.jpeg'
import table_1_img from '@/assets/show_casing_imgs/table_01_v2_half.webp'
import table_2_img from '@/assets/show_casing_imgs/table_02_v2_half.webp'
import table_3_img from '@/assets/show_casing_imgs/table_03_v2_half.webp'
import layout_1_img from '@/assets/show_casing_imgs/layout_01_half.webp'
import layout_2_img from '@/assets/show_casing_imgs/layout_02_half.webp'
import layout_3_img from '@/assets/show_casing_imgs/layout_03_half.webp'
import mol_1 from '@/assets/show_casing_imgs/mol_1.webp'
import mol_2 from '@/assets/show_casing_imgs/mol_2.webp'
import mol_3 from '@/assets/show_casing_imgs/mol_3.webp'

const { t, locale } = useI18n()

const activeImageLayout = ref(0)
const activeImageTable = ref(0)
const activeImageMolecule = ref(0)

// Helper functions to get/set active image based on feature key
const getActiveImage = (key) => {
  switch (key) {
    case 'layout': return activeImageLayout.value
    case 'table': return activeImageTable.value
    case 'molecule': return activeImageMolecule.value
    default: return 0
  }
}

const setActiveImage = (key, index) => {
  switch (key) {
    case 'layout': activeImageLayout.value = index; break
    case 'table': activeImageTable.value = index; break
    case 'molecule': activeImageMolecule.value = index; break
  }
}

const formatTitle = (text) => {
  if (!text) return ''
  if (locale.value !== 'zh') return text
  const chunks = []
  for (let i = 0; i < text.length; i += 4) {
    chunks.push(text.substring(i, i + 4))
  }
  return chunks.join('<br>')
}

const cards = [
  {
    key: 'layout',
    title: 'core_features.layout_title',
    desc: 'core_features.layout_desc',
    img: coreFnLd,
    showcaseImages: [
      layout_1_img,
      layout_2_img,
      layout_3_img
    ]
  },
  {
    key: 'table',
    title: 'core_features.table_title',
    desc: 'core_features.table_desc',
    img: coreFnTable,
    showcaseImages: [
      table_1_img,
      table_2_img,
      table_3_img
    ]
  },
  {
    key: 'molecule',
    title: 'core_features.molecule_title',
    desc: 'core_features.molecule_desc',
    img: coreFnMol,
    showcaseImages: [
      mol_1,
      mol_2,
      mol_3
    ]
  }
]
</script>

<template>
  <section id="core" class="core">
    <h1>{{ t('core_features.title') }}</h1>
    <div class="core__features">
      <div class="core__feature-row" v-for="c in cards" :key="c.key">
        <div class="core__card-container">
          <el-card shadow="hover" class="core__card">
            <img :src="c.img" :alt="t(c.title)" class="core__img" />
            <h3 v-html="formatTitle(t(c.title))"></h3>
            <!-- <p>{{ t(c.desc) }}</p> -->
          </el-card>
        </div>
        <div class="core__showcase">
          <div class="core__showcase-gallery">
            <div class="core__showcase-images">
              <img
                v-for="(image, index) in c.showcaseImages"
                :key="index"
                :src="image"
                :alt="`Showcase ${index + 1}`"
                class="core__showcase-image"
                :class="{ 'core__showcase-image--active': getActiveImage(c.key) === index }"
                @click="setActiveImage(c.key, index)"
              />
            </div>
            <div class="core__showcase-preview">
              <img
                :src="c.showcaseImages[getActiveImage(c.key)]"
                :alt="`Showcase ${getActiveImage(c.key) + 1}`"
                class="core__showcase-preview-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.core {
  padding: 4rem 0rem;
  background: #ffffff;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.core h1 {
  text-align: center;
  margin-top: 0rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
}

.core__features {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.core__feature-row {
  display: flex;
  gap: 0rem;
  align-items: flex-start;
  min-height: 400px;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .core__feature-row {
    flex-direction: column;
    gap: 1.5rem;
    min-height: auto;
  }
}

.core__card-container {
  flex: 0 0 180px;
  max-width: 200px;
}

.core__card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e8eaed;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 1.25rem 1rem;
}

.core__card h3 {
  font-family: 'DingTalk Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.8rem;
  margin-bottom: 0rem;
  font-weight: 600;
  color: #2563eb;
  transition: color 0.3s ease;
  line-height: 1.2;
  text-align: center;
}

.core__card:hover h3 {
  color: #2563eb;
}

.core__card p {
  font-family: 'DingTalk Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  font-weight: 400;
}

/* Enhanced card styling */
/* :deep(.el-card) {
  border: none !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.3s ease !important;
}

:deep(.el-card:hover) {
  border: none !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08) !important;
  transform: translateY(-2px);
} */

:deep(.el-card__body) {
  padding: 0rem !important;
  max-width: 100%;
  margin: 0 auto;
}

.core__img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.core__card:hover .core__img {
  transform: scale(1.02);
}

.core__showcase {
  flex: 1;
  min-height: 320px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e8eaed;
  padding: 2rem;
  transition: all 0.3s ease;
}

.core__showcase:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.core__showcase-gallery {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.core__showcase-images {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.core__showcase-image {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0.7;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.core__showcase-image:hover {
  opacity: 0.9;
  transform: scale(1.08) translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
}

.core__showcase-image--active {
  opacity: 1;
  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.3);
}

.core__showcase-preview {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  min-height: 240px;
  transition: all 0.3s ease;
}

.core__showcase-preview:hover {
  background: #ffffff;
}

.core__showcase-preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.core__showcase-preview:hover .core__showcase-preview-image {
  transform: scale(1.02);
}

/* Responsive design */
@media (max-width: 1024px) {
  .core__feature-row {
    gap: 2rem;
  }

  .core__card-container {
    flex: 0 0 340px;
    max-width: 340px;
  }
}

@media (max-width: 768px) {
  .core h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .core__features {
    gap: 3rem;
  }

  .core__feature-row {
    flex-direction: column;
    gap: 2rem;
    min-height: auto;
  }

  .core__card-container {
    flex: 1;
    max-width: 100%;
  }

  .core__showcase {
    flex: 1;
    min-height: 280px;
    padding: 1.5rem;
  }

  .core__showcase-images {
    gap: 0.75rem;
  }

  .core__showcase-image {
    width: 70px;
    height: 70px;
  }

  .core__showcase-preview {
    min-height: 180px;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .core h1 {
    font-size: 1.75rem;
  }

  .core__showcase {
    min-height: 240px;
    padding: 1rem;
  }

  .core__showcase-image {
    width: 60px;
    height: 60px;
  }

  .core__showcase-preview {
    min-height: 160px;
    padding: 0.75rem;
  }
}
</style>


