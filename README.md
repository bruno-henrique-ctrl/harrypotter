# 🧙‍♂️ Harry Potter Movies & Characters

Um projeto em **Next.js** que consome a **API do OMDb** e a **HP API** para exibir informações sobre os **filmes e personagens** do universo de **Harry Potter**.

## 🚀 Demo

🔗 [Acesse o projeto no Vercel](https://harrypotter-gamma.vercel.app/)

## 🛠️ Status da Build
[![Status do Workflow CI](https://github.com/bruno-henrique-ctrl/harrypotter/actions/workflows/main.yml/badge.svg)](https://github.com/bruno-henrique-ctrl/harrypotter/actions)
Você pode acompanhar o status da pipeline de integração contínua (CI) e outros workflows na aba **Actions** do repositório no GitHub.

---

## 🧩 Tecnologias utilizadas

- **Next.js 15**
- **React**
- **Axios** para requisições HTTP
- **OMDb API** – informações sobre os filmes
- **HP API (hp-api.onrender.com)** – informações sobre os personagens
- **TypeScript** (opcional, se o projeto usar)

---

## ⚙️ Funcionalidades

- Exibe uma lista de **filmes do Harry Potter** com informações da **OMDb API**  
- Mostra **detalhes de cada filme**, como título, ano e pôster  
- Lista **personagens** e suas casas, vindos da **HP API**  
- Interface simples e responsiva  

---

## 📦 Como rodar o projeto localmente

```bash
git clone [https://github.com/seu-usuario/harrypotter.git](https://github.com/seu-usuario/harrypotter.git)

cd harrypotter

npm install

NEXT_PUBLIC_OMDB_API_KEY=sua_chave_aqui

npm run dev
