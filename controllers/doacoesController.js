/*
Perguntar e retirar as Seguintes dúvidas para a galera da Venturus;
    1-O Linkpix+QRCode devem funcionar?
    2-É necessário que o usuário cadastre seu nome, email, valor e mensagem,
    Mas o erro 400, fala apenas sobre o Valor ser ausente ou inválido,
    Se o cadastro do valor for junto dos outros, essa mensagem de erro não
    englobaria tudo...
*/


import {Doacao as doacao} from "../models/Modelo.js";

const doacoesController = {

    async efetuarDoacao (req,res) {
        try {
            const {nome, email, valor, linkPix, mensagem} = req.body; //pode tirar esse linkPix daí, só coloquei para poder testar aqui no Insomnia
            // const qrcode = await doacao.qrcode;
            // const linkpix = await doacao.linkPix;

            if(!valor || valor < 0.01){
                return res.status(400).json({ erro: "Valor da doação é obrigatório e deve ser um número positivo" });
            }

            const newDonation = await doacao.create({nome, email, valor, linkPix, mensagem});
            return res.status(201).json({
                nome: newDonation.nome,
                email: newDonation.email,
                valor: newDonation.valor,
                linkPix: newDonation.linkPix,
                mensagem: newDonation.mensagem
        });

            //return res.status(200).json(qrcode);
            //return res.status(200).json(linkpix);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao processar a doação" });
        }
    },

    async cadastroDoacao (req,res){
        try {
            const {nome, email, valor, mensagem} = req.body;
            // const qrcode = await doacao.;
            // const linkpix = await doacao.;

            if(!nome || !email || !valor || !mensagem ){
                return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos corretamente." });
            }

            const novaDoacao = await doacao.create({ nome, email, valor, mensagem });

            //const { senha: _, ...usuarioSemSenha } = novaDoacao.toJSON();

            //return res.status(200).json(qrcode);
            //return res.status(200).json(linkpix);
            //return res.status(201).json();

        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: "Erro ao processar a doação" });
        }
    }

}

export default doacoesController;
