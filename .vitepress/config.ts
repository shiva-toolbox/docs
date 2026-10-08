import { defineConfig } from 'vitepress';
import { INVITE_URL } from '../lib/links';

const enGuide = '/guide/quick-start';
const ptGuide = '/pt/guide/quick-start';

const copyright = 'Copyright © 2026 Shiva Toolbox';

function topNav(guideHref: string, docsLabel: string) {
  return [
    ...(INVITE_URL
      ? [{ text: 'Invite', link: INVITE_URL, target: '_blank', rel: 'noreferrer' }]
      : []),
    { text: docsLabel, link: guideHref },
  ];
}

export default defineConfig({
  title: 'Shiva Toolbox',
  srcDir: 'src',
  cleanUrls: true,
  lastUpdated: false,
  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/shiva-toolbox/shiva-toolbox' }],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description:
        'Documentation for Shiva Toolbox, a Discord bot for autorole, join and leave messages, and Twitch live alerts.',
      themeConfig: {
        nav: topNav(enGuide, 'Documentation'),
        sidebar: [
          {
            text: 'Introduction',
            collapsed: false,
            items: [
              { text: 'Quick start', link: '/guide/quick-start' },
              { text: 'Language', link: '/guide/language' },
            ],
          },
          {
            text: 'Roles',
            collapsed: false,
            items: [{ text: 'Autorole', link: '/guide/autorole' }],
          },
          {
            text: 'Messages',
            collapsed: false,
            items: [{ text: 'Join and leave', link: '/guide/join-leave' }],
          },
          {
            text: 'Alerts',
            collapsed: false,
            items: [
              { text: 'Twitch', link: '/guide/twitch' },
            ],
          },
          {
            text: 'Project',
            collapsed: false,
            items: [{ text: 'Roadmap', link: '/guide/roadmap' }],
          },
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright,
        },
      },
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      link: '/pt/',
      description:
        'Documentação do Shiva Toolbox, bot do Discord para autocargo, mensagens de entrada e saída e alertas de live da Twitch.',
      themeConfig: {
        nav: topNav(ptGuide, 'Documentação'),
        sidebar: [
          {
            text: 'Introdução',
            collapsed: false,
            items: [
              { text: 'Início rápido', link: '/pt/guide/quick-start' },
              { text: 'Idioma', link: '/pt/guide/language' },
            ],
          },
          {
            text: 'Cargos',
            collapsed: false,
            items: [{ text: 'Autocargo', link: '/pt/guide/autorole' }],
          },
          {
            text: 'Mensagens',
            collapsed: false,
            items: [{ text: 'Entrada e saída', link: '/pt/guide/join-leave' }],
          },
          {
            text: 'Alertas',
            collapsed: false,
            items: [
              { text: 'Twitch', link: '/pt/guide/twitch' },
            ],
          },
          {
            text: 'Projeto',
            collapsed: false,
            items: [{ text: 'Roadmap', link: '/pt/guide/roadmap' }],
          },
        ],
        footer: {
          message: 'Disponível sob a licença MIT.',
          copyright,
        },
      },
    },
  },
});
