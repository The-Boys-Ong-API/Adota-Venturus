
import Usuario from "../models/Usuario"

module.exports = {

    async cadastroUsuario(req,res) {
        try {
            
            
            const { nome_completo, senha, email, cidade, estado, idade, telefone, instagram, facebook } = req.body;
            
            if(!nome_completo || !senha || !email || !cidade || !estado || !idade || !telefone){
                return res.statusCode(400).json({
                        erro : "Todos os campos obrigatórios devem ser preenchidos corretamente."
                    }
                )
            }
            const testUser = await Usuario.findOne({where: {email}});
            
            if (testUser){
                return res.statusCode(400).json({
                    erro : "Email preenchido já está sendo utilizado."
                })
            }

            const novoUser = await Usuario.create({
                nome_completo,senha,email,cidade,estado,idade,telefone,instagram,facebook
            })
            
            return res.status(201).json({
                mensagem: "Tutor cadastrado com sucesso:",
                ...novoUser.toJSON()
            });
        } 
            catch (error) {
                return res.statusCode(500).json({
                    "erro": "Erro interno ao cadastrar o tutor."
                })
            }
    },

    async buscarPorId(req,res){
        try {
            const {id} = req.params;

            const user = await Usuario.findByPk(id);

            if(!user){
                return res.statusCode(404).json({
                    "erro": "Tutor não encontrado."
                }
                )
            }
            
            const { senha: _, ...usuarioSemSenha } = usuario.toJSON();

            return res.status(200).json(usuarioSemSenha);
            
        } catch (error) {
             return res.statusCode(500).json({
                    "erro": "Erro ao buscar dados do tutor"
                }
                )
        }
    }
}