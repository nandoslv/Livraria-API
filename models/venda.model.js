import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Cliente from "./cliente.model.js";
import Livro from "./livro.model.js";

const Venda = db.define('vendas', {
    vendaid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }, 
    data:{
        type: Sequelize.DATE,
        allowNull: false
    },     
});

Venda.belongsTo(Cliente, { foreignKey: "clienteid" });
Venda.belongsTo(Livro, { foreignKey: "livroid" });

export default Venda;