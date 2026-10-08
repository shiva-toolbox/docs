# Início rápido

O Shiva Toolbox se configura com slash commands. Não há painel. É preciso ter **Gerenciar servidor** para convidar o bot e para mudar as configurações.

`/ping` e `/status` estão abertos para todo mundo, inclusive numa conversa direta com o bot. Os outros comandos só rodam dentro de um servidor, e a resposta aparece só para quem executou. A mensagem que o bot publica num canal, como uma boas-vindas ou um alerta de live, é pública.

## 1. Convide o bot

<InviteButton />

Depois que ele entrar, abra **Configurações do servidor → Cargos** e arraste o cargo do bot para cima de todo cargo que ele deve atribuir. O Discord recusa um cargo acima do bot, o @everyone e qualquer cargo gerenciado por uma integração (o cargo de um bot, ou um cargo ligado a uma conexão).

O bot não tira cargos quando você os remove do autocargo. Quem já tem o cargo continua com ele.

### Permissões

O convite pede estas permissões ao Discord. Sem elas, a ferramenta correspondente falha quando você roda o comando ou quando alguém entra. A permissão do canal ainda pode bloquear o bot num canal só, mesmo com o cargo do servidor certo.

| Permissão | Serve para |
| --- | --- |
| Ver canais | Ver o canal em que a mensagem deve ir. |
| Enviar mensagens | Publicar boas-vindas, despedidas e alertas de live. |
| Inserir links | Publicar os embeds de entrada e saída. |
| Gerenciar cargos | Atribuir autocargo. |

No canal escolhido para os alertas, o bot também precisa de Ver canal, Enviar mensagens e Inserir links.

## 2. Escolha o idioma

```text
/language locale: Português
```

No Discord em português o mesmo comando é `/idioma idioma: Português`. Os nomes das opções dos outros comandos continuam em inglês.

Essa configuração muda as respostas do bot e os textos padrão de entrada, saída e da Twitch. Uma mensagem que você já salvou fica como você escreveu. O nome dos comandos segue o idioma do Discord de cada pessoa, não essa configuração. [Idioma](/pt/guide/language).

## 3. Confira se ele responde

```text
/ping
/status
```

`/ping` mostra quanto o comando demorou e a latência da API. `/status` lista as ferramentas neste servidor.

## 4. Ligue uma ferramenta

O autocargo é o caminho mais curto. Rode isto em qualquer canal que o bot enxergue:

```text
/autocargo add role: Membro
/autocargo list
```

A próxima pessoa que entrar recebe **Membro**. Dá para adicionar até 10 cargos. Para esperar antes de atribuir:

```text
/autocargo delay seconds: 30
```

`seconds` vai de 0 a 3600. `0` atribui assim que a pessoa entra. Se ela sair antes do atraso acabar, o bot não atribui os cargos. O resto do comando está em [Autocargo](/pt/guide/autorole).

## Para onde seguir

- [Autocargo](/pt/guide/autorole)
- [Entrada e saída](/pt/guide/join-leave)
- [Twitch](/pt/guide/twitch)
- [Roadmap](/pt/guide/roadmap)
