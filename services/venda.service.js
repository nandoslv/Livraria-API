import VendaRepository from "../repositories/venda.repository.js"

async function createVenda(venda){
    return await VendaRepository.insertVenda(venda);
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