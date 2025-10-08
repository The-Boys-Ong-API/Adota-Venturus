import { Router } from "express";
import AnimalController from '../controllers/animalController.js';

const adminRouter = Router();


adminRouter.get('/animais', AnimalController.adminBuscarAnimais);
adminRouter.get('/animais/:id', AnimalController.adminBuscarPorId)
adminRouter.patch('/animais/:id', AnimalController.adminAtualizaPorId); //  tem que fazer essa parte pegar o id do admin senha e id do animal
adminRouter.delete('/animais/:id', AnimalController.adminDeletaAnimais);// tem que fazer essa parte
export default adminRouter;