# Twitch

`/twitch` avisa o servidor quando um canal da Twitch entra ao vivo. Cada servidor acompanha até 10 canais.

| Subcomando | O que faz |
| --- | --- |
| `add` | Acompanha um nome de usuário. `channel` é opcional e usa o canal atual. |
| `remove` | Para de acompanhar um nome de usuário. |
| `list` | Lista os canais acompanhados. |
| `message` | Texto do alerta, até 500 caracteres. |
| `preview` | Mostra uma prévia. `username` é opcional e, se faltar, usa dados de exemplo. |

Placeholders: `{user}`, `{game}`, `{title}`, `{url}`.

`channel` precisa ser um canal de texto ou de anúncios em que o bot possa ver o canal, enviar mensagens e inserir links.

Este comando exige **Gerenciar servidor**.
