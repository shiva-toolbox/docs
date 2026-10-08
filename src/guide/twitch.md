# Twitch

`/twitch` posts in the server when a Twitch channel goes live. A server can watch up to 10 channels. `/twitch` is the command name on every Discord language.

Each channel you watch has its own Discord channel. The alert text is one template for the whole server.

## Before you start

You need **Manage Server**. The Discord channel must be a text channel or an announcement channel where the bot can view the channel, send messages, and embed links.

## Example

In `#live`:

```text
/twitch add username: shroud
/twitch message text: {user} is live — {title} ({game})
/twitch preview username: shroud
/twitch list
```

`username` is the Twitch login, not a URL. Leaving `channel` empty posts in the channel you are typing in:

```text
/twitch add username: shroud channel: #live
```

Running `add` again for someone you already watch moves that alert to the new Discord channel.

`preview` without `username` uses sample data: the name Streamer, the title Just Chatting, and the category Just Chatting. With a username, the name is that user. If they are live, the title and category come from the stream. If they are not, the title is Untitled stream and the category stays Just Chatting. The user does not have to be on this server's list.

## Commands

| Subcommand | Options | What it does |
| --- | --- | --- |
| `add` | `username`, `channel` | Watch a Twitch user. `channel` is optional. |
| `remove` | `username` | Stop watching that user. |
| `list` | | Show each watched channel and where the alert goes, plus the current text. |
| `message` | `text` | Alert text for every Twitch alert on this server, up to 500 characters. |
| `preview` | `username` | Show the alert. `username` is optional. |

## Placeholders

| Placeholder | Becomes |
| --- | --- |
| `{user}` | The streamer's display name. |
| `{game}` | The category they are playing. `{category}` is the same value. |
| `{title}` | The stream title. |
| `{url}` | `https://twitch.tv/` plus their login. |

If your text does not already contain the stream URL, the bot adds it at the end.

Until you set `message`, the default is `{user} is live playing {game}! **{title}**`, in the [server language](/guide/language), with the URL added after it.

## If it does not work

- The username is empty or not a Twitch login.
- Twitch has no user with that name.
- This server already watches 10 Twitch channels.
- `remove` names someone this server is not watching.
- The destination is not a text or announcement channel, or the bot cannot post there.
- Twitch does not answer. Run the command again in a moment.
