import { sequelize} from "../models/Modelo";
import { Router } from "express";

export default function Rotas (){
    
    const router = Router();
    router.get('/', (req,res)=>{
        console.log('Rota / que legal')
        res.send("API RODANDO")
        res.statusCode(201, () =>{
            mensagem : {
                "Api rodou";
            }
        })
    })

    return router;
    
}
