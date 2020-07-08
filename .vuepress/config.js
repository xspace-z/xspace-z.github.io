module.exports = {
  host: 'localhost',
  port: 8000,
  dest: './docs',
  base: '/',
  title: 'XSpace',
  description: 'Welcome',
  themeConfig: {
    search: false,
    sidebar: 'auto',
    nav: [
    ],
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    // '@vuepress/pagination',
    // '@vuepress/active-header-links',
    // ['@vuepress/plugin-blog', {postsDir: 'blog'}],
  ],
}
