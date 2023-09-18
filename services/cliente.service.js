import ClienteRepository from "../repositories/cliente.repository.js"

async function createCliente(cliente){
    return await ClienteRepository.insertCliente(cliente);
}

async function getClientes(){
    return await ClienteRepository.getCliente();
}

async function getCliente(id){
    return await ClienteRepository.getCliente(id);
}

async function deleteCliente(id){
    // if(await AlunoRepository.getAlunos(id).length){
    //     throw new Error('Não foi possível excluir o Cliente informado. Existem aluno(s) associado(s) a ele.')
    // }

    //todo: antes de excluir um cliente, verificar se existem vendas cadastradas para ele. Caso exista, bloquear a exclusão     
    await ClienteRepository.deleteCliente(id);
}

async function updateCliente(cliente){
    return await ClienteRepository.updateCliente(cliente);
}

export default {
    createCliente,
    getClientes,
    getCliente,
    deleteCliente,
    updateCliente
}