# Join and leave

`/guildalert` posts an embed when someone joins or leaves. On a Portuguese Discord client the command is `/alertaservidor`.

Join and leave are configured separately. Nothing is posted until that side has a channel. Every subcommand takes `action`: **Join** or **Leave**. On a Portuguese client those choices are **Entrada** and **Saída**.

## Before you start

You need **Manage Server**. In the chosen channel the bot needs **View Channel**, **Send Messages**, and **Embed Links**. The channel is a text channel or an announcement channel.

## Example

In `#welcome`:

```text
/guildalert channel action: Join
/guildalert title action: Join text: Welcome to {guild}
/guildalert message action: Join text: {user} just joined. You are member {count}.
/guildalert preview action: Join
```

`channel` with no channel option uses the channel you are typing in. To send it somewhere else:

```text
/guildalert channel action: Join channel: #welcome
```

Leave is the same commands with `action: Leave`. Preview shows the message with your own user filled in, and only you can see that reply.

## Commands

| Subcommand | Options | What it does |
| --- | --- | --- |
| `channel` | `action`, `channel` | Where to post. `channel` is optional. |
| `title` | `action`, `text` | Embed title, up to 256 characters. |
| `message` | `action`, `text` | Embed text, up to 1000 characters. |
| `preview` | `action` | Show the message as it will be posted. |
| `disable` | `action` | Stop that side. The channel is cleared. The title and text you wrote are kept, so a later `channel` uses them again. |

## What gets posted

Until you set a title or a message, the bot uses a default.

| | English | Português |
| --- | --- | --- |
| Join title | 👋 Welcome! | 👋 Bem-vindo! |
| Join text | Welcome {user} to **{guild}**! We are glad to have you here, have fun! | Bem-vindo {user} ao **{guild}**! Ficamos felizes em ter você por aqui, divirta-se! |
| Leave title | 👋 Goodbye! | 👋 Até mais! |
| Leave text | See you, {user}. Thanks for hanging out on **{guild}**! | Até logo, {user}. Valeu por passar pelo **{guild}**! |

The language comes from [`/language`](/guide/language). A title or message you saved is not replaced when the language changes.

The embed uses the member's avatar, their username as the author, your title, your text, and a footer with the user id. Join messages also mention the member above the embed. Leave messages do not.

## Placeholders

| Placeholder | Becomes |
| --- | --- |
| `{user}` | A mention of the member. |
| `{username}` | Their username. |
| `{displayUsername}` | Their name on this server, then their display name, then their username. |
| `{guild}` | The server name. |
| `{count}` | The member count. |
| `{id}` | The user id. The footer also shows this id. |

A filled join message:

> Welcome to Shiva
>
> @Ada just joined. You are member 128.

## If it does not work

- No channel is set for that action, so the bot stays quiet.
- The bot cannot view the channel, send messages, or embed links.
- The channel was deleted. That action turns off.
- The same person joins or leaves again within 60 seconds. The second event is ignored.
- More than 20 joins and leaves happen in one minute. Further events in that minute are skipped. Autorole uses the same limit.
