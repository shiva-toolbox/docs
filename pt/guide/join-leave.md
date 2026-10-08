# Entrada e saída

`/guildalert` publica uma mensagem quando alguém entra ou sai. O nome localizado é `/alertaservidor`.

Todo subcomando recebe `action`: `Join` (entrada) ou `Leave` (saída).

| Subcomando | O que faz |
| --- | --- |
| `channel` | Canal de texto ou de anúncios. O padrão é o canal em que você usa o comando. |
| `title` | Título do embed, até 256 caracteres. |
| `message` | Texto do embed, até 1000 caracteres. |
| `preview` | Mostra a mensagem como ela será publicada. |
| `disable` | Para de enviar essa mensagem. |

Placeholders: `{user}`, `{username}`, `{displayUsername}`, `{guild}`, `{count}`, `{id}`.

No canal escolhido, o bot precisa de **Ver canal**, **Enviar mensagens** e **Inserir links**.

Este comando exige **Gerenciar servidor**.
