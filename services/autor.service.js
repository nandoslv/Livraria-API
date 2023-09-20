import AutorRepository from "../repositories/autor.repository.js"
import LivroRepository from "../repositories/livro.repository.js";

async function createAutor(autor){
    return await AutorRepository.insertAutor(autor);
}

async function getAutores(){
    return await AutorRepository.getAutor();
}

async function getAutor(id){
    return await AutorRepository.getAutor(id);
}

async function deleteAutor(id){    
    const livros = await LivroRepository.getLivros(id);
    
    if(livros.length){
        throw new Error('Não foi possível excluir o Autor informado. Existem livros(s) associado(s) a ele.')
    }
    await AutorRepository.deleteAutor(id);
}

async function updateAutor(autor){
    return await AutorRepository.updateAutor(autor);
}

export default {
    createAutor,
    getAutores,
    getAutor,
    deleteAutor,
    updateAutor
}