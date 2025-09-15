import express from 'express';
import AnimalController from '../controllers/animalController';
const router = express.Router();


//rotas para animais

router.get('/:id', AnimalController.buscarPorId);

router.post('/animais', AnimalController.cadastroAnimal);

router.put('/animais/:id', AnimalController.atualizaPorId);