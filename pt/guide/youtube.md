# YouTube

`/youtube` avisa o servidor quando um canal do YouTube entra ao vivo. Cada servidor acompanha até 10 canais.

| Subcomando | O que faz |
| --- | --- |
| `add` | Acompanha a URL, o handle ou o id do canal. `channel` é opcional e usa o canal atual. |
| `remove` | Para de acompanhar um canal. |
| `list` | Lista os canais acompanhados. |
| `message` | Texto do alerta, até 500 caracteres. |
| `preview` | Mostra uma prévia. A opção do canal é opcional e, se faltar, usa dados de exemplo. |

Placeholders: `{channel}`, `{title}`, `{url}`.

`channel` precisa ser um canal de texto ou de anúncios em que o bot possa ver o canal, enviar mensagens e inserir links.

Este comando exige **Gerenciar servidor**.
