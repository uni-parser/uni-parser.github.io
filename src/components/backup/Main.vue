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
  <div v-reveal>
    <Title/>
  </div>
  <Hero/>
  <div v-reveal>
    <CoreFeatures/>
  </div>
  <div v-reveal>
    <DownstreamApps/>
  </div>
  <div v-reveal>
    <Partners/>
  </div>
  <div v-reveal>
    <CustomFooter/>
  </div>
</template>