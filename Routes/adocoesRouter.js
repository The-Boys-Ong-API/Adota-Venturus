import { Router } from 'express';
import adocoesController from "../controllers/adocoesController.js";

const adocoesRouter = Router();

adocoesRouter.post('/', adocoesController.fazerPedido);

adocoesRouter.delete('/id', adocoesController.deletarPedido); //acho que só o admin tem esse direito

export default adocoesRouter;