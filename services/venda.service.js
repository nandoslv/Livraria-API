import LivroRepository from "../repositories/livro.repository.js";
import VendaRepository from "../repositories/venda.repository.js"

async function createVenda(venda){
    const livro = await LivroRepository.getLivro(venda.livroid);
    if(livro.estoque < 1){
        throw new Error(`Não há estoque disponível para o livro id = ${livro.livroid}.`)
    }    
    venda.valor = livro.valor;
    let vendaRealizada = await VendaRepository.insertVenda(venda);

    livro.estoque = livro.estoque-1;
    await LivroRepository.updateLivroEstoque(livro)   

    return vendaRealizada;
}

async function getVendas(){
    return await VendaRepository.getVendas();
}

async function getVenda(id){
    return await VendaRepository.getVenda(id);
}

async function deleteVenda(id){
    if(await AlunoRepository.getAlunos(id).length){
        throw new Error('Não foi possível excluir o Venda informado. Existem aluno(s) associado(s) a ele.')
    }
    await VendaRepository.deleteVenda(id);
}

async function updateVenda(venda){
    return await VendaRepository.updateVenda(venda);
}

export default {
    createVenda,
    getVendas,
    getVenda,
    deleteVenda,
    updateVenda
}