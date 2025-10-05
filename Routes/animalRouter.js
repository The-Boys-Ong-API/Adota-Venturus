import { Router } from "express";
import AnimalController from '../controllers/animalController.js';

const animalRouter = Router();
//rotas para animais

animalRouter.get('/:id', AnimalController.buscarPorId);

animalRouter.post('/', AnimalController.cadastroAnimal);

//animalRouter.patch('/:id', AnimalController.atualizaPorId);

export default animalRouter;