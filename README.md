# 🧙‍♂️ Harry Potter Movies & Characters

Um projeto em **Next.js** que consome a **API do OMDb** e a **HP API** para exibir informações sobre os **filmes e personagens** do universo de **Harry Potter**.

## 🚀 Demo

🔗 [Acesse o projeto no Vercel](https://harrypotter-gamma.vercel.app/)

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
# Clone este repositório
git clone https://github.com/seu-usuario/harrypotter.git

# Acesse a pasta do projeto
cd harrypotter

# Instale as dependências
npm install

# Crie o arquivo .env.local e adicione sua chave da OMDb
NEXT_PUBLIC_OMDB_API_KEY=sua_chave_aqui

# Rode o projeto
npm run dev
