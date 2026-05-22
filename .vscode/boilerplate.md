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
npm install --save-dev prettier eslint-config-prettier prettier-plugin-tailwindcss  typescript-eslint clsx tailwind-merge husky lint-staged @trivago/prettier-plugin-sort-imports
```

> Copiar os arquivos de config: `eslint.config.mjs`, `.prettierrc.json`, `.gitignore`, `.vscode/` iniciar o husky

```bash
npx husky init
```

> Adicionar o comando npx lint-staged ao arquivo /husky/pre-commit

adicionar ao objeto raiz de package.json :

```json
"lint-staged": {
  "*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,css,md}": [
    "prettier --write"
  ]
}
```

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

const id = nanoid() // "V1StGXR8_Z5jdHi6B-myT"  (21 chars, padrão)
const id = nanoid(10) // "IRFa-VaY2b"              (tamanho customizável)
```

### React Hook Form + Zod (validação de formulários)

```bash
npm install react-hook-form zod @hookform/resolvers
```

```ts
// Uso básico
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
```

> ⚠️ No Next.js, react-hook-form só funciona em Client Components. Adicionar `'use client'` no topo do arquivo.

### Hooks utilitários

```bash
npm install @uidotdev/usehooks
```

### Datas

```bash
npm install date-fns
```

### Estados Globais - zustand

```bash
npm install zustand
```

### Animações

```bash
npm install motion
```

(antigo `framer-motion`, agora chamado `motion`)

---

### Internacionalização (i18n)

No Next.js App Router, o i18n é feito de forma diferente do React puro.

```bash
npm install next-intl
```

#### Estruture o projeto pensando em múltiplos idiomas

Antes de criar qualquer componente, organize a árvore do projeto corretamente.

```txt
src/
│
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       └── page.tsx
│
├── messages/
│   ├── pt.json
│   └── en.json
│
├── i18n/
│   ├── routing.ts
│   ├── navigation.ts
│   └── request.ts
│
└── middleware.ts
```

#### Crie os arquivos de tradução

Esses arquivos armazenam os textos da aplicação.

- messages/pt.json

```json
{
  "HomePage": {
    "title": "Bem-vindo",
    "description": "Seu projeto começou."
  }
}
```

- messages/en.json

```json
{
  "HomePage": {
    "title": "Welcome",
    "description": "Your project has started."
  }
}
```

#### Configure o roteamento dos idiomas

Crie:

- src/i18n/routing.ts

```ts
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
})
```

#### 4. Configure a navegação internacionalizada

Crie:

- src/i18n/navigation.ts

```ts
import { createNavigation } from 'next-intl/navigation'

import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
```

#### 5. Configure o carregamento das traduções

Crie:

- src/i18n/request.ts

```ts
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale

  return {
    locale: currentLocale!,
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  }
})
```

#### 6. Configure o middleware

Crie:

- src/proxy.ts

```ts
import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
}
```

#### Layouts

nos layouts há uma mudança importante, o next faz merge dos layouts, portanto não precisa se preocupar que o dom nao vai
ficar com html boy dentro de html body. sabendo disso por causa da internacionalização, se separa normalmente assim o s
layouts.

O root layout cuida de:

- HTML base
- BODY
- CSS global
- providers globais
- tema
- auth
- contextos da aplicação

src/app/layout.tsx

```tsx
import AppProviders from '@/components/providers/appProviders'

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning className={`h-full antialiased`}>
      <body className='flex min-h-full flex-col'>
        <AppProviders>{children} </AppProviders>
      </body>
    </html>
  )
}
```

Locale Layout

- idioma atual
- next-intl
- metadata dinâmica
- html lang

src/app/[locale]/layout.tsx

```tsx
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
```

#### Use traduções nas páginas

src/app/[locale]/page.tsx

```tsx
import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
  const t = await getTranslations('HomePage')

  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  )
}
```

#### 9. Use i18n em componentes client

src/components/hero.tsx

```tsx
'use client'

import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('HomePage')

  return (
    <section>
      <h2>{t('title')}</h2>
    </section>
  )
}
```

#### 10. Crie um seletor de idiomas

src/components/language-switcher.tsx

