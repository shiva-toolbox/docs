# Twitch

`/twitch` publica no servidor quando um canal da Twitch entra ao vivo. Um servidor pode acompanhar até 10 canais. `/twitch` é o nome do comando em qualquer idioma do Discord.

Cada canal acompanhado tem o próprio canal do Discord. O texto do alerta é um modelo só para o servidor inteiro.

## Antes de começar

É preciso ter **Gerenciar servidor**. O canal do Discord precisa ser de texto ou de anúncios, e o bot precisa ver o canal, enviar mensagens e inserir links.

## Exemplo

Em `#live`:

```text
/twitch add username: shroud
/twitch message text: {user} está ao vivo — {title} ({game})
/twitch preview username: shroud
/twitch list
```

`username` é o login da Twitch, não uma URL. Deixar `channel` vazio publica no canal em que você está digitando:

```text
/twitch add username: shroud channel: #live
```

Rodar `add` de novo para alguém que você já acompanha muda o alerta para o canal novo do Discord.

`preview` sem `username` usa dados de exemplo: o nome Streamer, o título Just Chatting e a categoria Just Chatting. Com um username, o nome é esse usuário. Se estiver ao vivo, o título e a categoria vêm da live. Se não estiver, o título fica Untitled stream e a categoria continua Just Chatting. A pessoa não precisa estar na lista deste servidor.

## Comandos

| Subcomando | Opções | O que faz |
| --- | --- | --- |
| `add` | `username`, `channel` | Acompanha um usuário da Twitch. `channel` é opcional. |
| `remove` | `username` | Para de acompanhar esse usuário. |
| `list` | | Mostra cada canal acompanhado, para onde o alerta vai, e o texto atual. |
| `message` | `text` | Texto de todo alerta da Twitch neste servidor, até 500 caracteres. |
| `preview` | `username` | Mostra o alerta. `username` é opcional. |

## Placeholders

| Placeholder | Vira |
| --- | --- |
| `{user}` | O nome de exibição de quem está ao vivo. |
| `{game}` | A categoria. `{category}` é o mesmo valor. |
| `{title}` | O título da live. |
| `{url}` | `https://twitch.tv/` mais o login. |

Se o texto ainda não tiver a URL da live, o bot acrescenta no final.

Enquanto você não definir `message`, o padrão é `{user} is live playing {game}! **{title}**` no [idioma do servidor](/pt/guide/language), em português `{user} está ao vivo jogando {game}! **{title}**`, com a URL depois.

## Se não funcionar

- O username está vazio ou não é um login da Twitch.
- A Twitch não tem um usuário com esse nome.
- Este servidor já acompanha 10 canais da Twitch.
- `remove` cita alguém que este servidor não acompanha.
- O destino não é um canal de texto ou de anúncios, ou o bot não consegue publicar lá.
- A Twitch não responde. Rode o comando de novo em instantes.
