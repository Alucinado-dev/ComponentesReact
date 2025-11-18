# Meu Catálogo Pessoal de Componentes React 🚀

Este repositório é o meu "baú" pessoal de componentes React. Ele serve como um lugar centralizado para guardar, testar e visualizar componentes que eu criei ou adaptei para uso em diversos projetos.

> **Atenção:** A ideia aqui não é ser uma biblioteca instalável via `npm`, mas sim um **catálogo prático para copiar e colar** o que for necessário.

---

## 🎯 Objetivo

O principal objetivo é ter um ambiente isolado e simples para:

1. **Armazenar:** Guardar componentes reutilizáveis em um só lugar.
2. **Testar:** Usar o arquivo `App.tsx` como um "playground" para renderizar e testar um componente por vez.
3. **Copiar:** Facilitar a migração de um componente pronto para um projeto real.

## 📁 Estrutura do Projeto

A organização é bem simples:

- `src/components/`: Contém todos os componentes.
- `src/components/NomeDoComponente/`: Cada componente vive em sua própria pasta, contendo o arquivo `.tsx`, estilos e o que mais for preciso.
- `src/App.tsx`: É o nosso palco de testes. Importe e renderize aqui o componente que você está desenvolvendo ou testando.

## 🛠️ Como Usar um Componente em Outro Projeto

O fluxo de trabalho é manual e direto:

1. **Navegue:** Encontre o componente desejado na pasta `src/components/`.
2. **Copie:** Copie a pasta inteira do componente (ex: `src/components/Spinner`) para o diretório de componentes do seu projeto final.
3. **Instale Dependências:** Verifique no topo do arquivo do componente se ele precisa de alguma biblioteca externa (ex: `react-spinners`). Se sim, instale-a no seu projeto:

    ```bash
    npm install nome-da-biblioteca
    ```

4. **Use:** Importe e utilize o componente no seu código normalmente.

## ⚙️ Rodando Este Projeto Localmente

Para visualizar e testar os componentes neste repositório:

```bash
# 1. Clone o repositório
git clone https://github.com/Alucinado-dev/ComponentesReact.git

# 2. Instale as dependências
npm install

# 3. Rode o ambiente de desenvolvimento (Vite)
npm run dev
```

Agora, basta editar o arquivo `src/App.tsx` para importar e visualizar o componente que desejar!
