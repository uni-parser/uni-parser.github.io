<script lang="ts" setup>

import { ElIcon, ElDrawer } from 'element-plus'
import { HomeFilled, SuccessFilled, Promotion, Menu } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t, locale } = useI18n()
const isMobileMenuOpen = ref(false)

// 左侧 LOGO 与首页跳转
const logo = { name: "Uni-Parser", link: "#home" }

// 顶部导航
const nav = [
  { key: 'home', label: 'header.home', href: '#home' },
  { key: 'core', label: 'header.core', href: '#core' },
  { key: 'applications', label: 'header.applications', href: '#applications' },
  { key: 'partners', label: 'header.partners', href: '#partners' }
]

// 外部链接（跳转到新页面）
const externalLinks = [
  { key: 'report', label: 'header.report', href: 'https://arxiv.org/abs/2512.15098' },
  { key: 'demo', label: 'header.demo', href: 'https://uniparser.dp.tech/' },
  { key: 'api tools', label: 'header.api_tools', href: 'https://uniparser.dp.tech/' }
]

// 语言切换
const languages = [ { key: 'zh', label: 'header.chinese' }, { key: 'en', label: 'header.english' } ]

function changeLanguage(lang) {
  locale.value = lang
  localStorage.setItem('language', lang)
}

</script>

