<script lang="ts" setup>
// 页脚需要的链接
const links = {
    Nerfies: "https://github.com/nerfies/nerfies.github.io",
    Vue: "https://cn.vuejs.org/",
    Vite: "https://cn.vitejs.dev/",
    ElementPlus: "https://element-plus.org/zh-CN/",
    template: "https://github.com/JunyaoHu/academic-project-page-template-vue",
}
</script>

<template>
  <footer class="footer-section">
    <div class="footer__content">
      <p class="footer__description">
        This template is inspired by <a :href="links.Nerfies" class="footer__link">Nerfies</a>,
        powered by <a :href="links.Vue" class="footer__link">Vue</a>,
        <a :href="links.Vite" class="footer__link">Vite</a>, and
        <a :href="links.ElementPlus" class="footer__link">Element Plus</a>.
        You can view original project from
        <a :href="links.template" class="footer__link footer__link--primary">here</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  padding: 1rem 5%;
  background: #fafbfc;
  border-top: 1px solid #e8eaed;
  text-align: center;
}

.footer__description {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.2;
}

.footer__link {
  color: #3273dc;
  text-decoration: none;
}

.footer__link:hover {
  text-decoration: underline;
}

.footer__link--primary {
  font-weight: bold;
}

.footer__emoji {
  margin: 0 0.1rem;
}

@media (max-width: 768px) {
  .footer-section {
    padding: 0.75rem 1rem;
  }
  .footer__description {
    font-size: 0.8rem;
  }
}
</style>