```tsx
'use client'

import { Link, usePathname } from '@/i18n/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()

  return (
    <div>
      <Link href={pathname} locale='pt'>
        PT
      </Link>

      <Link href={pathname} locale='en'>
        EN
      </Link>
    </div>
  )
}
```

## No layout principal

adicionar na tag html o seguinte atributo: suppressHydrationWarning motivo: Por que suppressHydrationWarning no <html>?
Extensões de browser (como tradutores) modificam o DOM antes do React hidratar, causando warnings. Essa prop suprime
esses warnings falsos — é seguro usar no <html>.

## Estrutura de pastas recomendada (App Router)

```txt
src/
│
├── app/
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   │
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx
│       │
│       ├── (public)/
│       │   ├── about/
│       │   │   └── page.tsx
│       │   │
│       │   ├── pricing/
│       │   │   └── page.tsx
│       │   │
│       │   └── contact/
│       │       └── page.tsx
│       │
│       ├── (auth)/
│       │   ├── login/
│       │   │   └── page.tsx
│       │   │
│       │   └── register/
│       │       └── page.tsx
│       │
│       ├── dashboard/
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   │
│       │   ├── analytics/
│       │   │   └── page.tsx
│       │   │
│       │   ├── settings/
│       │   │   └── page.tsx
│       │   │
│       │   └── users/
│       │       ├── page.tsx
│       │       │
│       │       └── [id]/
│       │           └── page.tsx
│       │
│       └── api/
│           └── webhook/
│               └── route.ts
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   ├── card.tsx
│   │   └── form.tsx
│   │
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── sidebar.tsx
│   │   ├── footer.tsx
│   │   └── page-container.tsx
│   │
│   ├── shared/
│   │   ├── logo.tsx
│   │   ├── language-switcher.tsx
│   │   ├── user-avatar.tsx
│   │   └── empty-state.tsx
│   │
│   └── providers/
│       ├── app-providers.tsx
│       ├── theme-provider.tsx
│       ├── auth-provider.tsx
│       └── query-provider.tsx
│
├── features/
│   ├── auth/
│   │   ├── actions/
│   │   │   ├── login.ts
│   │   │   └── register.ts
│   │   │
│   │   ├── components/
│   │   │   ├── login-form.tsx
│   │   │   └── register-form.tsx
│   │   │
│   │   ├── hooks/
│   │   │   └── use-current-user.ts
│   │   │
│   │   ├── schemas/
│   │   │   └── auth-schema.ts
│   │   │
│   │   └── types/
│   │       └── auth.types.ts
│   │
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── actions/
│   │
│   └── billing/
│       ├── components/
│       ├── actions/
│       └── services/
│
├── hooks/
│   ├── use-mobile.ts
│   ├── use-debounce.ts
│   ├── use-mounted.ts
│   └── use-theme.ts
│
├── stores/
│   ├── auth-store.ts
│   ├── modal-store.ts
│   └── sidebar-store.ts
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── db.ts
│   ├── env.ts
│   ├── utils.ts
│   │
│   └── validations/
│       ├── auth.ts
│       └── user.ts
│
├── services/
│   ├── stripe.ts
│   ├── github.ts
│   ├── discord.ts
│   └── notion.ts
│
├── types/
│   ├── api.ts
│   ├── database.ts
│   ├── user.ts
│   └── global.ts
│
├── constants/
│   ├── routes.ts
│   ├── metadata.ts
│   └── app.ts
│
├── i18n/
│   ├── routing.ts
│   ├── navigation.ts
│   └── request.ts
│
├── messages/
│   ├── pt.json
│   ├── en.json
│
│
├── styles/
│   └── globals.css
│
├── proxy.ts
├── env.ts
└── next.config.ts
```

---

## Lembretes importantes do App Router

- **Server Components** são o padrão — não têm acesso a `useState`, `useEffect`, eventos de browser
- Adicionar `'use client'` apenas quando precisar de interatividade ou hooks
- `fetch()` nativo funciona no servidor com cache automático
- Variáveis de ambiente: prefixo `NEXT_PUBLIC_` para expor ao client
- Imagens: usar sempre `next/image` em vez de `<img>` para otimização automática
- Links: usar sempre `next/link` em vez de `<a>` para navegação client-side
