import ClienteRepository from "../repositories/cliente.repository.js"
import VendaRepository from "../repositories/venda.repository.js";

async function createCliente(cliente){
    return await ClienteRepository.insertCliente(cliente);
}

async function getClientes(){
    return await ClienteRepository.getCliente();
}

async function getCliente(id){
    return await ClienteRepository.getCliente(id);
}

async function getClienteByEmail(email){
    return await ClienteRepository.getClienteByEmail(email);
}

async function deleteCliente(id){
    let qtVendas = await VendaRepository.getVendasByClienteId(id);
    if(qtVendas.length){
        throw new Error('Não foi possível excluir o Cliente informado. Existem venda(s) associada(s) a ele.')
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
    getClienteByEmail,
    deleteCliente,
    updateCliente
}