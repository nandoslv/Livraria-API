import winston from "winston";
import conn from "./repositories/db.js";
import app from "./app.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'LIVRARIA-API.log' })
    ],
    format: combine(
        label({ label: 'LIVRARIA-PAI' }),
        timestamp(),
        myFormat
    )
});

//Cria as tabelas do db automaticamente
(async () => {
    try {
        await conn.sync();        
    } catch (error) {
        console.log(error);
    }
})();

const port = 3000;

app.listen(port, async () => {
    try {
        global.logger.info(`API Started Port: ${port} 
        http://localhost:${port}/`)
    } catch (err) {
        global.logger.error(err);        
    }
});