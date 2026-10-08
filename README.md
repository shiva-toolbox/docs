# Shiva Docs

[English](#english) · [Português](#português)

## English

Public documentation for the [Shiva Toolbox](https://github.com/shiva-toolbox/shiva-toolbox) Discord bot. This repository does not import the bot.

### Local setup

```bash
pnpm install
cp .env.example .env
pnpm test
pnpm typecheck
pnpm dev
```

`DISCORD_CLIENT_ID` is the public Discord application id. With it set, the Add to Discord button opens the OAuth invite. Without it, the site still runs and the button stays hidden.

### Vercel

Connect this repository in the Vercel dashboard. [vercel.json](vercel.json) already sets:

- Install: `pnpm install`
- Build: `pnpm build`
- Output: `.vitepress/dist`

Add `DISCORD_CLIENT_ID` as an environment variable in the Vercel project. The button stays hidden when that variable is missing.

## Português

Documentação pública do bot [Shiva Toolbox](https://github.com/shiva-toolbox/shiva-toolbox). Este repositório não importa o bot.

### Setup local

```bash
pnpm install
cp .env.example .env
pnpm test
pnpm typecheck
pnpm dev
```

`DISCORD_CLIENT_ID` é o id público da aplicação no Discord. Com ele preenchido, o botão Adicionar ao Discord abre o convite OAuth. Sem ele, o site continua no ar e o botão fica oculto.

### Vercel

Ligue este repositório no painel da Vercel. O [vercel.json](vercel.json) já define:

- Install: `pnpm install`
- Build: `pnpm build`
- Saída: `.vitepress/dist`

Adicione `DISCORD_CLIENT_ID` como variável de ambiente no projeto da Vercel. Sem essa variável, o botão fica oculto.
