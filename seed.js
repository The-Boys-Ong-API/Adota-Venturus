import encryptjs from "encryptjs";
import dotenv from "dotenv";
dotenv.config();
const encrypt = encryptjs;
import {Usuario as usuario } from "./models/Modelo.js";

const chave= process.env.SECRETKEY
const email = process.env.EMAIL;
export default async function seed(){
    const encyrptSenha=encrypt.encrypt(process.env.SENHAADM,chave,256)
    
    const existe = await usuario.findOne({ where: { email: email } });
    if(existe ){
        return console.log('Adm já existe');
    }

    await usuario.create({
    nome_completo: "Admin",
    email: email,
    senha: encyrptSenha,
    estado: "São paulo",
    cidade: "Campinas",
    idade: 1,
    telefone: process.env.TELEFONE,
    administrador: true
})
console.log("Seed criada")
}