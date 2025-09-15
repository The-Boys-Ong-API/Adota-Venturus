import { Router } from "express";
import doacoesController from "../controllers/doacaoController.js";

const doacaoRouter = Router();

doacaoRouter.post('/', doacoesController.efetuarDoacao);
//doacaoRouter.post('/', doacoesController.cadastroDoacao);

export default doacaoRouter;