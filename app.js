const express = require("express")
const app = express()

//para aceitar arquivos json
app.use(express.json())

const port = 8000

//Impotantando as rotas
const rotaLivro = require('./rotas/livro')


app.use("/livros", rotaLivro) //chamando a rota

app.listen(port, () => {
    console.log(`Escultando a porta ${port}`)
})