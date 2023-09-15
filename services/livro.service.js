import LivroRepository from "../repositories/livro.repository.js"

async function createLivro(livro){
    return await LivroRepository.insertLivro(livro);
}

async function getLivros(){
    return await LivroRepository.getLivros();
}

async function getLivro(id){
    return await LivroRepository.getLivro(id);
}

async function deleteLivro(id){
    if(await AlunoRepository.getAlunos(id).length){
        throw new Error('Não foi possível excluir o Livro informado. Existem aluno(s) associado(s) a ele.')
    }
    await LivroRepository.deleteLivro(id);
}

async function updateLivro(livro){
    return await LivroRepository.updateLivro(livro);
}

export default {
    createLivro,
    getLivros,
    getLivro,
    deleteLivro,
    updateLivro
}