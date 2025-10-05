import { Router } from "express";
import doacoesController from "../controllers/doacoesController.js";

const doacoesRouter = Router();

doacoesRouter.post('/', doacoesController.efetuarDoacao);
//doacaoRouter.post('/', doacoesController.cadastroDoacao);

export default doacoesRouter;