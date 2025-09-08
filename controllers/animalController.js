import { Animal } from "../models/Animal.js";

const AnimalController = {
    async cadastroAnimal(req, res) {
        try {
            const { id, nome, especie, porte, cadastro, vacinado, adotado, descricao, foto } = req.body;

            if ( !id || !nome || !especie || !porte || !cadastro || !descricao || !vacinado || !adotado ) {
                return res.status(400).json({ erro: "Todos os campos obrigatorios devem ser preenchidos corretamente."})
            }

            const testUser = await Animal.findOne({ where: { id }});
            if (testUser) {
                return res.status(400).json({ erro: "ID preenchido já está sendo utilizado..."});
            }
            const novoAnimal = await Animal.create({ id, nome, especie, porte, cadastro, vacinado, adotado, descricao, foto});

            const { senha : _, ...animalSemSenha } = novoAnimal.toJSON();

            return res.status(201).json({
                mensagem: "Animal cadastrado com sucesso",
                ...animalSemSenha

            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro interno ao cadastrar o animal..."});
        }
    },
    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const animal = await animal.findByPk(id);

            if (!animal){
                return res.status(404).json({ erro: "Animal não encontrado..."});
            }

            await testAnimal.update(dados);

            const { senha: _, ...animalSemSenha } = animal.toJSON();
            return res.status(200).json(animalSemSenha);
        }catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao buscar dados do animal..."});
        }
    },

    async atualizaPorId(req, res){
        try {
            const dados = req.body;
            const { id } = req.params;

            if (!dados || JSON.stringify(dados) === '{}'){
                return res.status(400).json({ erro: 'Pelo menos um campo deve ser enviado para atualização'});
            }

            const testAnimal = await animal.findByPk(id);
            if (!testAnimal){
                return res.status(404).json({ erro: "Animal não encontrado..."});
            }

            await testAnimal.update(dados);

            const { senha: _, ... animalSemSenha } = testAnimal.toJSON();
            return res.status(200).json({ erro: "Animal atualizado com sucesso...", ...animalSemSenha });

        }catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao atualizar os dados do animal..."});
        }
    }
}

export default usuarioController;