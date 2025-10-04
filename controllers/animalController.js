import { Animal as animal } from "../models/Modelo.js";

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

    async atualizaPorId(req, res){
        try {
            const dados = req.body;
            const { id } = req.params;

            /*if (!dados || JSON.stringify(dados) === '{}'){
                return res.status(400).json({ erro: 'Pelo menos um campo deve ser enviado para atualização'});
            }*/

            const testAnimal = await animal.findByPk(id);
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
    }
}

export default AnimalController;