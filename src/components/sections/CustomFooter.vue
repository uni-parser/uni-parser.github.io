<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const links = [
  { name: 'OCSR Demo', link: 'https://ocsr.dp.tech/' },
  { name: '玻尔科研工作站', link: 'https://www.bohrium.com/' },
  { name: 'Uni-Finder', link: 'https://uni-finder.dp.tech/chat' },
  { name: 'SciMaster', link: 'https://scimaster.bohrium.com/' },
  { name: 'Uni-Miner', link: 'https://uni-miner.dp.tech/' }
]
</script>

<template>
  <section id="footer-links" class="footer">
    <el-card shadow="never" class="footer-card">
      <!-- Friendly Links Section -->
      <div class="links-section">
        <h2 class="section-title">{{ t('custom_footer.friendly_links') }}</h2>
        <ul class="links-list">
          <li v-for="link in links" :key="link.name" class="link-item">
            <a :href="link.link" class="link">{{ link.name }}</a>
          </li>
        </ul>
      </div>

      <el-divider />

      <!-- Footer Content -->
      <div class="footer-content">
        <!-- Contact Section -->
        <div class="contact-section">
          <div class="logo-container">
            <img src="/src/assets/small_images/project_logo_v3.png" alt="Project Logo" class="project-logo" />
          </div>
          <div class="contact-info">
            <p class="contact-text">{{ t('custom_footer.email_contact') }}:</p>
            <a href="mailto:bd@dp.tech" class="email-link">{{ t('custom_footer.commercial_contact') }}: bd@dp.tech</a>
            <a href="mailto:fangxi@dp.tech" class="email-link">{{ t('custom_footer.academic_contact') }}: fangxi@dp.tech</a>
          </div>
        </div>

        <!-- Legal Section -->
        <div class="legal-section">
          <h3 class="legal-title">{{ t('custom_footer.legal_declaration') }}</h3>
          <ul class="legal-list">
            <li><a href="#" class="legal-link">{{ t('custom_footer.user_agreement') }}</a></li>
            <li><a href="#" class="legal-link">{{ t('custom_footer.privacy_agreement') }}</a></li>
          </ul>
        </div>

        <!-- Community Section -->
        <div class="community-section">
          <div class="community-content">
            <span class="community-text">{{ t('custom_footer.join_community') }}</span>
            <span class="community-text">to be announced</span>
          </div>
        </div>
      </div>
    </el-card>
  </section>
</template>

<style scoped>
.footer {
  padding: 48px 8rem;
  background: #ffffff;
}

.footer-card {
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
}

/* Responsive padding for different screen sizes */
@media (min-width: 1400px) {
  .footer {
    padding: 48px 10rem;
  }
}

@media (max-width: 1024px) {
  .footer {
    padding: 48px 6rem;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 48px 4rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 48px 2rem;
  }
}

/* Links Section */
.links-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-family: 'DingTalk Sans', sans-serif;
}

.links-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-item {
  display: inline-block;
}

.link {
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  font-family: 'DingTalk Sans', sans-serif;
  transition: color 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
  background: #f8f9fa;
}

.link:hover {
  color: #0056b3;
  background: #e9ecef;
}

/* Footer Content */
.footer-content {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr;
  gap: 40px;
  align-items: start;
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

/* Contact Section */
.contact-section {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.logo-container {
  flex-shrink: 0;
}

.project-logo {
  height: 80px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-text {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'DingTalk Sans', sans-serif;
}

.email-link {
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  font-family: 'DingTalk Sans', sans-serif;
  font-weight: 550;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: #0056b3;
}

/* Legal Section */
.legal-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.legal-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'DingTalk Sans', sans-serif;
}

.legal-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.legal-link {
  font-size: 16px;
  color: #666;
  text-decoration: none;
  font-family: 'DingTalk Sans', sans-serif;
  transition: color 0.3s ease;
  padding: 4px 0;
}

.legal-link:hover {
  color: #007bff;
}

/* Community Section */
.community-section {
  display: flex;
  justify-content: center;
}

.community-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.community-text {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'DingTalk Sans', sans-serif;
}

.qr-code {
  height: 80px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 20px;
  }

  .links-list {
    gap: 16px;
  }

  .link {
    font-size: 16px;
    padding: 6px 12px;
  }

  .footer-content {
    gap: 24px;
  }

  .contact-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  .project-logo {
    height: 60px;
  }

  .qr-code {
    height: 60px;
  }

  .contact-text,
  .email-link,
  .community-text {
    font-size: 16px;
  }

  .legal-title {
    font-size: 18px;
  }
}
</style>


