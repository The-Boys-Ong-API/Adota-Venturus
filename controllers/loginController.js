import {Usuario as usuario} from "../models/Modelo.js";
import encryptjs from "encryptjs";
import dotenv, { configDotenv } from "dotenv";
dotenv.config();

const encrypt = encryptjs;


const chave= process.env.SECRETKEY

const loginController = {

    async loginUser(req,res){
        
        try {
        const {email,senha} = req.body;
            
            const user = await usuario.findBy(email);
            
            
            const senhareq = req.body.senha;

            senha=encrypt.encrypt(senhareq,chave,256)
            if(!user){
                return res.status(401).json({erro: "Email ou senha inválidos."})
            }
           
            if(user.senha==senhareq){ 

                return res.status(200).json({
                    mensagem: "Login Bem sucedido",
                })
           }
            
            
        } catch (error) {
            return res.status(500).json({erro:"Erro interno ao tentar fazer o login."})
        }
        
        
    }
}

export default loginController;
