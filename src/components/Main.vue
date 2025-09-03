<script>
import Title from './sections/Title.vue'
import Hero from './sections/Hero.vue'
import CoreFeatures from './sections/CoreFeatures.vue'
import DownstreamApps from './sections/DownstreamApps.vue'
import Partners from './sections/Partners.vue'
import CustomFooter from './sections/CustomFooter.vue'

export default {
  components: {
    Title,
    Hero,
    CoreFeatures,
    DownstreamApps,
    Partners,
    CustomFooter
  }
}
</script>

<template>
  <div class="main-content">
    <div v-reveal class="section-wrapper">
      <Title/>
    </div>
    <Hero/>
    <div v-reveal class="section-wrapper">
      <CoreFeatures/>
    </div>
    <div v-reveal class="section-wrapper">
      <DownstreamApps/>
    </div>
    <div v-reveal class="section-wrapper">
      <Partners/>
    </div>
    <div v-reveal class="section-wrapper">
      <CustomFooter/>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  min-height: 100vh;
  background: #ffffff;
}

.section-wrapper {
  padding: 0;
  margin: 0;
}

/* Remove any potential borders from sections */
.section-wrapper > * {
  border: none !important;
  box-shadow: none !important;
}

/* Smooth transitions for all elements */
* {
  transition: all 0.3s ease;
}
</style>
