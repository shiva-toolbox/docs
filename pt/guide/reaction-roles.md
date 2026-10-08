# Cargos por reação

`/reactionrole` dá um cargo quando alguém reage a uma mensagem. O nome localizado é `/cargoreacao`.

| Subcomando | O que faz |
| --- | --- |
| `add` | Liga um emoji a um cargo. `channel` usa o canal atual. Sem `message`, o bot publica um painel novo. |
| `remove` | Tira um emoji de um id de mensagem. `channel` usa o canal atual. |
| `list` | Lista os cargos por reação deste servidor. |

Um servidor pode ter 25 cargos por reação, e uma mensagem pode ter 20. O emoji tem que ser deste servidor.

O bot precisa de **Gerenciar cargos** e de **Adicionar reações** nesse canal. O cargo mais alto dele tem que ficar acima do cargo que ele atribui. Ele não atribui @everyone nem cargo gerenciado por uma integração.

Este comando exige **Gerenciar servidor**.
