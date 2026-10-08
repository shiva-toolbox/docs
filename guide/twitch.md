# Twitch

`/twitch` posts in the server when a Twitch channel goes live. A server can watch up to 10 channels.

| Subcommand | What it does |
| --- | --- |
| `add` | Watch a username. `channel` is optional and defaults to the current channel. |
| `remove` | Stop watching a username. |
| `list` | Show the watched channels. |
| `message` | Alert text, up to 500 characters. |
| `preview` | Preview the alert. `username` is optional and uses sample data when omitted. |

Placeholders: `{user}`, `{game}`, `{title}`, `{url}`.

`channel` must be a text or announcement channel where the bot can view the channel, send messages, and embed links.

This command needs **Manage Server**.
