import { Sequelize } from 'sequelize';
import AnimalModel from './Animal.js';
import UsuarioModel from './Usuario.js';
import QuestionarioModel from './Questionario.js';
import PedidoAdocaoModel from './PedidoAdocao.js';
import DoacaoModel from './Doacao.js';

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Data/database.sqlite',
});

export const Animal = AnimalModel(sequelize);
export const Usuario = UsuarioModel(sequelize);
export const Questionario = QuestionarioModel(sequelize);
export const PedidoAdocao = PedidoAdocaoModel(sequelize);
export const Doacao = DoacaoModel(sequelize);

// Associações
// Explicação das associações:
// - Um Tutor tem um Questionario.
// - Um Tutor pode ter vários Pedidos de Adoção.
// - Um Animal pode ter vários Pedidos de Adoção.

Usuario.hasOne(Questionario, { foreignKey: 'tutor_id', as: 'questionario' });
Questionario.belongsTo(Usuario, { foreignKey: 'tutor_id' });

await sequelize.sync();

export default { sequelize, Animal, Usuario, Questionario, PedidoAdocao, Doacao };