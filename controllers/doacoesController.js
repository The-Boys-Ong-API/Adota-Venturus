/*
Perguntar e retirar as Seguintes dúvidas para a galera da Venturus;
    1-O Linkpix+QRCode devem funcionar?
    2-É necessário que o usuário cadastre seu nome, email, valor e mensagem,
    Mas o erro 400, fala apenas sobre o Valor ser ausente ou inválido,
    Se o cadastro do valor for junto dos outros, essa mensagem de erro não
    englobaria tudo...
*/


import {Doacao as doacao} from "../models/Modelo.js";

const doacaoController = {

    async cadastroDoacao (req,res) {
        try {
            const {valor} = req.body;

            if(!valor){
                return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos corretamente." });
            }

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao processar a doação" });
        }
    },

    // async efetuarDoacao (req,res){
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

}

export default doacaoController;
