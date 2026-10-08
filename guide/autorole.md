# Autorole

`/autorole` assigns roles when someone joins. The localized command name is `/autocargo`.

| Subcommand | What it does |
| --- | --- |
| `add` | Add a role. Up to 10 roles. |
| `remove` | Stop assigning a role. |
| `delay` | Wait 0–3600 seconds after join. `0` assigns immediately. |
| `list` | Show the roles and the delay. |
| `disable` | Turn autorole off. |

The bot needs **Manage Roles**, and its highest role must be above each role it assigns. It cannot assign @everyone or a role managed by an integration.

This command needs **Manage Server**.
