import Autor from "../models/autor.model.js";

async function insertAutor(autor) {
    try {        
        return await Autor.create(autor);
    } catch (error) {
        throw error;        
    }
}

async function getAutor(autorId=0) {
    try {
        if(autorId){                        
            return await Autor.findByPk(autorId);
        }        
        return await Autor.findAll();
        
    } catch (error) {
        throw error;
    }
}

async function updateAutor(autor) {
    try {
        await Autor.update(autor, {
            where:{
                autorid: autor.autorId
            }
        });
        return await getAutor(autor.autorId);
    } catch (error) {
        throw error;
    }   
}

async function deleteAutor(id) {
    try {
        await Autor.destroy({
            where:{
                autorid: id
            }
        })
    } catch (error) {
        throw error;
    }
}

export default {
    insertAutor,    
    getAutor,
    updateAutor,
    deleteAutor
}