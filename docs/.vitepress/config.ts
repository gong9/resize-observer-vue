import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'resize-observer-vue',
  base: '.',
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
