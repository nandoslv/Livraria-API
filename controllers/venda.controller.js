import VendaService from "../services/venda.service.js";

async function createVenda(req, res, next){    
    try {
        let venda = req.body;
        if(!venda.clienteid || !venda.livroid || !venda.data) {
            throw new Error('ClienteId, LivroId e Data são obrigatórios!') 
        }
        
        const result = await VendaService.createVenda(venda);
        res.send(result);
        logger.info(`POST /venda - ${JSON.stringify(venda)}`);

    } catch (error) {
        next(error)
    }    
}

async function getVendas(req, res, next){
    try {        
        const vendaId = req.query.vendaId? req.query.vendaId: 0;
        res.send(await VendaService.getVendas(vendaId));
        logger.info(`GET /venda`);
        
    } catch (error) {
        next(error)
    }
}

async function getVenda(req, res, next){
    try {
        res.send(await VendaService.getVenda(req.params.id));
        logger.info(`GET /venda`);
        
    } catch (error) {
        next(error)
    }
}

async function deleteVenda(req, res, next){
    try {
        await VendaService.deleteVenda(req.params.id)
        res.end();
        logger.info(`DELETE /venda`);
        
    } catch (error) {
        next(error)
    }
}

async function updateVenda(req, res, next){
    try {
        let venda = req.body;
        if(!venda.vendaId || !venda.nome || !venda.tipo || !venda.grupoId) {
            throw new Error('Id, Nome, tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await VendaService.updateVenda(venda);
        res.send(result);
        logger.info(`PUT /venda - ${JSON.stringify(venda)}`);
        
    } catch (error) {
        next(error)
    }
}

export default{
    createVenda,
    getVendas,
    getVenda,
    deleteVenda,
    updateVenda
}