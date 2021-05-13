module.exports = {
  title: 'Yu Blog',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    smoothScroll: true,
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/yuruihuaa',
        },
        {
          type: 'video',
          link: 'https://space.bilibili.com/322365128',
        },
      ],
      copyright: [
        {
          text: 'VuePress',
          link: 'https://github.com/vuejs/vuepress',
        },
        {
          text: 'Blog Theme',
          link: 'https://github.com/vuepress/vuepress-theme-blog',
        },
      ],
    },
  }
}