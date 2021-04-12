module.exports = {
  title: 'ReeCode',
  description: 'Ree的前端博客',
  sidebarDepth: 2,
  lastUpdated: 'Last Updated',
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3],
    },
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/blog',
  ],
  theme: 'reco',
  themeConfig: {
    author: 'ReeCode',
    mode: 'light',
    type: 'blog',
    modePicker: false,
    subSidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '博文',
        items: [
          { text: '前端', link: '/front/' },
          { text: '面试', link: '/interview/' },
        ],
      },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/ReeCode' },
    ],
    // sidebar: {
    //   '/front/': ['', ''],
    //   '/interview/': ['', ''],
    // },
    friendLink: [
      {
        title: 'masaka',
        desc: 'Sth Funny',
        logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://masaka.acehalo.com/',
      },
    ],
  },
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category', // 默认文案 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag', // 默认文案 “标签”
    },
  },
}
