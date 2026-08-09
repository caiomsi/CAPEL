# CAPEL — checklist antes de publicar

O site está **pronto e completo**, mas ainda contém dados de exemplo. Nada aqui
deve ir ao ar antes de trocar tudo que está marcado como `REPLACE WITH ...`.

Para ver tudo que falta:

```bash
grep -rn "REPLACE WITH" . --include=*.html --include=*.md
```

---

## 1. Dados de contato — obrigatório

| O que | Onde aparece | Formato |
|---|---|---|
| WhatsApp | `index.html` — 4 links `wa.me` + JSON-LD | `55` + DDD + número, sem espaços. Ex.: `wa.me/5534912345678` |
| Telefone exibido | `index.html` — lista de contato + JSON-LD `telephone` | Como o cliente escreve. Ex.: `(34) 91234-5678` |
| E-mail | `index.html` — `mailto:` + JSON-LD `email` | — |
| Instagram | `index.html` — contato, rodapé e JSON-LD `sameAs` | Handle sem `@` na URL, com `@` no texto |
| Cidade / UF | `index.html` — "Base", bloco Sobre, JSON-LD `address` | — |
| Endereço + CEP | JSON-LD `address` | Se não houver endereço público, **remova** `streetAddress` e `postalCode` do JSON-LD em vez de deixar vazio |
| Região atendida | JSON-LD `areaServed` | — |

## 2. Preços — obrigatório

Três `REPLACE WITH PREÇO` na seção **Serviços** (vídeo social, filmes de marca,
fotografia). Se o cliente não quiser publicar preço, troque o bloco
`.service-price` inteiro por uma chamada como "Sob orçamento" — não deixe o
marcador.

## 3. Sobre — obrigatório

Em `index.html`, bloco `.about-facts`: `REPLACE WITH CIDADE / REGIÃO`,
`REPLACE WITH ANO` (ano de fundação) e `REPLACE WITH PRAZO` (prazo médio de
entrega).

## 4. Imagens — importante

⚠️ **As 8 imagens em `images/` e o vídeo em `video/` foram gerados por IA
(Higgsfield).** São *direção de referência* — mostram o padrão visual, não
trabalhos entregues pela CAPEL. A seção Trabalho está rotulada como "Direção de
referência" justamente por isso.

Assim que existir material real do cliente, substitua. É o item de maior
impacto do site inteiro.

| Arquivo | O que precisa vir no lugar | Proporção |
|---|---|---|
| `capel-set-de-filmagem.jpg` | Bastidores de uma gravação real (também é o poster do vídeo e a imagem de compartilhamento) | 16:9 |
| `capel-fotografia-de-produto.jpg` | Foto de produto real feita pela CAPEL | 3:2 |
| `capel-filme-de-marca-lojista.jpg` | Frame de um filme de marca real | 3:2 |
| `capel-video-social-vertical.jpg` | Frame vertical de um Reels entregue | 9:16 |
| `capel-setup-de-iluminacao.jpg` | Setup de luz real | 4:3 |
| `capel-lente-de-cinema.jpg` | Equipamento da própria CAPEL | 4:3 |
| `capel-bastidores-loja.jpg` | Bastidores em locação de cliente | 3:2 |
| `capel-retrato-de-marca.jpg` | Retrato real (equipe ou cliente) | 3:4 |
| `video/capel-reel-loop.mp4` | Trecho mudo do reel real, ~5 s, sem áudio | 16:9 |

Regras: nome do arquivo em minúsculas com hífen (é sinal de SEO e o `alt` se
apoia nele), comprimir antes de commitar, e **atualizar o `alt` em pt-BR** para
descrever a foto nova. Se aparecer gente identificável, ter autorização de uso
de imagem.

Depois de trocar as imagens, remova o rótulo "Direção de referência" do
`section-note` da seção Trabalho e o comentário de aviso acima dela.

## 5. Antes do primeiro deploy

- [ ] Todos os `REPLACE WITH` resolvidos
- [ ] Testar o formulário — deve responder "Recebido. Respondemos rápido."
- [ ] Testar cada link de WhatsApp no celular
- [ ] Conferir se título, descrição, OG e JSON-LD batem com o texto visível
- [ ] Se entrar domínio próprio: atualizar `canonical`, OG `url`/`image`,
      `sitemap.xml`, `robots.txt` e adicionar `CNAME`

## Rodar local

```bash
python3 -m http.server    # de dentro desta pasta → http://localhost:8000
```

Um servidor local é necessário: o formulário só aceita origens conhecidas, e
`http://localhost:8000` é uma delas.
