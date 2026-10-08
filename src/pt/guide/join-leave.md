# Entrada e saída

`/alertaservidor` publica um embed quando alguém entra ou sai. No Discord em inglês o comando é `/guildalert`.

Entrada e saída se configuram separadas. Nada é publicado até esse lado ter um canal. Todo subcomando leva `action`: **Entrada** ou **Saída**. No cliente em inglês as escolhas são **Join** e **Leave**.

## Antes de começar

É preciso ter **Gerenciar servidor**. No canal escolhido, o bot precisa de **Ver canal**, **Enviar mensagens** e **Inserir links**. O canal é de texto ou de anúncios.

## Exemplo

Em `#boas-vindas`:

```text
/alertaservidor channel action: Entrada
/alertaservidor title action: Entrada text: Bem-vindo ao {guild}
/alertaservidor message action: Entrada text: {user} acabou de entrar. Você é o membro {count}.
/alertaservidor preview action: Entrada
```

`channel` sem a opção de canal usa o canal em que você está digitando. Para mandar em outro lugar:

```text
/alertaservidor channel action: Entrada channel: #boas-vindas
```

A saída usa os mesmos comandos com `action: Saída`. A prévia mostra a mensagem preenchida com o seu usuário, e só você vê essa resposta.

## Comandos

| Subcomando | Opções | O que faz |
| --- | --- | --- |
| `channel` | `action`, `channel` | Onde publicar. `channel` é opcional. |
| `title` | `action`, `text` | Título do embed, até 256 caracteres. |
| `message` | `action`, `text` | Texto do embed, até 1000 caracteres. |
| `preview` | `action` | Mostra a mensagem como ela vai sair. |
| `disable` | `action` | Para esse lado. O canal é limpo. O título e o texto que você escreveu ficam guardados, então um `channel` depois os usa de novo. |

## O que é publicado

Enquanto você não definir título ou mensagem, o bot usa um padrão.

| | English | Português |
| --- | --- | --- |
| Título de entrada | 👋 Welcome! | 👋 Bem-vindo! |
| Texto de entrada | Welcome {user} to **{guild}**! We are glad to have you here, have fun! | Bem-vindo {user} ao **{guild}**! Ficamos felizes em ter você por aqui, divirta-se! |
| Título de saída | 👋 Goodbye! | 👋 Até mais! |
| Texto de saída | See you, {user}. Thanks for hanging out on **{guild}**! | Até logo, {user}. Valeu por passar pelo **{guild}**! |

O idioma vem de [`/idioma`](/pt/guide/language). Um título ou uma mensagem que você salvou não é trocado quando o idioma muda.

O embed usa o avatar do membro, o nome de usuário como autor, o seu título, o seu texto e um rodapé com o id. A entrada também menciona o membro acima do embed. A saída não menciona.

## Placeholders

| Placeholder | Vira |
| --- | --- |
| `{user}` | Uma menção do membro. |
| `{username}` | O nome de usuário. |
| `{displayUsername}` | O nome neste servidor, depois o nome de exibição, depois o nome de usuário. |
| `{guild}` | O nome do servidor. |
| `{count}` | A contagem de membros. |
| `{id}` | O id do usuário. O rodapé também mostra esse id. |

Uma mensagem de entrada preenchida:

> Bem-vindo ao Shiva
>
> @Ada acabou de entrar. Você é o membro 128.

## Se não funcionar

- Nenhum canal está definido para essa ação, então o bot fica quieto.
- O bot não consegue ver o canal, enviar mensagens ou inserir links.
- O canal foi apagado. Essa ação desliga.
- A mesma pessoa entra ou sai de novo em 60 segundos. O segundo evento é ignorado.
- Mais de 20 entradas e saídas acontecem num minuto. Os eventos seguintes nesse minuto são pulados. O autocargo usa o mesmo limite.
