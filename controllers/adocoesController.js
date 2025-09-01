import { PedidoAdocao as pedidoAdocao  } from "../models/PedidoAdocao.js";

const Adocoes = {
    async fazerPedido(req, res) {
        try{
            const {tutor_id,animal_id, status, posicao_fila, criado_em } = req.body;

            const pedido = {id: uuidv4(), tutor_id,animal_id, status, posicao_fila, criado_em}
            adocoes.push(pedido);

            //Erro 400 ao tentar fazer o pedido caso ele não tenha respondido o questionário


            return res.status(201).json(pedido);
        } catch {

        }
    }
}
export default adocoesController