import { Router } from "express";
import loginController from "../controllers/loginController.js";
import usuarioController from "../controllers/usuarioController.js";

const loginRouter = Router();

loginRouter.post('/', usuarioController.authenticacao);

export default loginRouter;