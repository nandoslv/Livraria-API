import infoRepository from "../repositories/info.repository.js";
import LivroRepository from "../repositories/livro.repository.js"
import VendaRepository from "../repositories/venda.repository.js";

async function createLivro(livro){
    return await LivroRepository.insertLivro(livro);
}

async function getLivros(autorid){
    return await LivroRepository.getLivros(autorid);
}

async function getLivrosByAutor(autorId){
    return await LivroRepository.getLivrosByAutor(autorId);
}

async function getLivro(id){
    
    let livro = await LivroRepository.getLivro(id);
    let info = await infoRepository.getInfo(id);

    return {...info, ...livro};
}

async function deleteLivro(id){    
    let qtvendas = await VendaRepository.getVendasByLivroId(id);
    if(qtvendas.length){
        throw new Error('Não foi possível excluir o Livro informado. Existem vendas(s) associada(s) a ele.')
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
    updateLivro,
    getLivrosByAutor
}