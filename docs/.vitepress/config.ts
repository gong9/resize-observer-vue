import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress',
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
