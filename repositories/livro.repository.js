import Livro from "../models/livro.model.js";

async function insertLivro(livro) {
    try {
        return await Livro.create(livro);
    } catch (error) {
        throw error;
    }
}

async function getLivros(autorid = 0) {
    try {
        if (autorid) {
            return await Livro.findAll({
                where: {
                    autorid
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
        return await Livro.findByPk(id, { raw: true })
    } catch (error) {
        throw error;
    }
}

async function updateLivro(livro) {
    try {
        console.log(livro)
        await Livro.update({ valor: livro.valor }, {
            where: {
                livroid: livro.livroid
            }
        });
        return await getLivro(livro.livroid);
    } catch (error) {
        throw error;
    }
}

async function deleteLivro(id) {
    try {
        await Livro.destroy({
            where: {
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