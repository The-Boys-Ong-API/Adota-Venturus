import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const usuarioRouter = Router();

usuarioRouter.post('/usuario', UsuarioController);

usuarioRouter.get('/tutores/:id', UsuarioController.buscarPorId);

usuarioRouter.patch('/tutores/:id', UsuarioController.atualizaPorId)

export default usuarioRouter;