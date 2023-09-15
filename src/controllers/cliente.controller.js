import ClienteService from "../services/cliente.service.js";

async function createCliente(req, res, next){    
    try {
        let cliente = req.body;
        if(!cliente.nome || !cliente.tipo || !cliente.grupoId) {
            throw new Error('Nome, Tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await ClienteService.createCliente(cliente);
        res.send(result);
        logger.info(`POST /cliente - ${JSON.stringify(cliente)}`);

    } catch (error) {
        next(error)
    }    
}

async function getClientes(req, res, next){
    try {        
        const grupoId = req.query.grupoId? req.query.grupoId: 0;
        res.send(await ClienteService.getClientes(grupoId));
        logger.info(`GET /cliente`);
        
    } catch (error) {
        next(error)
    }
}

async function getCliente(req, res, next){
    try {
        res.send(await ClienteService.getCliente(req.params.id));
        logger.info(`GET /cliente`);
        
    } catch (error) {
        next(error)
    }
}

async function deleteCliente(req, res, next){
    try {
        await ClienteService.deleteCliente(req.params.id)
        res.end();
        logger.info(`DELETE /cliente`);
        
    } catch (error) {
        next(error)
    }
}

async function updateCliente(req, res, next){
    try {
        let cliente = req.body;
        if(!cliente.clienteId || !cliente.nome || !cliente.tipo || !cliente.grupoId) {
            throw new Error('Id, Nome, tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await ClienteService.updateCliente(cliente);
        res.send(result);
        logger.info(`PUT /cliente - ${JSON.stringify(cliente)}`);
        
    } catch (error) {
        next(error)
    }
}

export default{
    createCliente,
    getClientes,
    getCliente,
    deleteCliente,
    updateCliente
}