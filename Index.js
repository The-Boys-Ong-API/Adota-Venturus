import express from 'express'
import adocoes from './Routes/adocoes.js'
import animal from './Routes/Animal.js'
import usuarios from './Routes/Usuarios.js'
import doacoes from './Routes/doacoes.js'
import login from './Routes/login.js'
import questionario from './Routes/Questionario.js'
import tutores from './Routes/Tutores.js'

const app = express();

const port = 8080;


app.use(express.json());

app.listen(port ,() =>{
    console.log(`Servidor aberto!!\n Rodando na Porta: Localhost://${port}`);
})