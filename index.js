import express from 'express'
import usuarioRouter from './Routes/UsuarioRouter';

const app = express();

app.use(express.json());


app.use('/usuarios', usuarioRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});