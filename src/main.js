import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import i18n from './i18n'

import "@/assets/font/font.css"
import App from './App.vue'
const app = createApp(App)

// Reveal-on-scroll directive
app.directive('reveal', {
  mounted(el, binding) {
    const options = typeof binding.value === 'string' ? { animation: binding.value } : (binding.value || {})
    const animation = options.animation || 'fade-up'
    const threshold = options.threshold ?? 0.15
    const rootMargin = options.rootMargin || '0px'
    const repeat = options.repeat === true
    const delay = options.delay || 0

    // initial styles
    el.classList.add('reveal')
    if (delay) {
      el.style.transitionDelay = typeof delay === 'number' ? `${delay}ms` : String(delay)
    }

    const setVariant = (name) => {
      switch (name) {
        case 'fade-left':
          el.style.setProperty('--reveal-transform', 'translateX(-24px)')
          break
        case 'fade-right':
          el.style.setProperty('--reveal-transform', 'translateX(24px)')
          break
        case 'fade-up':
          el.style.setProperty('--reveal-transform', 'translateY(24px)')
          break
        case 'fade-down':
          el.style.setProperty('--reveal-transform', 'translateY(-24px)')
          break
        case 'zoom-in':
          el.style.setProperty('--reveal-transform', 'scale(.96)')
          break
        default:
          el.style.setProperty('--reveal-transform', 'translateY(20px)')
      }
    }
    setVariant(animation)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
        } else if (repeat) {
          el.classList.remove('reveal-visible')
        }
      })
    }, { threshold, rootMargin })

    observer.observe(el)
    el.__revealObserver__ = observer
  },
  unmounted(el) {
    if (el.__revealObserver__) {
      el.__revealObserver__.disconnect()
      delete el.__revealObserver__
    }
  }
})

// Lightweight parallax directive
app.directive('parallax', {
  mounted(el, binding) {
    const opts = binding.value || {}
    const speed = typeof opts === 'number' ? opts : (opts.speed ?? 0.3)
    const max = opts.max ?? 60 // px

    let frameRequested = false
    const onScroll = () => {
      if (frameRequested) return
      frameRequested = true
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight || document.documentElement.clientHeight
        // progress: 0 (below) -> 1 (above)
        const progress = Math.min(1, Math.max(0, 1 - (rect.top / vh)))
        const translate = ((progress - 0.5) * 2) * max * speed
        el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`
        frameRequested = false
      })
    }
    el.__parallaxScroll__ = onScroll
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
  },
  unmounted(el) {
    if (el.__parallaxScroll__) {
      window.removeEventListener('scroll', el.__parallaxScroll__)
      window.removeEventListener('resize', el.__parallaxScroll__)
      delete el.__parallaxScroll__
    }
  }
})

// Subtle 3D tilt on pointer move
app.directive('tilt', {
  mounted(el, binding) {
    const maxTilt = (binding.value && binding.value.max) || 10
    const scale = (binding.value && binding.value.scale) || 1.0
    el.style.transformStyle = 'preserve-3d'
    el.style.transition = 'transform 180ms ease-out'
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      const rx = (-dy * maxTilt).toFixed(2)
      const ry = (dx * maxTilt).toFixed(2)
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`
    }
    const onLeave = () => {
      el.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)`
    }
    el.__tiltMove__ = onMove
    el.__tiltLeave__ = onLeave
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
  },
  unmounted(el) {
    if (el.__tiltMove__) {
      el.removeEventListener('pointermove', el.__tiltMove__)
      el.removeEventListener('pointerleave', el.__tiltLeave__)
      delete el.__tiltMove__
      delete el.__tiltLeave__
    }
  }
})

app.use(ElementPlus)
app.use(i18n)
app.mount('#app')