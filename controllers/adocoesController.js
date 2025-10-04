import PedidoAdocao, { PedidoAdocao as pedidoAdocao  } from "../models/Modelo.js";
import { Usuario, Animal } from '../models/Modelo.js';

const adocoesController = {
    async fazerPedido(req, res) {
        try{
            const {tutorId,animalId } = req.body;
            //Erro 400 ao tentar fazer o pedido caso ele não tenha respondido o questionário
            const tutor = await Usuario.findByPk(tutorId);
            const animal = await Animal.findByPk(animalId);

            if(!tutor || !animal) {
                return res.status(404).json({erro: "Tutor ou Animal não encontrado"});
            }
            const validateRequest = await pedidoAdocao.findOne({where: {tutorId, animalId, status: 'em_analise'}});
            if (validateRequest){
                return res.status(409).json({ erro: "Este tutor já tem pedido de adoção"})
            }

            const totalRequests = await pedidoAdocao.count({ where: {animalId, status: 'em_analise'}});
            const newPosition = totalRequests + 1;

            const newRequest = await pedidoAdocao.create({
                tutorId,
                animalId,
                status:'em_analise',
                posicao_fila: newPosition
            });

            return res.status(201).json({
                id: newRequest.id,
                tutor_id: newRequest.tutorId,
                animal_id: newRequest.animalId,
                status: newRequest.status,
                posicao_fila: newRequest.posicao_fila,
                criado_em: newRequest.criado_em
            })


        } catch(error) {
            console.error("Erro ao registrar o pedido de adoção", error);
            return res.status(500).json({ erro: "Erro ao registrar o pedido de adoção" });
        }
    },

    async deletarPedido(req, res) { //acho que só o admin tem esse direito
        const { id } = req.params;

        try{
            const pedido = await pedidoAdocao.findByPk(id);

            if(!pedido) {
                return res.status(404).json({ erro: "Pedido de adoção não encontrado" });
            }

            const animalId = pedido.animal_id;
            const posicaoAntiga = pedidoAdocao.posicao_fila;

            await pedido.destroy();

            await pedidoAdocao.update(
                {posicao_fila: pedidoAdocao.literal('posicao_fila - 1') },
                {
                    where: {
                        animal_id: animalId,
                        status: 'em_analise',
                        posicao_fila: {[Op.gt]: posicaoAntiga },
                    },
                }
            );
            return res.status(204).send();
        } catch (error) {
            console.error("Erro ao deletar pedido:", error);
            return res.status(500).json({ erro: "Erro interno ao deletar o pedido" });
        }
    }
}
export default adocoesController