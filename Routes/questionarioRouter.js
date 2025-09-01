import { Router } from "express";
import questionarioController from "../controllers/questionarioController.js";

const questionarioRouter = Router();

questionarioRouter.post('/', usuarioController.cadastroUsuario);

export default questionarioRouter;