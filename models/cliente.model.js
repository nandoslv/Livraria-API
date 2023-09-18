import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Cliente = db.define('clientes', {
    clienteid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }, 

    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
});

export default Cliente;