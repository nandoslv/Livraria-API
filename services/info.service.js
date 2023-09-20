import InfoRepository from "../repositories/info.repository.js"

async function createInfo(info){
    return await InfoRepository.createInfo(info);
}

async function getInfos(){
    return await InfoRepository.getInfos();
}

async function getInfo(id){
    return await InfoRepository.getInfo(id);
}

async function deleteInfo(id){
    //todo: antes de excluir um info, verificar se existem vendas realizadas para ele. Caso exista, bloquear a exclusão    
    await InfoRepository.deleteInfo(id);
}

async function updateInfo(info){
    return await InfoRepository.updateInfo(info);
}

async function createAvaliacao(livroId, avaliacao){
    return await InfoRepository.createAvaliacao(livroId, avaliacao);
}

async function deleteAvaliacao(livroId, avaliacaoIndex){
    return await InfoRepository.deleteAvaliacao(livroId, avaliacaoIndex);
}

export default {
    createInfo,
    getInfos,
    getInfo,
    deleteInfo,
    updateInfo,
    createAvaliacao,
    deleteAvaliacao
}