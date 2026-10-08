# Language

`/language` sets the language Shiva Toolbox uses for its replies in this server. The Portuguese command name is `/idioma`.

```text
/language locale: English
/language locale: Português
```

On a Portuguese Discord client the option is also named `idioma`:

```text
/idioma idioma: Português
```

| Choice | What the bot stores |
| --- | --- |
| English | `en-US` |
| Português | `pt-BR` |

## What changes

- Replies to commands, including errors.
- Default join, leave, and Twitch texts, when you have not written your own.

A title or message you already saved stays word for word. `/language` does not translate it.

## What does not change

Command names follow the language of each person's Discord app.

| English client | Portuguese client |
| --- | --- |
| `/language` | `/idioma` |
| `/autorole` | `/autocargo` |
| `/guildalert` | `/alertaservidor` |
| `/twitch` | `/twitch` |
| `/ping` | `/ping` |
| `/status` | `/status` |

Option names such as `role`, `seconds`, `channel`, and `text` stay in English. The `locale` option is the one renamed to `idioma` on a Portuguese client. Join and Leave become **Entrada** and **Saída**.

This command needs **Manage Server**.
