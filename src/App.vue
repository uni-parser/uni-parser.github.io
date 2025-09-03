<script>

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Main,
    Footer,
  }
}

</script>

<template>
    <div>
      
      <el-container>
        <el-header><Header/></el-header>
        <el-main><Main/></el-main>
        <el-footer><Footer/></el-footer>
      </el-container>
      
      <!-- 回到顶部 -->
      <el-backtop :right="40" :bottom="80" />
    </div>
</template>

<style>

/* Modern, clean typography */
h1, h2, h3, h4, h5, h6 {
  font-family: "MyFont", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  letter-spacing: 0.5px;
  margin: 0;
  font-weight: 600;
  color: #1a1a1a;
}

h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
}

p, li {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  font-weight: 400;
}

/* Remove all borders and shadows from Element Plus components */
.el-header, .el-footer, .el-main {
  padding: 0;
  border: none !important;
  box-shadow: none !important;
}

.el-container {
  border: none !important;
  box-shadow: none !important;
}

/* Modern code styling - borderless */
code {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  border-radius: 6px;
  padding: 0.2rem 0.4rem;
  background: rgba(0, 0, 0, 0.05);
  color: #d63384;
  font-size: 0.9em;
  border: none;
}

pre {
  border-radius: 8px;
  padding: 1.5rem;
  background: #f8f9fa;
  line-height: 1.5;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

pre code {
  background: transparent;
  padding: 0;
  color: inherit;
  border: none;
}

/* Modern blockquote styling */
blockquote {
  border-left: 4px solid #667eea;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: 0 8px 8px 0;
  position: relative;
}

blockquote > p {
  margin: 0;
  font-style: italic;
  color: #555;
}

/* Modern link styling */
a {
  color: #667eea;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
}

a:hover {
  color: #764ba2;
  text-decoration: none;
}

a:hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1px;
}

/* Modern image styling */
p > img {
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

p > img:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* Borderless table styling */
table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin: 2rem auto;
  display: block;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

thead {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

thead th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border: none;
}

tbody tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease;
}

tbody tr:hover {
  background: rgba(102, 126, 234, 0.02);
}

tbody tr:last-child {
  border-bottom: none;
}

th, td {
  padding: 1rem;
  border: none;
}

.katex-display {
  overflow-x: auto;
  overflow-y: hidden;
}

/* Enhanced animation utilities */
.reveal {
  opacity: 0;
  transform: var(--reveal-transform, translateY(30px));
  transition: opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: opacity, transform;
}

.reveal-visible {
  opacity: 1;
  transform: none;
}

/* Enhanced hover effects */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

/* Remove Element Plus component borders globally */
.el-card {
  border: none !important;
  box-shadow: none !important;
  transition: all 0.3s ease;
}

.el-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

.el-button {
  border: none !important;
  transition: all 0.3s ease;
}

.el-menu {
  border: none !important;
  box-shadow: none !important;
}

.el-alert {
  border: none !important;
  border-radius: 8px;
}

/* Responsive design */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  .el-main {
    padding: 0 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal-visible,
  .hover-lift,
  * {
    transition: none !important;
    transform: none !important;
  }
}

</style>