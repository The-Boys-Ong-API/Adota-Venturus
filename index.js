import express from 'express'
import usuarioRouter from './Routes/usuarioRouter.js';
// import animaisRouter
const app = express();

app.use(express.json());
// app.use('/animais', animaisRouters);
app.use('/tutores', usuarioRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});