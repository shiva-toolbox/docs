# Autorole

`/autorole` gives roles when someone joins. On a Portuguese Discord client the command is `/autocargo`.

One delay applies to the whole list. The bot can hold up to 10 roles.

## Before you start

- You need **Manage Server** to run the command.
- The bot needs **Manage Roles**.
- Its highest role must sit above each role it assigns.
- It cannot assign @everyone or a role managed by an integration.

## Example

Give **Member** immediately, and **New** after one minute:

```text
/autorole add role: Member
/autorole add role: New
/autorole delay seconds: 60
/autorole list
```

`/autorole list` replies with the delay and the roles. The next person who joins gets both roles after 60 seconds, if they are still in the server.

To assign the moment they join:

```text
/autorole delay seconds: 0
```

## Commands

| Subcommand | Options | What it does |
| --- | --- | --- |
| `add` | `role` | Add a role. The same role cannot be added twice. |
| `remove` | `role` | Stop assigning that role to new members. |
| `delay` | `seconds` | Wait 0–3600 seconds after join. `0` is immediate. |
| `list` | | Show the delay and the roles. |
| `disable` | | Clear the role list. The delay is kept, but nothing is assigned while the list is empty. |

`disable` does not remove roles people already have. `remove` does not either.

## While they are joining

If the delay is greater than 0 and the person leaves before it ends, the bot cancels that assignment.

A second join from the same person within 60 seconds is ignored. More than 20 joins and leaves in one minute are skipped until the minute passes. That limit is shared with [join and leave messages](/guide/join-leave).

If a role is deleted in Discord, the bot drops it from the list the next time it tries to assign.

## If it does not work

The bot names the reason in the reply:

- It is missing **Manage Roles**.
- Its role is not above the role you picked.
- The role is @everyone or managed by an integration.
- The list already has 10 roles, or that role is already on it.
- `remove` was used on a role that is not on the list.
