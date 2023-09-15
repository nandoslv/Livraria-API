import LivroService from "../services/livro.service.js";

async function createLivro(req, res, next){    
    try {
        let livro = req.body;
        if(!livro.nome || !livro.tipo || !livro.grupoId) {
            throw new Error('Nome, Tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await LivroService.createLivro(livro);
        res.send(result);
        logger.info(`POST /livro - ${JSON.stringify(livro)}`);

    } catch (error) {
        next(error)
    }    
}

async function getLivros(req, res, next){
    try {        
        const grupoId = req.query.grupoId? req.query.grupoId: 0;
        res.send(await LivroService.getLivros(grupoId));
        logger.info(`GET /livro`);
        
    } catch (error) {
        next(error)
    }
}

async function getLivro(req, res, next){
    try {
        res.send(await LivroService.getLivro(req.params.id));
        logger.info(`GET /livro`);
        
    } catch (error) {
        next(error)
    }
}

async function deleteLivro(req, res, next){
    try {
        await LivroService.deleteLivro(req.params.id)
        res.end();
        logger.info(`DELETE /livro`);
        
    } catch (error) {
        next(error)
    }
}

async function updateLivro(req, res, next){
    try {
        let livro = req.body;
        if(!livro.livroId || !livro.nome || !livro.tipo || !livro.grupoId) {
            throw new Error('Id, Nome, tipo e Proprietario_Id são obrigatórios!') 
        }
        
        const result = await LivroService.updateLivro(livro);
        res.send(result);
        logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
        
    } catch (error) {
        next(error)
    }
}

export default{
    createLivro,
    getLivros,
    getLivro,
    deleteLivro,
    updateLivro
}