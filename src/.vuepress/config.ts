import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default {
  title: 'Game Development with Ren’Py',
  description: 'Разработка новелл при помощи Ren`Py, TyranoBuilder и Twine',
  dest: 'docs',
  base: '/book-game-development-renpy/',
  theme: defaultTheme({
    colorModeSwitch: false,
    sidebarDepth: 2,
    sidebar: {
      '/': [
        '/',
        'chapter_1',
        'chapter_2',
        'chapter_3',
        'chapter_4',
        'chapter_5',
        'chapter_6',
        'chapter_7',
        'chapter_8',
        'sources'
      ],
    },
    lastUpdated: false,
    contributors: false
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-8EXMHZ6J0P'
    })
  ]
}