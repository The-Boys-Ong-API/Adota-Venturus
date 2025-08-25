| Categoria           | Método | Rota                 | Descrição                        |
| ------------------- | ------ | -------------------- | -------------------------------- |
| 🐾 **Animais**      | POST   | `/animais`           | Cadastrar um novo animal         |
|                     | GET    | `/animais`           | Listar todos os animais          |
|                     | GET    | `/animais/:id`       | Obter detalhes de um animal      |
| 👤 **Tutores**      | POST   | `/tutores`           | Cadastrar tutor                  |
|                     | PATCH  | `/tutores/:id`       | Atualizar dados do tutor         |
|                     | GET    | `/tutores/:id`       | Obter detalhes de um tutor       |
| 📋 **Questionário** | POST   | `/questionário`      | Responder questionário de adoção |
| 🏡 **Adoções**      | POST   | `/adocoes`           | Solicitar adoção                 |
| 🔧 **Admin**        | GET    | `/admin/animais`     | Listar animais (admin)           |
|                     | PATCH  | `/admin/animais/:id` | Atualizar animal (admin)         |
|                     | DELETE | `/admin/animais/:id` | Remover animal (admin)           |
| 🔑 **Auth**         | POST   | `/login`             | Login do usuário                 |
| 💰 **Doações**      | POST   | `/doacoes`           | Registrar doação                 |