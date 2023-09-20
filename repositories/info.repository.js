import { ObjectId } from "mongodb";
import { getClient } from "./mongo.db.js";

async function createInfo(info) {
    const client = getClient();
    try {
        await client.connect();
        await client.db("livraria-api").collection("livro-info").insertOne(info);
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function updateInfo(info) {
    const client = getClient();
    try {        
        await client.connect();
        await client.db("livraria-api").collection("livro-info").updateOne(            
            { "livroid": parseInt(info.livroid)},
            { $set: { ...info } }
        );
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function getInfos() {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("livraria-api").collection("livro-info").find({}).toArray();
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function getInfo(livroId) {
    const client = getClient();    
    try {
        await client.connect();
        return await client.db("livraria-api")
        .collection("livro-info")
        .findOne({ "livroid": parseInt(livroId) });
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function deleteInfo(infoId) {
    const client = getClient();    
    try {
        await client.connect();
        return await client.db("livraria-api")
        .collection("livro-info")
        .deleteOne({ "livroid": parseInt(infoId)});
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }
}

async function createAvaliacao(livroId, avaliacao){
    const client = getClient();
    try {
        await client.connect();
        let info = await getInfo(livroId);        

        if(info){
            info.avaliacoes.push(avaliacao);
            await client.db("livraria-api").collection("livro-info").updateOne(            
                { "livroid": parseInt(livroId)},            
                { $set: { avaliacoes: info.avaliacoes } }
            );            
        }
    } catch (err) {
        throw err;
    } finally {
        await client.close();
    }

}

async function deleteAvaliacao(livroId, avaliacaoIndex){
    const client = getClient();
    try {
        await client.connect();
        let info = await getInfo(livroId);        

        if(info){            
            let avaliacoes = info.avaliacoes;
            let avaliacaoRemovida = avaliacoes.splice(avaliacaoIndex, 1);
            await client.db("livraria-api").collection("livro-info").updateOne(            
                { "livroid": parseInt(livroId)},            
                { $set: { avaliacoes: avaliacoes} }
            );            
        }
    } catch (err) {
        throw err;
    } finally {
        await client.close();
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