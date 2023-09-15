import Cliente from "../models/cliente.model.js";

async function insertCliente(cliente) {
    try {        
        return await Cliente.create(cliente);
    } catch (error) {
        throw error;        
    }
}

async function getClientes(clienteId=0) {
    try {
        if(clienteId){                        
            return await Cliente.findAll({
                where: {
                    clienteId
                }
            });
        }        
        return await Cliente.findAll();
        
    } catch (error) {
        throw error;
    }
}

async function getCliente(id) {
    try {
        return await Cliente.findByPk(id)        
    } catch (error) {
        throw error;
    }
}

async function updateCliente(cliente) {
    try {
        await Cliente.update(cliente, {
            where:{
                clienteId: Cliente.clienteId
            }
        });
        return await getCliente(Cliente.clienteId);
    } catch (error) {
        throw error;
    }   
}

async function deleteCliente(id) {
    try {
        await Cliente.destroy({
            where:{
                clienteId: id
            }
        })
    } catch (error) {
        throw error;
    }
}

export default {
    insertCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente
}