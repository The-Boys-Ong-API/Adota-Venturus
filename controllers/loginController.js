import {Usuario as usuario} from "../models/Modelo.js";

const loginController = {

    async autenticacaoLogin (req,res) {
        try {

            if(!valor){
                return res.status(401).json({ erro: "Email ou senha inválidos." });
            }

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro interno ao tentar fazer o login." });
        }
    }
}

export default doacaoController;
