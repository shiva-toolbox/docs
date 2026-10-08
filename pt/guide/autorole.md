# Autocargo

`/autorole` atribui cargos quando alguém entra. O nome localizado é `/autocargo`.

| Subcomando | O que faz |
| --- | --- |
| `add` | Adiciona um cargo. Até 10 cargos. |
| `remove` | Para de atribuir um cargo. |
| `delay` | Espera de 0 a 3600 segundos depois da entrada. `0` atribui na hora. |
| `list` | Mostra os cargos e o atraso. |
| `disable` | Desliga o autocargo. |

O bot precisa de **Gerenciar cargos**, e o cargo mais alto dele tem que ficar acima de cada cargo que ele atribui. Ele não atribui @everyone nem cargo gerenciado por uma integração.

Este comando exige **Gerenciar servidor**.
