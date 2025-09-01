import express from 'express';
const router = express.Router();

let animals = [
    /** como deve ser feito.*/
    {
       "id": "uuid",
       "nome": "string",
       "especie": "string",
       "porte": "string",
       "castrado": true,
       "vacinado": true,
       "descricao": "string",
       "foto": "Buffer"
    }

]

//rotas para animais

router.get('/animais', ( req, res ) => {
    res.json(animals);
});

router.post('/animais', (req, res) => {
    const novo ={
        id : "uuid",
        ...req.body
    };
    animals.push(novo);
    res.status(201).json(novo);
});

router.put('/animais/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indez = animals.findIndex(animals => animals.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: "Animal não encontrado" });
    }
})