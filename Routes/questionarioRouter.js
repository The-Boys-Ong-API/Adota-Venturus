import { Router } from "express";
import questionarioController from "../controllers/questionarioController.js";

const questionarioRouter = Router();

questionarioRouter.post('/', questionarioController.cadastroQuestionario);

export default questionarioRouter;