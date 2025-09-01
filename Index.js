import express from "express";
import Rotas from "./Routes/Rotas.js";
import sequelize from "sequelize"; // conexão com Sequelize

const app = express();
const port = 8080;

app.use(express.json())
app.use(Rotas())
