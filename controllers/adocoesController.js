import { PedidoAdocao as pedidoAdocao  } from "../models/PedidoAdocao.js";

const Adocoes = {
    async fazerPedido(req, res) {
        try{
            const {tutor_id,animal_id, status, posicao_fila } = req.body;
            //Erro 400 ao tentar fazer o pedido caso ele não tenha respondido o questionário
            const validateRequest = await pedidoAdocao.findOne({where: {tutor_id, animal_id}});
            if (validateRequest){}


        } catch(error) {
            console.error(error);
            return res.status(500).json({ erro: "" });
        }
    }
}
export default adocoesController