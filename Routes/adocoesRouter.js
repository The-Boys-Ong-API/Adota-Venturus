import { Router } from 'express';
import adocoesController from "../controllers/adocoesController.js";

const adocoesRouter = Router();

adocoesRouter.post('/', adocoesController) //Função do adocoesController

export default adocoesRouter;