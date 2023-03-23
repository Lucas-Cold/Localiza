const express = require('express')
const database = require('./configs/database')

// conexão com o banco de dados
database.mongoose
    .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('conexão estabelecida com o banco de dados.'); 
    }).catch(error => {
        console.log('Não foi possivel conectar com o banco de dados.', error);
        process.exit();
    })

// criando uma aplicação express    
const app = express();   

// definindo que vamos enviar e receber JSON na requisição
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var carroRouter = require('../routes/carroRouter')
app.use('/', carroRouter);

var esportivoRouter = require('../routes/esportivoRouter')
app.use('/', esportivoRouter);

var utilitarioRouter = require('../routes/utilitarioRouter')
app.use('/', utilitarioRouter);

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});