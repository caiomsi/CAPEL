# CAPEL — manual do site

Tudo que você precisa para deixar o site com os seus dados, trocar as fotos e
colocar no ar. **Não precisa saber programar** e não precisa instalar nada.

---

## 1. O que tem dentro da pasta

```
CAPEL/
├── index.html        ← o site inteiro (textos, telefone, seções)
├── css/style.css     ← as cores e o visual
├── js/main.js        ← o menu do celular e as animações
├── images/           ← as 8 fotos do site
├── video/            ← o vídeo do topo da página
├── favicon.svg       ← o ícone da abinha do navegador
└── LEIA-ME.md        ← este arquivo
```

**Para ver o site:** dê dois cliques no `index.html`. Ele abre no navegador,
funcionando, sem internet e sem instalar nada.

**Para editar:** abra o `index.html` em qualquer editor de texto. No Mac, use o
TextEdit (menu *Formatar → Converter para texto simples*). No Windows, o Bloco de
Notas. Melhor ainda: baixe o **VS Code** (gratuito) — ele colore o código e fica
muito mais fácil de enxergar o que é texto e o que é comando.

> ⚠️ **Antes de mexer, copie a pasta inteira e guarde.** Se algo quebrar, é só
> voltar para a cópia.

---

## 2. Coloque os seus dados (faça isso primeiro)

O site vem com dados de exemplo. Todos começam com **`SEU-`**, **`SUA-`** ou
**`SEUNUMERO`**, justamente para você achar rápido.

No editor, use **Localizar e Substituir** (`Ctrl+H` no Windows, `Cmd+H` no Mac) e
troque um por um. Use **Substituir todos** — assim nenhum escapa:

| Procure por | Troque por | Aparece |
|---|---|---|
| `SEUNUMEROWHATSAPP` | Seu número: **55 + DDD + número, tudo junto e sem símbolos**. Ex.: `5534912345678` | 4× |
| `SEU-TELEFONE` | Telefone como você quer que apareça. Ex.: `(34) 91234-5678` | 2× |
| `SEU-EMAIL` | Seu e-mail. Ex.: `contato@capel.com.br` | 3× |
| `SEUINSTAGRAM` | Seu @ do Instagram **sem o @**. Ex.: `capel.filmes` | 4× |
| `SUA-CIDADE` | Sua cidade. Ex.: `Uberlândia` | 4× |
| `SEU-ESTADO` | Sigla do estado. Ex.: `MG` | 2× |
| `SEU-ENDERECO` | Endereço, se tiver | 1× |
| `SEU-CEP` | CEP, se tiver | 1× |
| `SEU-PRECO` | Preço inicial de cada serviço. Ex.: `R$ 1.200` | 3× |
| `SEU-ANO` | Ano em que começou. Ex.: `2021` | 1× |
| `SEU-PRAZO` | Prazo médio de entrega. Ex.: `7 a 10 dias` | 1× |

Se o número da coluna "Aparece" bater com o que o editor encontrou, está certo.

### Sobre o número do WhatsApp

É o item mais importante — **o site inteiro leva para o WhatsApp**, então se o
número estiver errado, nada funciona. O formato tem que ser exatamente esse:

```
https://wa.me/5534912345678
             └─┬┘└┬┘└──┬───┘
              55 DDD  número     ← sem +, sem espaço, sem parêntese, sem traço
```

