# 🚀 API REST - Gerenciamento de Produtos

API RESTful desenvolvida com **Node.js e Express** para gerenciamento de produtos, implementando operações CRUD completas.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- CORS

---

## 📦 Funcionalidades

✔ Listar todos os produtos  
✔ Buscar produto por ID  
✔ Criar novo produto  
✔ Atualizar produto existente  
✔ Remover produto  

---

## 🔗 Rotas da API

| Método | Rota | Descrição |
|--------|------|------------|
| GET | /products | Lista todos os produtos |
| GET | /products/:id | Busca produto por ID |
| POST | /products | Cria novo produto |
| PUT | /products/:id | Atualiza produto |
| DELETE | /products/:id | Remove produto |

---

## ▶️ Como executar o projeto

```bash
# Clonar repositório
git clone https://github.com/joaovictorisidoro/api01.git

# Entrar na pasta
cd api01

# Instalar dependências
npm install

# Rodar servidor
node server.js
