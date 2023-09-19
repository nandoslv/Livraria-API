import express from "express";
import cors from "cors";
import winston from "winston";
import conn from "./repositories/db.js";
import clienteRoute from "./routes/cliente.route.js";
import autorRoute from "./routes/autor.route.js";
import livroRoute from "./routes/livro.route.js";
import vendaRoute from "./routes/venda.route.js";
import basicAuth from "express-basic-auth";
import ClienteService from "./services/cliente.service.js";

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
    } catch (error) {
        console.log(error);
    }
})();

//Autenticacao
app.use(basicAuth({
    authorizer: async (username, password) => {        
        let passwordMatches;        
        let userMatches = basicAuth.safeCompare(username,'admin');

        if(userMatches){            
            passwordMatches  = basicAuth.safeCompare(password, 'admin');            
        }else{
            try {                
                const cliente = await ClienteService.getClienteByEmail(username);            
                console.log|(cliente)
                userMatches = basicAuth.safeCompare(username,cliente.email);
                passwordMatches  = basicAuth.safeCompare(password, cliente.senha);
            } catch (error) {
                throw error;
            }
        }

        return userMatches && passwordMatches;
    }
}))

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