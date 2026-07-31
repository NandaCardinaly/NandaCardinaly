# Flynine — Site institucional

Landing page estática (HTML + CSS + JS puro, sem build, sem dependências externas)
para a Flynine — empresa de inteligência artificial, automações e análise de dados.

```
flynine-site/
├── index.html
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/logo-mark.svg, favicon.svg
```

## O que já está pronto

- Hero, badges de serviços, "como funciona", diferenciais, pacotes (Starter / Growth / Scale),
  formulário de contato, FAQ e rodapé — tudo em português.
- Formulário de contato já estruturado para o **Salesforce Web-to-Lead** (ver seção 3).
- Logo provisório em `assets/img/logo-mark.svg` e `assets/img/favicon.svg`. Se você me
  enviar o arquivo real da Flynine (PNG/SVG), eu substituo esses arquivos sem tocar no resto.

### Antes de publicar, atualize:

- `assets/img/logo-mark.svg` / `favicon.svg` — com a arte oficial, se quiser trocar o placeholder.
- Número de WhatsApp: buscar `5500000000000` em `index.html` (aparece 2x) e trocar pelo seu número
  no formato `55DDDNÚMERO`.
- E-mail exibido na seção de contato (`contato@flynine.com.br`).
- `oid` e `retURL` do formulário Salesforce (explicado abaixo).
- Link do LinkedIn no rodapé/contato.

---

## 1. Hospedagem gratuita + domínio (para começar sem custo)

**Recomendação: Cloudflare Pages.** Gratuito, sem limite prático de tráfego para um site
institucional, HTTPS automático, e não depende de cartão de crédito.

1. Crie uma conta em Cloudflare Pages e conecte este repositório GitHub.
2. Build settings: nenhum framework — "Root directory" = `flynine-site`, sem comando de build
   (é HTML estático).
3. Em poucos minutos você tem uma URL grátis do tipo `https://flynine.pages.dev`.

Alternativas igualmente boas e gratuitas: **Vercel** ou **Netlify** (mesmo fluxo: conectar repo,
apontar a pasta `flynine-site`, deploy automático a cada push).

### E o domínio?

Não existe hoje um domínio `.com`/`.com.br` realmente gratuito e confiável — os serviços que
prometem isso (ex.: Freenom) estão instáveis e podem prejudicar a credibilidade. Duas opções:

- **Enquanto não fecha o primeiro cliente:** use o subdomínio gratuito da própria hospedagem
  (`flynine.pages.dev`, `flynine.vercel.app` etc.). Custo zero, funciona perfeitamente.
- **Domínio real e barato:** um `.com.br` custa ~R$ 40/ano no [registro.br](https://registro.br)
  e um `.com` custa ~US$ 10-15/ano (Cloudflare Registrar, sem markup, é a opção mais transparente).
  Assim que tiver o primeiro contrato, esse é o investimento com melhor retorno de credibilidade.
  Depois de comprado, você aponta o domínio para o Cloudflare Pages/Vercel/Netlify sem custo
  adicional de hospedagem.

> Importante: para ter e-mail profissional (seção 2) você **precisa** de um domínio de verdade
> (mesmo que gratuito, tipo `.eu.org` — ver abaixo), porque e-mail depende de registros DNS (MX)
> que subdomínios de hospedagem (`.pages.dev`, `.vercel.app`) não deixam você controlar.

**Se quiser mesmo zero custo até ali:** o [eu.org](https://nic.eu.org) oferece subdomínios
gratuitos (`flynine.eu.org`) com controle total de DNS, incluindo MX — dá para usar com o
Zoho Mail grátis da seção 2. É uma ponte legítima até comprar o domínio definitivo.

---

## 2. E-mail profissional gratuito (não Gmail/Outlook)

**Recomendação: Zoho Mail — plano "Free Forever".** Suporta domínio próprio, até 5 usuários,
5 GB por usuário, webmail e apps mobile — sem custo.

Passo a passo:

1. Tenha um domínio (real ou o `eu.org` da seção 1) com acesso ao painel de DNS.
2. Crie a conta em Zoho Mail (plano gratuito) e escolha "usar meu próprio domínio".
3. Zoho vai te dar registros de verificação (TXT), depois os registros **MX**, **SPF** e
   **DKIM** — adicione tudo no DNS do seu domínio.
4. Crie a caixa `contato@flynine.com.br` (ou o domínio que escolher).
5. Configure SPF/DKIM corretamente — isso evita que seus e-mails caiam em spam quando você
   mandar propostas para clientes.

Isso te dá `contato@flynine.com.br` (ou similar) em vez de um Gmail — muito mais profissional
para propostas e contratos.

---

## 3. Integração com Salesforce (plano gratuito, até 2 usuários)

O formulário de contato do site (`index.html`, seção `#contato`) já está no formato de
**Web-to-Lead** do Salesforce — falta só os dados da sua org.

### 3.1 Capturar leads do site direto no Salesforce

1. No Salesforce: **Setup → Web-to-Lead → Create Web-to-Lead Form**.
2. Selecione os campos: Nome, Sobrenome, Empresa, E-mail, Telefone, Descrição (e crie um
   campo customizado "Serviço de interesse" se quiser manter o `select` do formulário).
3. O Salesforce gera um HTML com o `oid` (ID da sua organização) e outros hidden inputs.
4. No arquivo `index.html`, troque:
   - `value="SEU_ORG_ID_AQUI"` pelo `oid` gerado.
   - `value="https://flynine.com.br/obrigado"` pela URL real de "obrigado" (pode ser uma
     seção `#obrigado` da própria landing page).
   - Se o Salesforce gerar um nome diferente para o campo customizado (ex.: `00N5f00000XXXXX`
     em vez de `00N_interest`), ajuste o `name` do `<select>` para o nome real.
5. Publique o site — todo envio do formulário vira automaticamente um **Lead** no seu Salesforce.

### 3.2 Organizar e priorizar os leads

- Use a visão **Kanban** de Leads (nativa, grátis) para ver o funil por estágio.
- Configure **Lead Assignment Rules** simples (Setup → Lead Assignment Rules) se um dia tiver
  mais de uma pessoa vendendo.
- Crie campos/valores de "Origem do Lead" = "Site Flynine" para saber o que veio de onde.

### 3.3 Propostas personalizadas

- Ative **Quotes** em Setup → Quote Settings, e vincule aos Opportunities — dá para gerar
  PDF de proposta direto do Salesforce, com seus serviços/pacotes como line items.
- Crie **Email Templates** (Lightning) com o texto-base de cada pacote (Starter/Growth/Scale)
  para agilizar o envio de proposta personalizada a cada lead novo.
- Para automatizar (ex.: mandar e-mail de boas-vindas assim que o Lead entra), use o
  **Flow Builder** — é nativo e gratuito, e você monta sem código.

### 3.4 Fechamento

- Converta o Lead em **Contact + Opportunity** quando a negociação avançar.
- Acompanhe estágio da Opportunity (Prospecting → Proposal → Negotiation → Closed Won) para
  saber exatamente quanto está prestes a fechar.

---

## Próximos passos sugeridos

1. Me envie o arquivo real do logo da Flynine para eu substituir o placeholder.
2. Decida o domínio (subdomínio grátis agora, `.com.br` depois) e me avise para eu já
   atualizar todos os links/e-mails do site.
3. Configure o Web-to-Lead no Salesforce e me envie o `oid` para eu finalizar o formulário
   (ou você mesma troca, seguindo o passo 3.1).