Quer mudar a mensagem que já vem escrita quando a pessoa clica? Procure por
`Quero%20um%20or%C3%A7amento` no `index.html`. Os `%20` são espaços — é assim que
o navegador entende. Se quiser mudar o texto, o mais fácil é escrever a frase no
site [urlencoder.org](https://www.urlencoder.org/) e colar o resultado.

### Não tem endereço público?

Se você atende só a domicílio e não quer divulgar endereço, abra o `index.html`,
procure por `streetAddress` e apague essas duas linhas inteiras:

```json
"streetAddress": "SEU-ENDERECO",
"postalCode": "SEU-CEP",
```

Deixar o texto de exemplo é pior do que não ter. Isso fica na parte de cima do
arquivo, que é o que o Google lê para te achar.

---

## 3. Trocar as fotos

> ⚠️ **Importante:** as 8 fotos e o vídeo que vieram na pasta **foram geradas por
> computador (IA)**. Elas servem para mostrar o estilo do site, mas **não são
> trabalhos seus**. Por isso a seção do site está marcada como *"Direção de
> referência"*. Troque pelas suas assim que puder — é o que mais muda o
> resultado do site inteiro.

### Como trocar

O jeito mais fácil e sem erro: **dê à sua foto exatamente o mesmo nome da que
está lá e substitua o arquivo na pasta `images/`.** Pronto, não precisa mexer em
mais nada.

| Arquivo | Onde aparece | Formato ideal |
|---|---|---|
| `capel-set-de-filmagem.jpg` | Topo do site + imagem que aparece quando você compartilha o link no WhatsApp | Deitada (16:9) |
| `capel-fotografia-de-produto.jpg` | Trabalho — quadro grande, em cima à esquerda | Deitada |
| `capel-filme-de-marca-lojista.jpg` | Trabalho — em cima à direita | Deitada |
| `capel-video-social-vertical.jpg` | Trabalho — quadro alto à esquerda | **Em pé (9:16)** |
| `capel-setup-de-iluminacao.jpg` | Trabalho — faixa larga do meio | Deitada |
| `capel-lente-de-cinema.jpg` | Trabalho — quadro pequeno embaixo | Deitada |
| `capel-bastidores-loja.jpg` | Trabalho — quadro pequeno embaixo à direita | Deitada |
| `capel-retrato-de-marca.jpg` | Seção "Sobre a CAPEL" | **Em pé (3:4)** |

**Três regras que valem muito:**

1. **Deixe leve.** Foto direto da câmera tem 8 MB e trava o site no celular.
   Passe cada uma em [squoosh.app](https://squoosh.app) (grátis, abre no
   navegador) e deixe entre **200 KB e 500 KB**. Nenhuma foto deveria passar de
   2000 pixels de largura.
2. **Respeite o formato.** Onde está escrito "em pé", use foto em pé. Se colocar
   uma foto deitada num espaço alto, ela vai ser cortada nas laterais.
3. **Fotos escuras funcionam melhor.** O site é preto. Fotos claras, batidas de
   dia e com fundo branco brigam com o visual — foi exatamente por isso que uma
   das fotos originais teve que ser refeita.

### Trocar o texto embaixo de cada foto

No `index.html`, procure pelo nome do arquivo. Logo abaixo você vê:

```html
<span class="work-title">Produto no escuro</span>
<span class="work-tag">Fotografia · Still</span>
```

O primeiro é o título, o segundo é a legendinha. Troque o que está entre `>` e
`<`, sem mexer no resto.

### O `alt` — não pule esta parte

Ainda na mesma linha da foto, existe um `alt="..."` com a descrição da imagem.
Ele serve para **cegos que usam leitor de tela** e para o **Google entender a
foto**. Sempre descreva a foto nova em uma frase. Exemplo:

```html
alt="Gravação de vídeo dentro da padaria do cliente, com luz quente no balcão"
```

### Quando as fotos já forem suas

Aí você pode tirar o aviso de "referência". No `index.html`, procure por
`Direção de referência` e troque por algo como `Trabalhos recentes`.

---

## 4. Trocar o vídeo do topo

Substitua o arquivo `video/capel-reel-loop.mp4` por um trecho seu, mantendo o
mesmo nome. Para ficar bom:

- **5 a 10 segundos**, em loop (ele repete sozinho, sem parar)
- **Deitado (16:9)**, sem letra nem logo na tela
- **Sem áudio** — o vídeo toca mudo de propósito (navegador não deixa tocar som
  sozinho), então áudio só deixa o arquivo pesado à toa
- **Abaixo de 1 MB** se der. O que está lá tem 290 KB
- Prefira uma cena escura e calma, com movimento lento. Cena clara ou agitada
  atrapalha a leitura do título por cima

Se ficar pesado, use o [handbrake.fr](https://handbrake.fr) (grátis) ou o
[freeconvert.com/video-compressor](https://www.freeconvert.com/video-compressor).

**A imagem `capel-set-de-filmagem.jpg` é a "capa" do vídeo** — é o que aparece no
primeiro instante, antes de o vídeo carregar. Se trocar o vídeo, troque a capa
por um quadro dele, senão fica estranho.

---

## 5. Trocar textos

Todos os textos estão no `index.html`. Procure a frase que quer mudar e troque —
só tome cuidado para não apagar os sinais `<` e `>` em volta.

Se quiser mudar o título grande do topo, ele está assim:

```html
<h1 class="hero-title">Marcas que as pessoas <em>param</em> para ver.</h1>
```

A palavra dentro de `<em>` fica **dourada e em itálico**. Você escolhe qual
palavra destacar — só mantenha uma só, é o que dá o charme.

### Uma coisa que vale entender sobre as cores

O site usa duas cores de propósito, imitando luz de cinema:

- **Dourado** (luz quente, 3200K) → só para **destaque de texto**, números e
  linhas
- **Azul** (luz fria, 5600K) → só para **coisas clicáveis**: botões e links

É essa separação que faz o site parecer caro. **Se você pintar um botão de
dourado, quebra.** Botão é sempre azul; destaque de texto é sempre dourado.

---

## 6. Colocar no ar

O site é feito de arquivos soltos — **não precisa de servidor, banco de dados
nem programa nenhum rodando**. Qualquer hospedagem serve.

**O jeito mais fácil e de graça:** entre em [netlify.com](https://www.netlify.com),
crie uma conta e **arraste a pasta `CAPEL` inteira** para a área de upload. Em
uns 20 segundos ele te dá um endereço no ar. Para atualizar depois, é só arrastar
a pasta de novo.

Depois dá para ligar um domínio próprio (tipo `capel.com.br`) nas configurações.

### Se você comprar um domínio, mude isto

No `index.html`, lá em cima, existem 4 endereços escritos
`https://caiomsi.github.io/CAPEL/`. Troque todos pelo seu domínio novo. Eles
dizem ao Google qual é o endereço oficial do site e qual imagem mostrar quando
alguém compartilha o link. Se ficarem errados, o link compartilhado mostra a
imagem errada.

---

## 7. Antes de divulgar — confira

- [ ] Não sobrou nada escrito `SEU-`, `SUA-` ou `SEUNUMERO` no site
- [ ] Cliquei em **todos** os botões de WhatsApp **pelo celular** e abriu a
      conversa certa
- [ ] Abri o site no celular e no computador e nada ficou cortado
- [ ] As fotos são minhas (ou tirei o aviso de "referência" só depois de trocar)
- [ ] Se aparece gente reconhecível nas fotos, tenho autorização de imagem
- [ ] As fotos estão leves — o site abre rápido no 4G

---

## 8. Deu problema?

| O que aconteceu | Quase sempre é isso |
|---|---|
| O site abriu todo branco, sem cor | A pasta `css` foi movida ou renomeada. Ela precisa ficar do lado do `index.html` |
| A foto sumiu e aparece um ícone quebrado | O nome do arquivo não bate. Confira maiúscula/minúscula e o `.jpg` no fim |
| O vídeo não toca | Normal em alguns celulares no modo economia de bateria — nesse caso ele mostra a foto de capa. Não é defeito |
| O botão do WhatsApp abre a conversa errada | O número está fora do formato. Tem que ser `55` + DDD + número, tudo junto |
| Mudei algo e quebrou tudo | Volte para a cópia que você guardou no começo 🙂 |

Qualquer coisa, chama o Caio.
