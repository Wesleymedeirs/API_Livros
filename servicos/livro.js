const fs = require("fs")

function getTodosLivros() {
   return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const livroFiltrado = livros.filter((livro) => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const novaLista = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoAlterado = {...livrosAtuais[indiceModificado], ...modificacoes}

    livrosAtuais[indiceModificado] = conteudoAlterado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivro(id){
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const LivroDeletado = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(LivroDeletado))

}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivro
}