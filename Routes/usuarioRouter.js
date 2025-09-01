import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const usuarioRouter = Router();

usuarioRouter.get('/:id', usuarioController.buscarPorId);

usuarioRouter.post('/', usuarioController.cadastroUsuario);

usuarioRouter.patch('/:id', usuarioController.atualizaPorId)

export default usuarioRouter;