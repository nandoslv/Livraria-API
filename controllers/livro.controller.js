import LivroService from "../services/livro.service.js";

async function createLivro(req, res, next){    
    try {
        let livro = req.body;
        if(!livro.nome || !livro.valor || !livro.autorid || !livro.estoque) {
            throw new Error('Nome, Valor e AutorId são obrigatórios!') 
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
        const autorid = req.query.autorid? req.query.autorid: 0;
        res.send(await LivroService.getLivros(autorid));
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
        if(!livro.livroid || !livro.valor ) {
            throw new Error('LivroId, Nome, Valor e AutorId são obrigatórios!') 
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