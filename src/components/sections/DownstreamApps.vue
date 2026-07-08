<script setup>
import { useI18n } from 'vue-i18n'

import appMolPatent2 from '@/assets/images/app_mol_patent_2.jpeg'
import appChemFormula from '@/assets/images/app_chem_formula.jpeg'
import appStructuredDocDb from '@/assets/images/app_structured_doc_db.jpeg'
import appTargetActSpectrum from '@/assets/images/app_target_act_spectrum.jpeg'
import appExpInfoExtract2 from '@/assets/images/app_exp_info_extract_2.jpeg'
import uniMinerLogo from '@/assets/images/uni-miner-logo.svg'
import sciMasterLogo from '@/assets/images/sci-master-logo.png'
import uniFinderLogo from '@/assets/images/uni-finder-logo-black.jpeg'
import bohriumDocumentsSmall from '@/assets/images/bohrium_documents_small.png'
import bohriumReading from '@/assets/images/bohrium_reading.png'

const { t } = useI18n()

const groups = [
  {
    title: 'downstream_apps.extraction_title',
    items: [
      { title: 'downstream_apps.extraction_items.molecule_library', desc: 'downstream_apps.extraction_items.molecule_library_desc', img: appMolPatent2 },
      { title: 'downstream_apps.extraction_items.reaction_library', desc: 'downstream_apps.extraction_items.reaction_library_desc', img: appChemFormula },
      { title: 'downstream_apps.extraction_items.structured_database', desc: 'downstream_apps.extraction_items.structured_database_desc', img: appStructuredDocDb },
      { title: 'downstream_apps.extraction_items.target_database', desc: 'downstream_apps.extraction_items.target_database_desc', img: appTargetActSpectrum },
      { title: 'downstream_apps.extraction_items.experiment_extraction', desc: 'downstream_apps.extraction_items.experiment_extraction_desc', img: appExpInfoExtract2 }
    ]
  },
  {
    title: 'downstream_apps.eco_ability_title',
    items: [
      { title: 'downstream_apps.eco_ability_items.uni_miner', link: 'https://uni-miner.dp.tech/tutorials', img: uniMinerLogo },
      { title: 'downstream_apps.eco_ability_items.scimaster', link: 'https://scimaster.bohrium.com/', img: sciMasterLogo },
      { title: 'downstream_apps.eco_ability_items.uni_finder', link: 'https://uni-finder.dp.tech/chat', img: uniFinderLogo },
      { title: 'downstream_apps.eco_ability_items.bohrium_library', link: 'https://www.bohrium.com/journal-library', img: bohriumDocumentsSmall },
      { title: 'downstream_apps.eco_ability_items.bohrium_reader', link: 'https://www.bohrium.com/', img: bohriumReading }
    ]
  }
]
</script>

<template>
  <section id="applications" class="apps">
    <h1>{{ t('downstream_apps.title') }}</h1>
    <div v-for="group in groups" :key="group.title" class="apps__group">
      <h2>{{ t(group.title) }}</h2>
      <div class="apps__items-container">
        <div
          v-for="item in group.items"
          :key="item.title"
          class="apps__item"
          style="margin-top: 12px;"
        >
          <el-card shadow="hover" class="apps__card">
            <img v-if="item.img" :src="item.img" :alt="t(item.title)" style="margin: auto 0;" />
            <h3 style="text-align: center;">
              <a v-if="item.link" :href="item.link" target="_blank">{{ t(item.title) }}</a>
              <template v-else>{{ t(item.title) }}</template>
            </h3>
            <p v-if="item.desc" style="text-align: center;">{{ t(item.desc) }}</p>
          </el-card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.apps {
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  max-width: 1400px;
  margin: 0 auto;
}

.apps__group {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  /* min-width: 10px; */
  max-width: 1600px;
}

.apps__group + .apps__group {
  margin-top: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.apps__group h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Custom flex layout for 5 items per row */
.apps__items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.apps__item {
  flex: 0 0 calc(20% - 0.8rem);
  display: flex;
  justify-content: center;
}

@media (max-width: 1200px) {
  .apps__item {
    flex: 0 0 calc(25% - 0.75rem);
  }
}

@media (max-width: 992px) {
  .apps__item {
    flex: 0 0 calc(33.33% - 0.67rem);
  }
}

@media (max-width: 768px) {
  .apps__item {
    flex: 0 0 calc(50% - 0.5rem);
    min-width: 160px;
  }
}

@media (max-width: 480px) {
  .apps__item {
    flex: 0 0 100%;
    min-width: unset;
  }
}

.apps__card {
  transition: all 0.3s ease;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e8eaed;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 380px;
  width: 100%;
  max-width: 320px;
  overflow: hidden;
  position: relative;
}

.apps__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(0, 0, 0, 0.1);
}

.apps__card:deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2rem 1.5rem;
  text-align: center;
}

.apps__card img {
  width: 100%;
  height: auto;
  max-width: 200px;
  max-height: 280px;
  object-fit: contain;
  border-radius: 12px;
  transition: all 0.4s ease;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.apps__card:hover img {
  transform: scale(1.08);
  filter: drop-shadow(0 8px 20px rgba(37, 99, 235, 0.2));
}

.apps__card h3 {
  font-family: 'DingTalk Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.apps__card h3 a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.apps__card h3 a:hover {
  color: #2563eb;
}

.apps__card p {
  font-family: 'DingTalk Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin: 0.5rem 0 0 0;
  font-weight: 400;
}

/* Responsive design */
@media (max-width: 1200px) {
  .apps {
    padding: 3rem 1rem;
  }
}

@media (max-width: 1024px) {
  .apps__card {
    max-width: 280px;
    min-height: 340px;
  }

  .apps__card img {
    max-width: 180px;
    max-height: 240px;
  }
}

@media (max-width: 768px) {
  .apps__group h2 {
    font-size: 1.8rem;
  }

  .apps__items-container {
    gap: 0.75rem;
  }

  .apps__card {
    max-width: 100%;
    min-height: auto;
    padding: 1.5rem 1rem;
  }

  .apps__card:deep(.el-card__body) {
    padding: 1rem;
  }

  .apps__card img {
    max-width: 140px;
    max-height: 180px;
  }

  .apps__card h3 {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
}

@media (max-width: 480px) {
  .apps__group h2 {
    font-size: 1.6rem;
  }

  .apps__items-container {
    gap: 0.5rem;
  }

  .apps__card h3 {
    font-size: 1rem;
  }
}
</style>


