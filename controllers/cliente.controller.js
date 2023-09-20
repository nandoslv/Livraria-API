import clienteService from "../services/cliente.service.js";
import ClienteService from "../services/cliente.service.js";

async function createCliente(req, res, next){    
    try {
        let cliente = req.body;

        console.log(cliente)

        if(!cliente.nome || !cliente.email || !cliente.telefone || !cliente.endereco || !cliente.senha) {
            throw new Error('Nome, Email, Telefone, Endereco e Senha são obrigatórios!') 
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
        logger.info(`GET /cliente/Id`);
        
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
        if(!cliente.clienteId || !cliente.nome || !cliente.email || !cliente.telefone || !cliente.endereco || !cliente.senha) {
            throw new Error('Id, Nome, Email, Telefone, Endereco e Senha são obrigatórios!') 
        }

        const clienteDados = await clienteService.getCliente(cliente.clienteId);
        
        if((req.auth.user != "admin") &&  (req.auth.user != clienteDados.email)){
            res.status(401).send('User not authorize!');
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