import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import { inviteUrl, readDiscordClientId } from '../src/invite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadClientId(): string | undefined {
  let dotenv: string | undefined;
  try {
    dotenv = readFileSync(resolve(root, '.env'), 'utf8');
  } catch (error) {
    const code =
      typeof error === 'object' && error !== null && 'code' in error ? error.code : undefined;
    if (code !== 'ENOENT') throw error;
  }

  return readDiscordClientId(process.env, dotenv);
}

const discordInviteUrl = inviteUrl(loadClientId()) ?? undefined;

export default defineConfig({
  title: 'Shiva Toolbox',
  cleanUrls: true,
  lastUpdated: false,
  themeConfig: {
    inviteUrl: discordInviteUrl,
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shiva-toolbox/shiva-toolbox' },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description:
        'Documentation for Shiva Toolbox, a Discord bot for autorole, join and leave messages, live alerts, and reaction roles.',
      themeConfig: {
        nav: [{ text: 'Add the bot', link: '/guide/invite' }],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Add the bot', link: '/guide/invite' },
              { text: 'Language', link: '/guide/language' },
            ],
          },
          {
            text: 'Modules',
            items: [
              { text: 'Autorole', link: '/guide/autorole' },
              { text: 'Join and leave', link: '/guide/join-leave' },
              { text: 'Twitch', link: '/guide/twitch' },
              { text: 'YouTube', link: '/guide/youtube' },
              { text: 'Reaction roles', link: '/guide/reaction-roles' },
            ],
          },
        ],
        footer: {
          message: 'Documentation for the Shiva Toolbox Discord bot.',
          copyright: 'Shiva Toolbox',
        },
      },
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      link: '/pt/',
      description:
        'Documentação do Shiva Toolbox, bot do Discord para autocargo, mensagens de entrada e saída, alertas de live e cargos por reação.',
      themeConfig: {
        nav: [{ text: 'Adicionar o bot', link: '/pt/guide/invite' }],
        sidebar: [
          {
            text: 'Guia',
            items: [
              { text: 'Adicionar o bot', link: '/pt/guide/invite' },
              { text: 'Idioma', link: '/pt/guide/language' },
            ],
          },
          {
            text: 'Módulos',
            items: [
              { text: 'Autocargo', link: '/pt/guide/autorole' },
              { text: 'Entrada e saída', link: '/pt/guide/join-leave' },
              { text: 'Twitch', link: '/pt/guide/twitch' },
              { text: 'YouTube', link: '/pt/guide/youtube' },
              { text: 'Cargos por reação', link: '/pt/guide/reaction-roles' },
            ],
          },
        ],
        footer: {
          message: 'Documentação do bot de Discord Shiva Toolbox.',
          copyright: 'Shiva Toolbox',
        },
      },
    },
  },
});
