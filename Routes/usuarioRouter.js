import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const usuarioRouter = Router();

/**
 * @swagger
 * /tutores/{id}:
 *   get:
 *     summary: Buscar tutor por ID
 *     tags:
 *       - Tutores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do tutor
 *     responses:
 *       200:
 *         description: Tutor encontrado com sucesso
 *       404:
 *         description: Tutor não encontrado
 */
usuarioRouter.get('/:id', usuarioController.buscarPorId);

/**
 * @swagger
 * /tutores:
 *   post:
 *     summary: Cadastrar novo tutor
 *     tags:
 *       - Tutores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome_completo
 *               - email
 *               - senha
 *               - cidade
 *               - estado
 *               - idade
 *               - telefone
 *             properties:
 *               nome_completo:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *               idade:
 *                 type: integer
 *               telefone:
 *                 type: string
 *               celular:
 *                 type: string
 *               cpf:
 *                 type: string
 *               endereco:
 *                 type: string
 *               bairro:
 *                 type: string
 *               cep:
 *                 type: integer
 *               instagram:
 *                 type: string
 *               facebook:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tutor cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
usuarioRouter.post('/', usuarioController.cadastroUsuario);

/**
 * @swagger
 * /tutores/{id}:
 *   patch:
 *     summary: Atualizar dados do tutor por ID
 *     tags:
 *       - Tutores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do tutor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_completo:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *               idade:
 *                 type: integer
 *               telefone:
 *                 type: string
 *               instagram:
 *                 type: string
 *               facebook:
 *                 type: string
 *               questionario:
 *                 type: object
 *     responses:
 *       200:
 *         description: Dados atualizados com sucesso
 *       404:
 *         description: Tutor não encontrado
 */
usuarioRouter.patch('/:id', usuarioController.atualizaPorId);

export default usuarioRouter;