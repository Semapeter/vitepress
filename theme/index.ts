// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './blur.css'
import './marker.css'
// import { HomeUnderline } from '@theojs/lumen'
// import { Announcement } from '@theojs/lumen'
// theme/index.ts
import '@theojs/lumen/theme'
// import './var.css'


export default {
  extends: DefaultTheme,
  
  
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 'home-hero-info-before': () => h(Announcement) 
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
    
  },
  enhanceApp({ app, router, siteData }) {
    // app.component('Home', HomeUnderline)
    // ...
  },
  
} satisfies Theme

