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
      <div class="footer__main">
        <div class="footer__text">
          <p class="footer__description">
            This template is inspired by
            <a :href="links.Nerfies" class="footer__link">Nerfies</a>,<br/>

            powered by
            <a :href="links.Vue" class="footer__link">Vue</a>,
            <a :href="links.Vite" class="footer__link">Vite</a>, and
            <a :href="links.ElementPlus" class="footer__link">Element Plus</a>.<br/>

            You can <span class="footer__emoji">🛠️</span>fork / <span class="footer__emoji">✨</span>star / <span class="footer__emoji">📃</span>PR from
            <a :href="links.template" class="footer__link footer__link--primary">here</a>.
          </p>
        </div>
      </div>
    </div>

    <el-watermark :content="['JunyaoHu', 'Academic Project', 'Page Template']" :gap="['60','0']" :z-index="0" />
  </footer>
</template>

<style scoped>

/* Clean footer section */
.footer-section {
  padding: 4rem 6rem;
  background: #fafbfc;
  position: relative;
  border-top: 1px solid #e8eaed;
}

/* Footer content wrapper */
.footer__content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
}

.footer__main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

/* Footer description text */
.footer__description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin: 0;
  max-width: 700px;
  font-weight: 400;
  position: relative;
}

/* Enhanced link styling */
.footer__link {
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  display: inline-block;
  margin: 0 0.25rem;
}

.footer__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
  border-radius: 1px;
}

.footer__link:hover {
  color: #764ba2;
}

.footer__link:hover::after {
  width: 100%;
}

.footer__link--primary {
  font-weight: 700;
}

.footer__link--primary:hover {
  color: #5a67d8;
}

/* Emoji styling */
.footer__emoji {
  display: inline-block;
  transition: transform 0.3s ease;
  margin: 0 0.125rem;
}

.footer__link:hover + .footer__emoji,
.footer__emoji:hover {
  transform: scale(1.2);
}

/* Simple divider styling */
.footer__divider {
  width: 60px;
  height: 2px;
  background: #e8eaed;
  border-radius: 2px;
}

/* Credits section */
.footer__credits {
  margin-top: 1rem;
}

.footer__credits-text {
  font-size: 0.95rem;
  color: #777;
  margin: 0;
  font-weight: 500;
}

.footer__heart {
  display: inline-block;
  color: #ff6b6b;
  animation: heartbeat 1.5s ease-in-out infinite;
  margin: 0 0.25rem;
}

@keyframes heartbeat {
  0%, 50%, 100% {
    transform: scale(1);
  }
  25%, 75% {
    transform: scale(1.1);
  }
}

/* Responsive design */
@media (max-width: 1024px) {
  .footer-section {
    padding: 3rem 4rem;
  }

  .footer__description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 2.5rem 2rem;
  }

  .footer__description {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .footer__link {
    margin: 0 0.125rem;
  }

  .footer__main {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 2rem 1.5rem;
  }

  .footer__description {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .footer__divider {
    width: 40px;
  }

  .footer__credits-text {
    font-size: 0.85rem;
  }
}

</style>