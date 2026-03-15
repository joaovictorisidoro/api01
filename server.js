const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

// Banco fake em memória
let products = [
    { id: 1, name: "Notebook", price: 3500 },
    { id: 2, name: "Smartphone", price: 2200 }
]

// 🔹 GET - listar produtos
app.get("/products", (req, res) => {
    res.json(products)
})

// 🔹 GET por ID
app.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id)
    if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" })
    }
    res.json(product)
})

// 🔹 POST - criar produto
app.post("/products", (req, res) => {
    const { name, price } = req.body

    const newProduct = {
        id: products.length + 1,
        name,
        price
    }

    products.push(newProduct)
    res.status(201).json(newProduct)
})

// 🔹 PUT - atualizar produto
app.put("/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id)

    if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" })
    }

    product.name = req.body.name ?? product.name
    product.price = req.body.price ?? product.price

    res.json(product)
})

// 🔹 DELETE - remover produto
app.delete("/products/:id", (req, res) => {
    products = products.filter(p => p.id != req.params.id)
    res.json({ message: "Produto removido com sucesso" })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`🚀 API rodando em http://localhost:${PORT}`)
})