# Join and leave

`/guildalert` posts a message when someone joins or leaves. The localized command name is `/alertaservidor`.

Every subcommand takes `action`: `Join` or `Leave`.

| Subcommand | What it does |
| --- | --- |
| `channel` | Text or announcement channel. Defaults to the channel where you run the command. |
| `title` | Embed title, up to 256 characters. |
| `message` | Embed text, up to 1000 characters. |
| `preview` | Show the message as it will be posted. |
| `disable` | Stop sending that message. |

Placeholders: `{user}`, `{username}`, `{displayUsername}`, `{guild}`, `{count}`, `{id}`.

The bot needs **View Channel**, **Send Messages**, and **Embed Links** in the chosen channel.

This command needs **Manage Server**.
