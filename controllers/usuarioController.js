import {Usuario as usuario} from "../models/Modelo.js";
import encryptjs from "encryptjs";
import dotenv, { configDotenv } from "dotenv";
dotenv.config();
const encrypt = encryptjs;


const chave= process.env.SECRETKEY
import Usuario from "../models/Usuario.js";

const usuarioController  = {

    async cadastroUsuario(req,res) {
        try {
            const { nome_completo, email, cidade, estado, idade, telefone, instagram, facebook } = req.body;

            const senhareq = req.body.senha;

            const senha=encrypt.encrypt(senhareq,chave,256)
            
            
            if(!nome_completo || !senha || !email || !cidade || !estado || !idade || !telefone){
                return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos corretamente." });
            }
            
            const testUser = await usuario.findOne({where: {email}});
            if (testUser){
                return res.status(400).json({ erro : "Email preenchido já está sendo utilizado." });
            }
            const novoUser = await usuario.create({ nome_completo, senha, email, cidade, estado, idade, telefone, instagram, facebook });

            const { senha: _, ...usuarioSemSenha } = novoUser.toJSON();

            return res.status(201).json({
                mensagem: "Tutor cadastrado com sucesso",
                ...usuarioSemSenha
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro interno ao cadastrar o tutor." });
        }
    },

    async buscarPorId(req,res){
        try {
            const {id} = req.params;
            const user = await usuario.findByPk(id);

            if(!user){
                return res.status(404).json({ erro: "Tutor não encontrado." });
            }

            return res.status(200).json(user);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao buscar dados do tutor" });
        }
    },

    async atualizaPorId(req,res){
        try {
            const dados = req.body;

            
            const {id} = req.params;

            if(!dados || JSON.stringify(dados) === '{}'){
                return res.status(400).json({ erro: 'Pelo menos um campo deve ser enviado para atualização' });
            }

            const user = await usuario.findByPk(id);
            if(!user){
                return res.status(404).json({ erro: "Tutor não encontrado" });
            }

            const senhareq = req.body.senha;

            if(senhareq){

                dados.senha=encrypt.encrypt(senhareq,chave,256);
            }
            
            const { senha: _, ...usuarioSemSenha } = user.toJSON();
            
            await user.update(dados);
            
            return res.status(200).json({ mensagem: "Dados atualizados com sucesso", ...usuarioSemSenha });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao atualizar os dados do tutor" });
        }
    }
}

export default usuarioController;
