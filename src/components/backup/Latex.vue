<script lang="ts">
import { defineComponent } from 'vue'
import { VueLatex } from 'vatex'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: {
    VueLatex
  },
  setup() {
    const { t } = useI18n()
    return { t }
  }
})
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">{{ t('latex.title') }}</h1>
    </el-row>

    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <p v-html="t('latex.thanks', { 0: '<a href=\'https://katex.org/docs/options.html\' target=\'_blank\'>KaTex</a>', 1: '<a href=\'https://github.com/Shimada666/VaTex\' target=\'_blank\'>VaTex</a>', 2: '<VueLatex expression=\'\\\\LaTeX\' />', 3: '<VueLatex expression=\'1+1=2\' />' })"></p>
        <VueLatex expression="
            D(x) = \begin{cases}
            \lim\limits_{x \to 0} \frac{a^x}{b+c}, & x<3 \\
            \pi, & x=3 \\
            \int_a^{3b}x_{ij}+e^2 \mathrm{d}x,& x>3 \\
            \end{cases}
          " display-mode />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>