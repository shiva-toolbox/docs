# Autocargo

`/autocargo` entrega cargos quando alguém entra. No Discord em inglês o comando é `/autorole`.

Um único atraso vale para a lista inteira. O bot guarda até 10 cargos.

## Antes de começar

- É preciso ter **Gerenciar servidor** para rodar o comando.
- O bot precisa de **Gerenciar cargos**.
- O cargo mais alto dele precisa ficar acima de cada cargo que ele atribui.
- Ele não atribui @everyone nem um cargo gerenciado por uma integração.

## Exemplo

Entregar **Membro** na hora e **Novo** depois de um minuto:

```text
/autocargo add role: Membro
/autocargo add role: Novo
/autocargo delay seconds: 60
/autocargo list
```

`/autocargo list` responde com o atraso e os cargos. A próxima pessoa que entrar recebe os dois cargos depois de 60 segundos, se ainda estiver no servidor.

Para atribuir no momento em que ela entra:

```text
/autocargo delay seconds: 0
```

## Comandos

| Subcomando | Opções | O que faz |
| --- | --- | --- |
| `add` | `role` | Adiciona um cargo. O mesmo cargo não entra duas vezes. |
| `remove` | `role` | Para de atribuir esse cargo a quem entrar. |
| `delay` | `seconds` | Espera de 0 a 3600 segundos depois da entrada. `0` é imediato. |
| `list` | | Mostra o atraso e os cargos. |
| `disable` | | Esvazia a lista. O atraso fica guardado, mas nada é atribuído enquanto a lista estiver vazia. |

`disable` não tira cargos de quem já tem. `remove` também não.

## Na hora da entrada

Se o atraso for maior que 0 e a pessoa sair antes de ele acabar, o bot cancela essa atribuição.

Uma segunda entrada da mesma pessoa em 60 segundos é ignorada. Mais de 20 entradas e saídas num minuto são puladas até o minuto passar. Esse limite é o mesmo das [mensagens de entrada e saída](/pt/guide/join-leave).

Se um cargo for apagado no Discord, o bot tira ele da lista na próxima vez que for atribuir.

## Se não funcionar

O bot diz o motivo na resposta:

- Falta **Gerenciar cargos**.
- O cargo dele não está acima do cargo escolhido.
- O cargo é @everyone ou é gerenciado por uma integração.
- A lista já tem 10 cargos, ou esse cargo já está nela.
- `remove` foi usado num cargo que não está na lista.
