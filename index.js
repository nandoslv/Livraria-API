import express from "express";
import cors from "cors";
import winston from "winston";
import conn from "./src/repositories/db.js";
import clienteRoute from "./src/routes/cliente.route.js";
import autorRoute from "./src/routes/autor.route.js";
import livroRoute from "./src/routes/livro.route.js";
import vendaRoute from "./src/routes/venda.route.js";

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

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//Cria as tabelas do db automaticamente
(async () => {
    try {
        const resultado = await conn.sync();
        console.log('resultado: ', resultado);
    } catch (error) {
        console.log(error);
    }
})();

//ROUTES
app.use('/cliente', clienteRoute);
app.use('/autor', autorRoute);
app.use('/livro', livroRoute);
app.use('/venda', vendaRoute);

app.use((err, req, res, next) => {
    global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message })
})

const port = 3000;

app.listen(port, async () => {
    try {
        global.logger.info(`API Started Port: ${port} 
        http://localhost:${port}/`)
    } catch (err) {
        global.logger.error(err);        
    }
});