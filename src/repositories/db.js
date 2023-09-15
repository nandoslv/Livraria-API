import Sequelize from 'sequelize';
import * as dotenv from "dotenv";

dotenv.config({silent:true});

const sequelize = new Sequelize(
    process.env.ELEPHANT_CONECTION_STRING,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);

export default sequelize