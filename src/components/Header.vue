<script lang="ts" setup>

import { ElIcon } from 'element-plus'
import { HomeFilled, SuccessFilled } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 左侧 LOGO 与首页跳转
const logo = { name: "Uni-Parser", link: "#home" }

// 顶部导航
const nav = [
  { key: 'home', label: 'header.home', href: '#home' },
  { key: 'core', label: 'header.core', href: '#core' },
  { key: 'report', label: 'header.report', href: '#report' },
  { key: 'demo', label: 'header.demo', href: '#demo' },
  { key: 'applications', label: 'header.applications', href: '#applications' },
  { key: 'partners', label: 'header.partners', href: '#partners' }
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
            <el-icon :size="20"><SuccessFilled /></el-icon>
            <a :href="logo.link">{{ logo.name }}</a>
        </el-menu-item>

        <!-- 导航项 -->
        <template v-for="item in nav" :key="item.key">
          <el-menu-item :index="item.key">
            <a :href="item.href">{{ t(item.label) }}</a>
          </el-menu-item>
        </template>

        <!-- 右侧占位，将语言切换顶到右侧 -->
        <div style="margin-right: auto;"></div>

        <!-- 语言切换 -->
        <el-sub-menu index="lang">
          <template #title>{{ t('header.language') }}</template>
          <el-menu-item v-for="l in languages" :key="l.key" :index="'lang-' + l.key" @click="changeLanguage(l.key)">{{ t(l.label) }}</el-menu-item>
        </el-sub-menu>

    </el-menu>
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
	padding: 0 1.5rem;
	border-radius: 8px;
	margin: 0 0.25rem;
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

/* Responsive enhancements */
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
.el-menu--horizontal > .el-menu-item:nth-child(2) {
    margin-right: auto;
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

  