import InfoService from "../services/info.service.js";

async function createInfo(req, res, next){    
    try {
        let info = req.body;
        if(!info.livroid || !info.paginas || !info.descricao || !info.editora ) {
            throw new Error('LivroId, Descrição, Editora e Páginas são obrigatórios!') 
        }
        
        const result = await InfoService.createInfo(info);
        res.send(result);
        logger.info(`POST /livro/info - ${JSON.stringify(info)}`);

    } catch (error) {
        next(error)
    }    
}

async function updateInfo(req, res, next){
    try {
        let info = req.body;
        if(!info.livroid || !info.paginas || !info.descricao || !info.editora ) {
            throw new Error('LivroId, Descrição, Editora e Páginas são obrigatórios!') 
        }
        
        const result = await InfoService.updateInfo(info);
        res.send(result);
        logger.info(`PUT /livro/info - ${JSON.stringify(info)}`);
        
    } catch (error) {
        next(error)
    }
}

async function getInfos(req, res, next){
    try {                
        res.send(await InfoService.getInfos());
        logger.info(`GET /livro/info`);
        
    } catch (error) {
        next(error)
    }
}

async function getInfo(req, res, next){
    try {                
        res.send(await InfoService.getInfo(req.params.id));
        logger.info(`GET /livro/info/:id`);
        
    } catch (error) {
        next(error)
    }
}

async function deleteInfo(req, res, next){
    try {                
        res.send(await InfoService.deleteInfo(req.params.id));
        logger.info(`DELETE /livro/info/:id`);
        
    } catch (error) {
        next(error)
    }
}

async function createAvaliacao(req, res, next){
    try {
        const avaliacao = req.body;
        res.send(await InfoService.createAvaliacao(req.params.id, avaliacao))
        logger.info(`GET /info/avaliacao`);
    } catch (error) {
        next(error)
    }
}

async function deleteAvaliacao(req, res, next){
    try {        
        res.send(await InfoService.deleteAvaliacao(req.params.id, req.params.index))
        logger.info(`DELETE /info/avaliacao`);
    } catch (error) {
        next(error)
    }
}


export default {
    createInfo,
    updateInfo,
    getInfos,
    getInfo,
    deleteInfo,
    createAvaliacao,
    deleteAvaliacao
}