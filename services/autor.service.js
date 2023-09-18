import AutorRepository from "../repositories/autor.repository.js"

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
    // if(await AlunoRepository.getAlunos(id).length){
    //     throw new Error('Não foi possível excluir o Autor informado. Existem aluno(s) associado(s) a ele.')
    // }
    //todo: antes de excluir um autor, verificar se existem livros cadastrados para ele. Caso exista, bloquear a exclusão
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