import AutorService from "../services/autor.service.js";

async function createAutor(req, res, next){    
    try {
        let autor = req.body;
        if(!autor.nome || !autor.tipo || !autor.grupoId) {
            throw new Error('Nome, Tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await AutorService.createAutor(autor);
        res.send(result);
        logger.info(`POST /autor - ${JSON.stringify(autor)}`);

    } catch (error) {
        next(error)
    }    
}

async function getAutores(req, res, next){
    try {        
        const grupoId = req.query.grupoId? req.query.grupoId: 0;
        res.send(await AutorService.getAutores(grupoId));
        logger.info(`GET /autor`);
        
    } catch (error) {
        next(error)
    }
}

async function getAutor(req, res, next){
    try {
        res.send(await AutorService.getAutor(req.params.id));
        logger.info(`GET /autor`);
        
    } catch (error) {
        next(error)
    }
}

async function deleteAutor(req, res, next){
    try {
        await AutorService.deleteAutor(req.params.id)
        res.end();
        logger.info(`DELETE /autor`);
        
    } catch (error) {
        next(error)
    }
}

async function updateAutor(req, res, next){
    try {
        let autor = req.body;
        if(!autor.autorId || !autor.nome || !autor.tipo || !autor.grupoId) {
            throw new Error('Id, Nome, tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await AutorService.updateAutor(autor);
        res.send(result);
        logger.info(`PUT /autor - ${JSON.stringify(autor)}`);
        
    } catch (error) {
        next(error)
    }
}

export default{
    createAutor,
    getAutores,
    getAutor,
    deleteAutor,
    updateAutor
}