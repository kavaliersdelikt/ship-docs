import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ship Docs",
  description: "Ship Pterodactyl Client Dashboard Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/get-started' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Webserver', link: '/webserver' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
