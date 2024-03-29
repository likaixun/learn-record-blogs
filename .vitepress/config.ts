import type { Config as ThemeConfig } from '@vue/theme'
import { DefaultTheme } from 'vitepress'

import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'
import testContain from './testContain'

export const sidebar: ThemeConfig['sidebar'] = {
  '/vitepress/': [
    {
      text: '配置',
      items: [
        { text: '介绍', link: '/vitepress/introduction' },
        { text: '默认主题设置', link: '/vitepress/themeConfig' },
        { text: '应用设置', link: '/vitepress/appConfig' },
        {
          text: 'frontmatter设置',
          link: '/vitepress/frontmatter'
        },
        { text: '自带组件', link: '/vitepress/internalComponent' }
      ]
    },
    {
      text: '使用',
      items: [{ text: 'markdown编写', link: '/vitepress/markdown' }]
    }
  ],
  '/vue3/': [
    {
      text: '组合式语法',
      items: [{ text: 'markdown编写', link: '/vue3/test' }]
    }
  ]
}
const i18n: ThemeConfig['i18n'] = {
  search: '搜索',
  menu: '菜单',
  toc: '本页目录',
  returnToTop: '返回顶部',
  appearance: '外观',
  previous: '前一篇',
  next: '下一篇',
  pageNotFound: '页面未找到',
  deadLink: {
    before: '你打开了一个不存在的链接：',
    after: '。'
  },
  deadLinkReport: {
    before: '不介意的话请提交到',
    link: '这里',
    after: '，我们会跟进修复。'
  },
  footerLicense: {
    before: '',
    after: ''
  },
  ariaDarkMode: '切换深色模式',
  ariaSkipToContent: '直接跳到内容',
  ariaToC: '当前页面的目录',
  ariaMainNav: '主导航',
  ariaMobileNav: '移动版导航',
  ariaSidebarNav: '侧边栏导航'
}

export default defineConfigWithTheme<DefaultTheme.Config | ThemeConfig>({
  extends: baseConfig,
  // base: '/note/',
  title: 'learn-record',
  description: 'learn note, blogs',
  lang: 'zh-CN',
  srcDir: 'src',
  scrollOffset: 'header',
  themeConfig: {
    nav: [
      {
        text: 'vitepress',
        link: '/vitepress/introduction'
      }
    ],
    logo: '/icon_learning.png',
    siteTitle: '学习笔记',
    i18n,
    sidebar,
    algolia: {
      indexName: 'vuejs_cn2',
      appId: 'UURH1MHAF7',
      apiKey: 'c23eb8e7895f42daeaf2bf6f63eb4bf6',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    }
  },
  markdown: {
    config(md) {
      testContain(md)
    }
  }
})
