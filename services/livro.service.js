import infoRepository from "../repositories/info.repository.js";
import LivroRepository from "../repositories/livro.repository.js"

async function createLivro(livro){
    return await LivroRepository.insertLivro(livro);
}

async function getLivros(){
    return await LivroRepository.getLivros();
}

async function getLivro(id){
    
    let livro = await LivroRepository.getLivro(id);
    let info = await infoRepository.getInfo(id);

    return {...info, ...livro};
}

async function deleteLivro(id){
    //todo: antes de excluir um livro, verificar se existem vendas realizadas para ele. Caso exista, bloquear a exclusão

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