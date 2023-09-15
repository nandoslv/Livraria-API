import Livro from "../models/livro.model.js";

async function insertLivro(livro) {
    try {        
        return await Livro.create(livro);
    } catch (error) {
        throw error;        
    }
}

async function getLivros(livroId=0) {
    try {
        if(livroId){                        
            return await Livro.findAll({
                where: {
                    livroId
                }
            });
        }        
        return await Livro.findAll();
        
    } catch (error) {
        throw error;
    }
}

async function getLivro(id) {
    try {
        return await Livro.findByPk(id)        
    } catch (error) {
        throw error;
    }
}

async function updateLivro(livro) {
    try {
        await Livro.update(livro, {
            where:{
                livroId: Livro.livroId
            }
        });
        return await getLivro(Livro.livroId);
    } catch (error) {
        throw error;
    }   
}

async function deleteLivro(id) {
    try {
        await Livro.destroy({
            where:{
                livroId: id
            }
        })
    } catch (error) {
        throw error;
    }
}

export default {
    insertLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro
}