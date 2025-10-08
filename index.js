import express from 'express'
import usuarioRouter from './Routes/usuarioRouter.js';
import loginRouter from './Routes/loginRouter.js';
import adocoesRouter from './Routes/adocoesRouter.js';
import questionarioRouter from './Routes/questionarioRouter.js';
import animalRouter from './Routes/animalRouter.js';
import doacoesRouter from './Routes/doacoesRouter.js';
import adminRouter from './Routes/adminRouter.js';
import seed from './seed.js';
const app = express();
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Adoção de Animais',
    version: '1.0.0',
    description: 'Documentação da API para gerenciamento de adoções, usuários e animais',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'ONG - THE BOYS API',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./Routes/*.js'],

};

const swaggerSpec = swaggerJSDoc(options);

seed();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/admin', adminRouter);
app.use('/animais', animalRouter);
app.use('/tutores', usuarioRouter);
app.use('/autenticacao',loginRouter);
app.use('/adocoes', adocoesRouter);
app.use('/questionario', questionarioRouter);
app.use('/doacoes', doacoesRouter);
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});