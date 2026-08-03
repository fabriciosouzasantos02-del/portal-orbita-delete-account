# Portal Orbita — Account Deletion Page (Vercel)

Página de exclusão de conta do Portal Orbita, formatada para deploy na Vercel usando Serverless Functions.

## Estrutura

```
portal-orbita-vercel/
├── index.html          ← Página principal (estático)
├── api/
│   └── enviar.js       ← Serverless Function (envio de e-mail via Resend)
├── vercel.json         ← Configuração do projeto Vercel
├── package.json        ← Dependências do projeto
└── README.md           ← Este arquivo
```

## Como fazer deploy na Vercel

### 1. Conecte o repositório GitHub à Vercel

No painel da Vercel, conecte o repositório GitHub deste projeto. A Vercel detectará automaticamente o `vercel.json`.

### 2. Configure a variável de ambiente na Vercel

No painel da Vercel: **Settings → Environment Variables**

Adicione a seguinte variável:

| Nome | Valor |
|------|-------|
| `RESEND_API_KEY` | Sua chave API do Resend (começa com `re_`) |

### 3. Deploy

Após conectar o repositório e configurar a variável de ambiente, a Vercel fará o deploy automaticamente. O link gerado será a URL que você cadastrará no Google Play Console.

## Funcionalidades

- **Detecção automática de idioma:** Suporta 12 idiomas (PT, EN, ES, FR, DE, IT, JA, KO, ZH, AR, RU, HI) com fallback para inglês.
- **Formulário completo:** Nome, e-mail, motivo da exclusão e confirmação.
- **Envio via API:** Os dados são enviados para `/api/enviar` que usa a API do Resend para enviar o e-mail para `unterstutzung.service@gmail.com`.
- **Comformidade Google Play:** Inclui informações sobre dados excluídos/retidos, período de retenção, e instruções passo a passo.
- **Visual Portal Orbita:** Tema escuro celeste com animação de estrelas, geometria orbital e identidade de marca.
