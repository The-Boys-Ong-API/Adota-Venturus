import { Router } from "express";
import doacaoController from "../controllers/doacaoController.js";

const doacaoRouter = Router();

doacaoRouter.post('/', usuarioController.cadastroUsuario);

export default doacaoRouter;