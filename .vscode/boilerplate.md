# Boilerplate Oficial — Next.js

## Criar projeto

```bash
npx create-next-app@latest nome-do-projeto
```

Opções recomendadas no wizard:

- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router (padrão moderno — não usar Pages Router em projetos novos)
- ✅ `src/` directory
- ✅ Turbopack (ainda instável para produção)
- ❌ import alias customizado (deixa o `@/*` padrão)

```bash
cd nome-do-projeto
npm install
npm run dev
```

---

## Configurações do GIT

```bash
git config core.eol lf
git config core.autocrlf input
```

---

## Instalar dependências de dev

```bash
npm install --save-dev prettier eslint-config-prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort typescript-eslint
```

> Copiar os arquivos de config: `eslint.config.mjs`, `.prettierrc.json`, `.gitignore`, `.vscode/`

---

## Dependências opcionais (instalar conforme necessário)

### Ícones — Lucide (básica)

```bash
npm install lucide-react
```

### Ícones — Iconify (completo e flexivel)

```bash
npm install @iconify/react
```


```ts
import { Icon } from '@iconify/react'

<Icon icon="lucide:home" />
<Icon icon="logos:github-icon" />  // logos de marcas
<Icon icon="ph:rocket-bold" />     // Phosphor icons
```

### Gerador de ID

```ts
// Nativo — zero dependência, funciona em Server e Client
const id = crypto.randomUUID()
```

### Gerador de ID com tamanho definido - nanoid

```bash
npm install nanoid
```

```ts
import { nanoid } from 'nanoid'

const id = nanoid()     // "V1StGXR8_Z5jdHi6B-myT"  (21 chars, padrão)
const id = nanoid(10)   // "IRFa-VaY2b"              (tamanho customizável)
```

### React Hook Form + Zod (validação de formulários)

```bash
npm install react-hook-form zod @hookform/resolvers
```

```ts
// Uso básico
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
```

> ⚠️ No Next.js, react-hook-form só funciona em Client Components. Adicionar `'use client'` no topo do arquivo.

### Hooks utilitários

```bash
npm install @uidotdev/usehooks
```

### Internacionalização (i18n)

No Next.js App Router, o i18n é feito de forma diferente do React puro.

```bash
npm install next-intl
```

Seguir documentação: https://next-intl-docs.vercel.app/

### Estados Globais - zustand

```bash
npm install zustand
```

```txt
src/
├── i18n/
│   ├── routing.ts        # define os locales suportados
│   └── request.ts        # config do servidor
├── messages/
│   ├── en.json
│   └── pt.json
└── middleware.ts         # redireciona para o locale correto
```

> ⚠️ Não usar `i18next` diretamente em projetos Next App Router — o `next-intl` é integrado nativamente com o roteamento do Next.
> se for usar só formatação, usar `Intl`, api nativa

### Datas

```bash
npm install date-fns
```

### Animações

```bash
npm install motion
```

(antigo `framer-motion`, agora chamado `motion`)

---

## Estrutura de pastas recomendada (App Router)

``` txt
src/
├── app/                  # Rotas (page.tsx, layout.tsx, loading.tsx)
│   ├── (marketing)/      # Grupo de rotas sem prefixo na URL
│   ├── api/              # Route Handlers (substitui o /api do Express)
│   └── layout.tsx        # Layout raiz
├── components/
│   ├── ui/               # Componentes genéricos (Button, Input, Modal)
│   └── [feature]/        # Componentes específicos de uma feature
├── hooks/                # Custom hooks (sempre 'use client')
├── lib/                  # Funções utilitárias, configs de libs externas
├── types/                # Types e interfaces TypeScript globais
└── styles/               # globals.css (só isso — Tailwind cuida do resto)
```

---

## Lembretes importantes do App Router

- **Server Components** são o padrão — não têm acesso a `useState`, `useEffect`, eventos de browser
- Adicionar `'use client'` apenas quando precisar de interatividade ou hooks
- `fetch()` nativo funciona no servidor com cache automático
- Variáveis de ambiente: prefixo `NEXT_PUBLIC_` para expor ao client
- Imagens: usar sempre `next/image` em vez de `<img>` para otimização automática
- Links: usar sempre `next/link` em vez de `<a>` para navegação client-side
