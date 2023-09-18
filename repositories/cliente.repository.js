import Cliente from "../models/cliente.model.js";

async function insertCliente(cliente) {
    try {        
        return await Cliente.create(cliente);
    } catch (error) {
        throw error;        
    }
}

async function getCliente(clienteId=0) {
    try {
        if(clienteId){                        
            return await Cliente.findByPk(clienteId, {                
                attributes: { exclude: ['senha'] },
            });
        }        
        return await Cliente.findAll({
            attributes: { exclude: ['senha'] } 
        });
        
    } catch (error) {
        throw error;
    }
}

async function updateCliente(cliente) {
    try {
        await Cliente.update(cliente, {
            where:{
                clienteid: cliente.clienteId
            }
        });       
        
        return await getCliente(cliente.clienteId);

    } catch (error) {
        throw error;
    }   
}

async function deleteCliente(id) {
    try {
        await Cliente.destroy({
            where:{
                clienteid: id
            }
        })
    } catch (error) {
        throw error;
    }
}

export default {
    insertCliente,    
    getCliente,
    updateCliente,
    deleteCliente
}