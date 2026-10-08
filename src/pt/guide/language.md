# Idioma

`/idioma` define o idioma que o Shiva Toolbox usa nas respostas neste servidor. No Discord em inglês o comando é `/language`.

```text
/idioma idioma: Português
/idioma idioma: Inglês
```

No Discord em inglês a opção se chama `locale`:

```text
/language locale: English
```

| Escolha | O que o bot guarda |
| --- | --- |
| English | `en-US` |
| Português | `pt-BR` |

## O que muda

- As respostas dos comandos, inclusive os erros.
- Os textos padrão de entrada, saída e da Twitch, quando você ainda não escreveu os seus.

Um título ou uma mensagem que você já salvou continua palavra por palavra. `/idioma` não traduz esse texto.

## O que não muda

O nome dos comandos segue o idioma do Discord de cada pessoa.

| Cliente em inglês | Cliente em português |
| --- | --- |
| `/language` | `/idioma` |
| `/autorole` | `/autocargo` |
| `/guildalert` | `/alertaservidor` |
| `/twitch` | `/twitch` |
| `/ping` | `/ping` |
| `/status` | `/status` |

Opções como `role`, `seconds`, `channel` e `text` ficam em inglês. A opção `locale` é a que vira `idioma` no cliente em português. Join e Leave viram **Entrada** e **Saída**.

Este comando exige **Gerenciar servidor**.
