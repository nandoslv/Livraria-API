import ClienteRepository from "../repositories/cliente.repository.js"

async function createCliente(cliente){
    return await ClienteRepository.insertCliente(cliente);
}

async function getClientes(){
    return await ClienteRepository.getClientes();
}

async function getCliente(id){
    return await ClienteRepository.getCliente(id);
}

async function deleteCliente(id){
    if(await AlunoRepository.getAlunos(id).length){
        throw new Error('Não foi possível excluir o Cliente informado. Existem aluno(s) associado(s) a ele.')
    }
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