import {Doacao as doacao} from "../models/Modelo.js";

const doacaoController = {

    async cadastroDoacao (req,res) {
        try {
            const {nome, email, valor, mensagem} = req.body;

            if(!nome || !email || !valor || !mensagem){
                return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos corretamente." });
            }

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Valor da doação é obrigatório e deve ser um número positivo" });
        }
    },

    async efetuarDoacao (req,res){
        try {
            
        } catch (error) {
            
        }
    }

}

export default doacaoController;
