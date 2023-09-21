import Venda from "../models/venda.model.js";

async function insertVenda(venda) {
    try {        
        return await Venda.create(venda);
    } catch (error) {
        throw error;        
    }
}

async function getVendas(vendaId=0) {
    try {
        if(vendaId){                        
            return await Venda.findAll({
                where: {
                    vendaId
                }
            });
        }        
        return await Venda.findAll();
        
    } catch (error) {
        throw error;
    }
}

async function getVendasByLivroId(livroid) {
    try {        
        return await Venda.findAll({
            where: {
                livroid
            }
            
        },{ raw: true });                
    } catch (error) {
        throw error;
    }
}

async function getVendasByClienteId(clienteid) {
    try {        
        return await Venda.findAll({
            where: {
                clienteid
            }
            
        },{ raw: true });                
    } catch (error) {
        throw error;
    }
}

async function getVenda(id) {
    try {
        return await Venda.findByPk(id)        
    } catch (error) {
        throw error;
    }
}

async function updateVenda(venda) {
    try {
        await Venda.update(venda, {
            where:{
                vendaId: Venda.vendaId
            }
        });
        return await getVenda(Venda.vendaId);
    } catch (error) {
        throw error;
    }   
}

async function deleteVenda(id) {
    try {
        await Venda.destroy({
            where:{
                vendaId: id
            }
        })
    } catch (error) {
        throw error;
    }
}

export default {
    insertVenda,
    getVendas,
    getVenda,
    updateVenda,
    deleteVenda,
    getVendasByLivroId,
    getVendasByClienteId
}