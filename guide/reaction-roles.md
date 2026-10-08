# Reaction roles

`/reactionrole` gives a role when someone reacts to a message. The localized command name is `/cargoreacao`.

| Subcommand | What it does |
| --- | --- |
| `add` | Bind an emoji to a role. `channel` defaults to the current channel. Omit `message` to post a new panel. |
| `remove` | Remove an emoji from a message id. `channel` defaults to the current channel. |
| `list` | Show the reaction roles in this server. |

A server can have 25 reaction roles, and one message can have 20. The emoji has to belong to this server.

The bot needs **Manage Roles** and **Add Reactions** in that channel. Its highest role must be above the role it assigns. It cannot assign @everyone or a role managed by an integration.

This command needs **Manage Server**.
