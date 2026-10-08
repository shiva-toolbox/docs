# Shiva Docs

[English](#english) · [Português](#português)

## English

Public documentation for the [Shiva Toolbox](https://github.com/shiva-toolbox/shiva-toolbox) Discord bot. This repository does not import the bot.

### Local setup

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm dev
```

The invite buttons use the public Discord link in `lib/links.ts` (`INVITE_URL`).

### Vercel

Connect this repository in the Vercel dashboard. [vercel.json](vercel.json) already sets:

- Install: `pnpm install`
- Build: `pnpm build`
- Output: `.vitepress/dist`

The invite link is the `INVITE_URL` constant in the repository, not an environment variable.

## Português

Documentação pública do bot [Shiva Toolbox](https://github.com/shiva-toolbox/shiva-toolbox). Este repositório não importa o bot.

### Setup local

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm dev
```

Os botões de convite usam o link público do Discord em `lib/links.ts` (`INVITE_URL`).

### Vercel

Ligue este repositório no painel da Vercel. O [vercel.json](vercel.json) já define:

- Install: `pnpm install`
- Build: `pnpm build`
- Saída: `.vitepress/dist`

O link de convite é a constante `INVITE_URL` no repositório, não uma variável de ambiente.
