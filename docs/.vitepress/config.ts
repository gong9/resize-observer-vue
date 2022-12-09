import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'resize-observer-vue',
  base: process.env.NODE_ENV === 'production' ? '/resize-observer-vue/' : '/',
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Guide', link: '/guide' },
        ],
      },
      {
        text: 'Component',
        items: [

          { text: 'Component', link: '/example' },
        ],
      }],
  },
})
