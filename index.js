import express from 'express'
import usuarioRouter from './Routes/usuarioRouter.js';
import loginRouter from './Routes/loginRouter.js';
import adocoesRouter from './Routes/adocoesRouter.js';
import questionarioRouter from './Routes/questionarioRouter.js';
import animalRouter from './Routes/animalRouter.js';
import doacoesRouter from './Routes/doacoesRouter.js';
const app = express();

app.use(express.json());
app.use('/animais', animalRouter);
app.use('/tutores', usuarioRouter);
app.use('/autenticacao',loginRouter);
app.use('/adocoes', adocoesRouter);
app.use('/questionario', questionarioRouter);
app.use('/doacoes', doacoesRouter);
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});