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
            items: [{ text: 'Add the bot', link: '/guide/invite' }],
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
            items: [{ text: 'Adicionar o bot', link: '/pt/guide/invite' }],
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
