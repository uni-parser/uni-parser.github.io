<script lang="ts" setup>

import { ElIcon } from 'element-plus'
import { Document, Files, MagicStick, Picture, DataAnalysis, Film } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import projectLogo from '@/assets/small_images/project_logo_v3.png'
import iconFangxi from '@/assets/small_images/icon_fangxi.png'
import iconTaohaoyi from '@/assets/small_images/icon_taohaoyi.png'
import iconYangsw from '@/assets/small_images/icon_yangsw.png'
import iconZhongsuyang from '@/assets/small_images/icon_zhongsuyang.png'
import iconLuhaocheng from '@/assets/small_images/icon_luhaocheng.png'
import iconLvhan from '@/assets/small_images/icon_lvhan.jpeg'
import iconHuangchaozheng from '@/assets/small_images/icon_huangchaozheng.jpeg'
import iconKeguolin from '@/assets/small_images/icon_keguolin.png'
import iconWangjunjie from '@/assets/small_images/icon_wangjunjie.png'
import blueImg from '@/assets/small_images/icon_blue.png'

const { t } = useI18n()

// Uni-Parser 主页链接
const homepageLink = 'https://uniparser.dp.tech/'

// logo地址，没有则置为""即可
const logo = projectLogo

// 标题
const title = 'Uni-Parser'

// 标题颜色
const title_color = '#000000'

// 标题补充，没有则置为''即可
const title_supp = ''

// 标题补充颜色
const title_supp_color = '#42B883'

// 按钮颜色
const btn_color = '#444444'

// 作者清单
const authors = [
  {
    name: "Xi Fang",
    icon: iconFangxi,
    homepage: "fangxi@dp.tech",
    address_flag: "1"
  },
  {
    name: "Haoyi Tao",
    icon: iconTaohaoyi,
    homepage: "taohaoyi@dp.tech",
    address_flag: "1"
  },
  {
    name: "Shuwen Yang",
    icon: iconYangsw,
    homepage: "yangsw@dp.tech",
    address_flag: "1"
  },
  {
    name: "Chaozheng Huang",
    icon: iconHuangchaozheng,
    homepage: "huangchaozheng@dp.tech",
    address_flag: "1"
  },
  {
    name: "Junjie Wang",
    icon: iconWangjunjie,
    homepage: "wangjunjie@dp.tech",
    address_flag: "1"
  },
]

// 作者清单
const authors2 = [
  {
    name: "Suyang Zhong",
    icon: iconZhongsuyang,
    homepage: "zhongsuyang@dp.tech",
    address_flag: "1"
  },
  {
    name: "Haocheng Lu",
    icon: iconLuhaocheng,
    homepage: "luhaocheng@dp.tech",
    address_flag: "1"
  },
  {
    name: "Han Lyu",
    icon: iconLvhan,
    homepage: "lvhan@dp.tech",
    address_flag: "1"
  },
  {
    name: "Guolin Ke",
    icon: iconKeguolin,
    homepage: "kegl@dp.tech",
    address_flag: "1,*"
  },
]

// 单位
const affiliations = [
  "1: DP Technology",
]

// 共一和通讯提示
const con_and_corresponding_author = 
  "*: Corresponding Contributor."

// // 最新消息
// const news = "🔥 [2025-10-27] Uni-Parser is in beta test!"

// 强调内容
const emphases = [
  'title.emphases.0',
  'title.emphases.1'
]

// 提供引导资料链接
const buttons = [
  {
    disabled: true,
    name: "title.buttons.paper",
    component: Document,
  },
  {
    disabled: true,
    name: "title.buttons.chinese",
    component: Document,
  },
  {
    disabled: false,
    name: "title.buttons.code",
    link: "https://www.dp.tech/",
    component: Files,
  },
  {
    disabled: false,
    name: "title.buttons.demo",
    link: "https://www.dp.tech/",
    component: MagicStick,
  },
  {
    disabled: true,
    name: "title.buttons.poster",
    component: Picture,
  },
  {
    disabled: true,
    name: "title.buttons.slide",
    component: DataAnalysis,
  },
  {
    disabled: false,
    name: "title.buttons.video_intro",
    link: "https://www.dp.tech/",
    component: Film,
  },
  {
    disabled: false,
    name: "title.buttons.video_tutorial",
    link: "https://www.dp.tech/",
    component: Film,
  },
]

</script>