<template>
    <!-- 设置页首始终悬浮顶部 -->
    <el-affix :offset="0" :style="{width: '100%'}">
    
    <!-- 水平导航目录 -->
    <el-menu 
        default-active="home"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
    >
        <!-- LOGO / 首页 -->
        <el-menu-item :index="logo.link">
            <span class="logo-text">{{ logo.name }}</span>
        </el-menu-item>

        <!-- 导航项 (Desktop) -->
        <template v-for="item in nav" :key="item.key">
          <el-menu-item :index="item.key" class="hidden-sm-and-down">
            <a :href="item.href">{{ t(item.label) }}</a>
          </el-menu-item>
        </template>

        <!-- 右侧占位，将语言切换顶到右侧 -->
        <div class="flex-grow"></div>

        <!-- 外部链接 (Desktop) -->
        <template v-for="item in externalLinks" :key="item.key">
          <el-menu-item :index="item.key" class="external-link-item hidden-sm-and-down" style="padding-left: 1rem; padding-right: 0rem;">
            <a :href="item.href" target="_blank" rel="noopener noreferrer">
              {{ t(item.label) }}
              <el-icon class="external-icon"><Promotion /></el-icon>
            </a>
          </el-menu-item>
        </template>

        <!-- 语言切换 (Desktop) -->
        <el-sub-menu index="lang" class="hidden-sm-and-down">
          <template #title>{{ t('header.language') }}</template>
          <el-menu-item v-for="l in languages" :key="l.key" :index="'lang-' + l.key" @click="changeLanguage(l.key)">{{ t(l.label) }}</el-menu-item>
        </el-sub-menu>

        <!-- Mobile Menu Toggle -->
        <el-menu-item class="hidden-md-and-up mobile-toggle" @click="isMobileMenuOpen = true">
          <el-icon :size="24"><Menu /></el-icon>
        </el-menu-item>

    </el-menu>

    <!-- Mobile Drawer -->
    <el-drawer
      v-model="isMobileMenuOpen"
      direction="rtl"
      size="280px"
      :with-header="false"
      class="mobile-drawer"
    >
      <div class="mobile-nav">
        <div class="mobile-nav-header">
          <el-icon :size="24" color="#667eea"><SuccessFilled /></el-icon>
          <span class="mobile-logo-text">{{ logo.name }}</span>
        </div>
        
        <div class="mobile-nav-items">
          <a v-for="item in nav" :key="item.key" :href="item.href" class="mobile-nav-link" @click="isMobileMenuOpen = false">
            {{ t(item.label) }}
          </a>
          
          <div class="mobile-nav-divider"></div>
          
          <a v-for="item in externalLinks" :key="item.key" :href="item.href" target="_blank" class="mobile-nav-link external" @click="isMobileMenuOpen = false">
            {{ t(item.label) }}
            <el-icon><Promotion /></el-icon>
          </a>
          
          <div class="mobile-nav-divider"></div>
          
          <div class="mobile-lang-section">
            <span class="mobile-lang-label">{{ t('header.language') }}</span>
            <div class="mobile-lang-options">
              <span 
                v-for="l in languages" 
                :key="l.key" 
                :class="['mobile-lang-option', { active: locale === l.key }]"
                @click="changeLanguage(l.key)"
              >
                {{ t(l.label) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
    </el-affix>
</template>

<style>

/* Clean and simple navigation background */
.el-menu {
	background: rgba(255, 255, 255, 0.95);
	backdrop-filter: blur(10px);
	border: none;
	box-shadow: none;
	transition: all 0.3s ease;
	position: relative;
}

/* Clean fixed header */
.el-affix--fixed {
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
	background: rgba(255, 255, 255, 0.98);
	backdrop-filter: blur(10px);
	border-bottom: 1px solid #f0f0f0;
}

/* Menu items styling with enhanced effects */
.el-menu-item {
	border: none !important;
	transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	font-weight: 500;
	font-size: 1rem;
	/* padding-left: 1rem;
	padding-right: 0rem; */
	border-radius: 8px;
	/* margin: 0 0.25rem; */
	position: relative;
	z-index: 1;
}

.el-menu-item:hover {
	background: rgba(0, 0, 0, 0.02) !important;
	color: #667eea !important;
}

.el-menu-item.is-active {
	background: rgba(0, 0, 0, 0.03) !important;
	color: #667eea !important;
	font-weight: 600;
}

/* Sub menu styling with modern look */
.el-sub-menu {
	border: none;
}

.el-sub-menu__title {
	border: none !important;
	transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	font-weight: 500;
	padding: 0 1rem;
	border-radius: 8px;
	margin: 0 0.25rem;
	position: relative;
	z-index: 1;
}

.el-sub-menu__title:hover {
	background: rgba(0, 0, 0, 0.02) !important;
	color: #667eea !important;
}

/* Simple dropdown menu styling */
.el-menu--popup {
	min-width: 140px;
	border: none !important;
	border-radius: 8px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	background: rgba(255, 255, 255, 0.98);
	backdrop-filter: blur(10px);
	margin-top: 8px;
	padding: 0.5rem 0;
	border: 1px solid #f0f0f0;
}

.el-menu--popup .el-menu-item {
	padding: 0.875rem 1.25rem;
	border: none;
	font-size: 0.95rem;
	transition: all 0.2s ease;
	border-radius: 6px;
	margin: 0.125rem 0.5rem;
	font-weight: 500;
}

.el-menu--popup .el-menu-item:hover {
	background: rgba(0, 0, 0, 0.02) !important;
	color: #667eea !important;
}

/* Header height and spacing */
.el-header {
    --el-header-height: 64px;
    border: none;
}

/* Enhanced logo styling with animation */
.el-menu-item .el-icon {
	font-size: 1.3rem;
	margin-right: 0.5rem;
	color: #667eea;
	transition: all 0.3s ease;
}

.el-menu-item:hover .el-icon {
	color: #764ba2;
	transform: scale(1.1);
}

/* First menu item (logo) special styling */
.el-menu-item:first-child {
	font-weight: 600;
	font-size: 1.1rem;
}

.el-menu-item:first-child:hover {
	background: rgba(0, 0, 0, 0.02) !important;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .hidden-sm-and-down {
    display: none !important;
  }
}

@media (min-width: 992px) {
  .hidden-md-and-up {
    display: none !important;
  }
}

.mobile-toggle {
  padding: 0 1rem !important;
}

.logo-text {
  font-weight: 600;
  font-size: 1.1rem;
  color: #1a1a1a;
}

/* Mobile Drawer Styles */
.mobile-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 1.5rem;
}

.mobile-logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-nav-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-link {
  font-size: 1.1rem;
  font-weight: 500;
  color: #444;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-nav-link:hover {
  background: rgba(102, 126, 234, 0.05);
  color: #667eea;
}

.mobile-nav-link.external {
  color: #667eea;
}

.mobile-nav-divider {
  height: 1px;
  background: #f0f0f0;
  margin: 1rem 0;
}

.mobile-lang-section {
  padding: 0.75rem 1rem;
}

.mobile-lang-label {
  display: block;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mobile-lang-options {
  display: flex;
  gap: 1rem;
}

.mobile-lang-option {
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #e8eaed;
  transition: all 0.2s ease;
}

.mobile-lang-option.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

@media (max-width: 768px) {
	.el-menu-item {
		padding: 0 1rem;
		font-size: 0.9rem;
	}

	.el-sub-menu__title {
		padding: 0 0.75rem;
		font-size: 0.9rem;
	}

	.el-menu--popup {
		min-width: 120px;
	}
}

</style>

<style scoped>

/* 水平导航左右分区 */
.flex-grow {
  flex-grow: 1;
}

/* 外部链接项样式 */
.external-link-item {
  margin-left: 0.5rem !important;
  background-color: rgba(102, 126, 234, 0.05) !important;
  border: 0px solid rgba(102, 126, 234, 0.2) !important;
  border-radius: 8px !important;
  height: 36px !important;
  line-height: 36px !important;
  margin-top: 7px; /* (50px - 36px) / 2 */
  /* transition: all 0.3s ease !important; */
}

.external-link-item:hover {
  background-color: rgba(102, 126, 234, 0.1) !important;
  /* border-color: rgba(102, 126, 234, 0.4) !important; */
  border: 3px solid rgba(102, 126, 234, 0.2) !important;
  /* transform: translateY(-1px); */
}

.external-link-item a {
  display: flex;
  align-items: center;
  color: #667eea !important;
  font-weight: 600 !important;
  padding: 0 4px;
}

.external-icon {
  margin-left: 4px;
  font-size: 14px;
}

/* 水平导航高度 */
.el-menu--horizontal {
    --el-menu-horizontal-height: 50px;
}

/* 取消鼠标焦点悬浮在链接上的颜色装饰 */
a:hover {
  color: inherit;
  border-bottom: none;
}

/* 链接装饰，取消下划线和链接颜色 */
a {
	text-decoration: None;
	color: inherit;
}

</style>

  