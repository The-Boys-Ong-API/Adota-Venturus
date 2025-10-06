import { Animal as animal, Usuario as usuario } from "../models/Modelo.js";
import dotenv from "dotenv";
import encryptjs from "encryptjs";
dotenv.config();

const encrypt = encryptjs;

const chave= process.env.SECRETKEY

const AnimalController = {
    async cadastroAnimal(req, res) {
        try {
            const { nome, especie, porte, castrado, vacinado, adotado, descricao, foto } = req.body;

           /* if (!nome || !especie || !porte || !castrado || !descricao || !vacinado || !adotado ) {
                return res.status(400).json({ erro: "Todos os campos obrigatorios devem ser preenchidos corretamente."})
            }
            
            const testUser = await animal.findOne({ where: { id }});
            if (testUser) {
                return res.status(400).json({ erro: "ID preenchido já está sendo utilizado..."});
            }
                */
            const novoAnimal = await animal.create({ nome, especie, porte, castrado, vacinado, adotado, descricao, foto});

            //const { senha : _, ...animalSemSenha } = novoAnimal.toJSON();

            return res.status(201).json({
                mensagem: "Animal cadastrado com sucesso",
                nome: novoAnimal.nome,
                especie: novoAnimal.especie,
                porte: novoAnimal.porte,
                castrado: novoAnimal.castrado,
                vacinado: novoAnimal.vacinado,
                adotado: novoAnimal.adotado,
                descricao: novoAnimal.descricao

            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro interno ao cadastrar o animal..."});
        }
    },
    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const anima = await animal.findByPk(id);

            if (!anima){
                return res.status(404).json({ erro: "Animal não encontrado..."});
            }

            /*await testAnimal.update(dados);

            const { senha: _, ...animalSemSenha } = animal.toJSON();
            */
            return res.status(200).json(anima);
        }catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao buscar dados do animal..."});
        }
    },

    async adminAtualizaPorId(req, res){
        try {
            const { id: idAnimal } = req.params;
            const { senha: senhareq, id: idAdmin, ...dados } = req.body;
            
            // console.log(`ID ADMIN:${idAdmin} \n Senhareq= ${senhareq} \n Dados:${dados}`)
            if (!idAdmin || !senhareq || !idAnimal || !dados || JSON.stringify(dados) === '{}') {
                return res.status(400).json({ erro: "Nenhum campo foi fornecido para atualização" });
            }
            /*if (!dados || JSON.stringify(dados) === '{}'){
                return res.status(400).json({ erro: 'Pelo menos um campo deve ser enviado para atualização'});
            }*/

            const adm = await usuario.findByPk(idAdmin)
            if (!adm || !adm.administrador) {
            return res.status(403).json({ erro: "Acesso negado. Usuário não autorizado." });
            }
            const senhad = encrypt.decrypt(adm.senha, chave, 256);

            if (!adm || !adm.administrador || senhad !== senhareq) {
            return res.status(403).json({ erro: "Acesso negado. Usuário não autorizado." });
            }

            const testAnimal = await animal.findByPk(idAnimal);
            if (!testAnimal){
                return res.status(404).json({ erro: "Animal não encontrado..."});
            }

            await testAnimal.update(dados);

            //const { senha: _, ... animalSemSenha } = testAnimal.toJSON();
            return res.status(200).json({ mensagem: "Animal atualizado com sucesso...", testAnimal });

        }catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao atualizar os dados do animal..."});
        }
    },
    async adminBuscarAnimais(req, res) {
    
    try {
        const { id, senha: senhareq } = req.body;

        // console.log("ID recebido:", id);
        // console.log("Senha recebida:", senhareq);

        const senha = encrypt.encrypt(senhareq, chave, 256);

        const user = await usuario.findByPk(id);
        //console.log("Senha user:", user.senha);
        
        const senhad = encrypt.decrypt(user.senha, chave, 256);

        if (!user || !user.administrador || senhad !== senhareq) {
        return res.status(403).json({ erro: "Acesso negado. Usuário não autorizado." });
        }

        const animais = await animal.findAll();
        return res.status(200).json({ animais, total: animais.length });

    } catch (error) {
        return res.status(500).json({ erro: "Erro ao buscar animais" });
    }
    
},  async adminDeletaAnimais(req,res){
        
        const { id, senha: senhareq } = req.body;

        // console.log("ID recebido:", id);
        // console.log("Senha recebida:", senhareq);

        const senha = encrypt.encrypt(senhareq, chave, 256);

        const user = await usuario.findByPk(id);
        //console.log("Senha user:", user.senha);
        
        const senhad = encrypt.decrypt(user.senha, chave, 256);

        if (!user || !user.administrador || senhad !== senhareq) {
        return res.status(403).json({ erro: "Acesso negado. Usuário não autorizado." });
        }

        


    }

}

export default AnimalController;