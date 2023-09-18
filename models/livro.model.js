import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Autor from "./autor.model.js";

const Livro = db.define('livros', {
    livroid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    valor:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }, 
    estoque:{
        type: Sequelize.INTEGER,
        allowNull: false
    }    
}, {underscored: true});

Livro.belongsTo(Autor, { foreignKey: "autorid" });

export default Livro;