# Quick start

Shiva Toolbox is set up with slash commands. There is no dashboard. You need **Manage Server** to invite the bot and to change its settings.

`/ping` and `/status` are open to everyone, including in a direct message with the bot. Every other command only runs inside a server, and the reply is visible only to you. Messages the bot posts in a channel, such as a welcome or a live alert, are public.

## 1. Invite the bot

<InviteButton />

After it joins, open **Server Settings → Roles** and drag the bot's role above every role it should assign. Discord refuses a role that sits above the bot, @everyone, and any role managed by an integration (a bot's own role, or a role linked to a connection).

The bot does not take roles away when you remove them from autorole. Someone who already has the role keeps it.

### Permissions

The invite asks Discord for these permissions. Without them, the matching tool fails when you run it or when someone joins. A channel can still block the bot even when the server role looks correct.

| Permission | Used for |
| --- | --- |
| View Channels | See the channel where a message should go. |
| Send Messages | Post welcomes, goodbyes, and live alerts. |
| Embed Links | Post the join and leave embeds. |
| Manage Roles | Assign autoroles. |

For alerts, the bot also needs View Channel, Send Messages, and Embed Links in the channel you pick.

## 2. Choose the language

```text
/language locale: English
```

On a Portuguese Discord client the same command is `/idioma idioma: Português`. Option names on the other commands stay in English.

This setting changes the bot's replies, and the default join, leave, and Twitch texts. A message you already saved is left as you wrote it. The names of the commands follow each person's Discord language, not this setting. [Language](/guide/language).

## 3. Check that it answers

```text
/ping
/status
```

`/ping` shows how long the command took and the API latency. `/status` lists the tools on this server.

## 4. Turn one tool on

Autorole is the shortest setup. Run this in any channel the bot can see:

```text
/autorole add role: Member
/autorole list
```

The next person who joins receives **Member**. You can add up to 10 roles. To wait before assigning:

```text
/autorole delay seconds: 30
```

`seconds` goes from 0 to 3600. `0` assigns as soon as they join. If they leave before the delay ends, the bot does not assign the roles. The rest of the command is on [Autorole](/guide/autorole).

## Where to go next

- [Autorole](/guide/autorole)
- [Join and leave](/guide/join-leave)
- [Twitch](/guide/twitch)
- [Roadmap](/guide/roadmap)
