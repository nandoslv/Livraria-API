import express from "express";
import cors from "cors";
import basicRoute from "./routes/basic.route.js";
import clienteRoute from "./routes/cliente.route.js";
import autorRoute from "./routes/autor.route.js";
import livroRoute from "./routes/livro.route.js";
import vendaRoute from "./routes/venda.route.js";
import basicAuth from "express-basic-auth";
import ClienteService from "./services/cliente.service.js";

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//Rotas sem autenticação
app.use('/', basicRoute);

//Autenticacao
app.use(basicAuth({
    authorizer: async (username, password) => {

        try {
            let passwordMatches;
            let userMatches = basicAuth.safeCompare(username, 'admin');

            if (userMatches) {
                passwordMatches = basicAuth.safeCompare(password, 'admin');
            } else {
                try {
                    const cliente = await ClienteService.getClienteByEmail(username);
                    userMatches = basicAuth.safeCompare(username, cliente.email);
                    passwordMatches = basicAuth.safeCompare(password, cliente.senha);
                } catch (error) {
                    throw error;
                }
            }

            return userMatches && passwordMatches;
        } catch (error) {
            throw error
        }
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

export default app;