<template>
  <section class="title-section">

    <!-- 最新消息提示 -->
    <div class="title-alert">
      <el-alert type="success" :closable="false">
        <template #title>
          <span>{{ t('title.news') }}</span>
          <a :href="homepageLink" target="_blank" rel="noopener noreferrer" class="news-link">{{ t('title.news_link') }}</a>
        </template>
      </el-alert>
    </div>

    <!-- 文章标题 -->
    <div class="title-content" v-reveal>
      <h1 class="paper-title">
        <span v-if="title" :style="{color:title_color}">
          <el-image v-if="logo" :src="logo" class="logo_in_title" fit="contain" style="vertical-align: bottom; height: 2.0em; margin-right: 0em;" />
          {{ title }}
        </span>
        <span v-if="title_supp" :style="{color:title_supp_color}"> {{ title_supp }}</span>
      </h1>
    </div>

    <!-- 作者名单 -->
    <div class="title-authors">
      <a :href="'mailto:' + author.homepage" v-for="author in authors" :key="author.name">
        <el-button class="title-button hover-lift" type="primary" text v-reveal="{ animation: 'fade-up' }" v-tilt>
          <el-avatar v-if="author.icon" :size="32" :src="author.icon" />
          <span class="author">
            {{ t(author.name) }}<sup v-if="author.address_flag" class="name_sup">{{ author.address_flag }}</sup>
          </span>
        </el-button>
      </a>
    </div>

    <div class="title-authors2">
      <a :href="'mailto:' + address.homepage" v-for="address in authors2" :key="address.name">
        <el-button class="title-button hover-lift" type="primary" text v-reveal v-tilt>
          <el-avatar v-if="address.icon" :size="32" :src="address.icon" />
          <span class="address">
            {{ t(address.name) }}<sup v-if="address.address_flag" class="address_sup">{{ address.address_flag }}</sup>
          </span>
        </el-button>
      </a>
    </div>

    <!-- 共一和通讯提示内容 -->
    <div class="title-contribution" v-reveal>
      <span v-for="(aff, index) in affiliations" :key="index">
        <sup class="name_sup">{{ aff.split(':')[0] }}</sup>{{ aff.split(':')[1] }}<span v-if="index < affiliations.length - 1">, </span>
      </span>
    </div>
    <div class="title-contribution" v-reveal>
      <span v-if="con_and_corresponding_author.includes(':')">
        <sup class="name_sup">{{ con_and_corresponding_author.split(':')[0] }}</sup>{{ con_and_corresponding_author.split(':')[1] }}
      </span>
      <span v-else>{{ con_and_corresponding_author }}</span>
    </div>

    <!-- 强调内容 -->
    <!-- <div class="title-emphasis" v-for="emphasis in emphases" :key="emphasis" v-reveal>
        {{ t(emphasis) }}
    </div> -->

    <!-- 提供引导按钮 -->
    <!-- <div class="title-buttons">
      <div class="title-buttons-inner">
        <a :href=button.link v-for="button in buttons" :key="button.name">
          <el-button class="guidance-button hover-lift" size="default" :color="btn_color" :disabled="button.disabled" round v-tilt v-reveal>
            <el-icon :size="18">
              <component :is="button.component" />
            </el-icon>
            <span class="btn-text">{{ t(button.name) }}</span>
          </el-button>
        </a>
      </div>
    </div> -->

  </section>
</template>

<style scoped>
.title-section {
  padding: 4rem 0rem 4rem;
  background: #ffffff;
  max-width: 1400px;
  margin: 0 auto;
}

/* Modern title styling */
.paper-title {
  font-family: "MyFont", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 0.5px;
  font-size: clamp(2.0rem, 4.0vw, 3.5rem);
  margin: 1.5rem 0;
  text-align: center;
  line-height: 1.2;
  font-weight: 700;
  background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Modern author and address buttons */
.title-button {
  margin: 0.25rem 0.25rem;
  /* padding: 0.75rem 1.25rem; */
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.title-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
  background: rgba(255, 255, 255, 0.95);
}

/* Guidance buttons */
.guidance-button {
  margin: 0.5rem 0.75rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: #0f172a;
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.3);
  border: none;
}

.guidance-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.35);
  background: #1e293b;
}

/* Author and address text */
.author, .address {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  margin-left: 0.5rem;
}

.name_sup, .address_sup {
  color: #2563eb;
  font-weight: 600;
  margin: 0 0.25rem;
}

/* Modern avatar styling */
.el-avatar {
  margin-right: 0.75rem;
  border: none;
  transition: all 0.3s ease;
}

.el-avatar:hover {
  transform: scale(1.05);
}

/* Contribution and corresponding author text */
.title-contribution {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1rem;
  text-align: center;
  color: #666;
  font-weight: 400;
  margin: 0.5rem 0;
}

/* Emphasis styling */
.emphasis {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(15, 23, 42, 0.06) 100%);
  color: #2563eb;
  font-weight: 600;
  margin: 0rem 0;
  font-size: 1.25rem;
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: 12px;
  border-left: 4px solid #2563eb;
}

/* Button text */
.btn-text {
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
}

/* Title section inner elements */
.title-alert,
.title-content,
.title-authors,
.title-authors2 {
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.title-content {
  margin: 1.5rem 0;
}

.title-authors,
.title-authors2 {
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
}

/* Modern alert styling */
.title-alert .el-alert {
  margin: 0;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(15, 23, 42, 0.06) 100%);
  color: #2563eb;
}

.el-alert .el-alert__title {
  font-weight: 600;
}

.news-link {
  margin-left: 0.75rem;
  font-weight: 700;
  text-decoration: underline;
}

/* Logo styling */
.logo {
  width: 180px;
  height: 180px;
  border-radius: 12px;
  margin-top: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: translateY(-4px);
}

.logo_small {
  width: 90px;
  height: 90px;
}

.logo_in_title {
  width: 140px;
  height: 140px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

/* Link styling override */
a:-webkit-any-link {
  text-decoration: none;
}

a:hover {
  color: #1d4ed8;
  border-bottom: none;
  text-decoration: none;
}

a {
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

/* Responsive design */
@media (max-width: 768px) {
  .title-section {
    padding: 2rem 1rem;
  }

  .title-authors,
  .title-authors2 {
    gap: 0.25rem;
    padding: 0 0.5rem;
  }

  .title-button {
    margin: 0.25rem;
    padding: 0.4rem 0.75rem;
    height: auto;
    width: auto;
  }

  .el-button :deep(.el-avatar) {
    width: 28px !important;
    height: 28px !important;
    margin-right: 0.5rem;
  }

  .paper-title {
    font-size: 1.75rem;
    margin: 1rem 0;
    padding: 0 0.5rem;
  }

  .author, .address {
    font-size: 0.85rem;
  }

  .logo_in_title {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .paper-title {
    font-size: 1.5rem;
  }
  
  .title-button {
    width: 100%;
    justify-content: flex-start;
  }
}

</style>
