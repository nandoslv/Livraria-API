import Autor from "../models/autor.model.js";

async function insertAutor(autor) {
    try {        
        return await Autor.create(autor);
    } catch (error) {
        throw error;        
    }
}

async function getAutores(autorId=0) {
    try {
        if(autorId){                        
            return await Autor.findAll({
                where: {
                    autorId
                }
            });
        }        
        return await Autor.findAll();
        
    } catch (error) {
        throw error;
    }
}

async function getAutor(id) {
    try {
        return await Autor.findByPk(id)        
    } catch (error) {
        throw error;
    }
}

async function updateAutor(autor) {
    try {
        await Autor.update(autor, {
            where:{
                autorId: Autor.autorId
            }
        });
        return await getAutor(Autor.autorId);
    } catch (error) {
        throw error;
    }   
}

async function deleteAutor(id) {
    try {
        await Autor.destroy({
            where:{
                autorId: id
            }
        })
    } catch (error) {
        throw error;
    }
}

export default {
    insertAutor,
    getAutores,
    getAutor,
    updateAutor,
    deleteAutor
}