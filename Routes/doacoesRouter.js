import { Router } from "express";
import doacaoController from "../controllers/doacaoController.js";

const doacaoRouter = Router();

doacaoRouter.post('/', loginController.autenticacaoLogin);

export default doacaoRouter;