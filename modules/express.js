//Chamando o express
const express = require("express");
//Precisamos importar o useModules para pegar o modelo/esqueleto
const UserModel = require("../src/models/user.model");

//Inicializando o express
const app = express();

//Faz com que sempre usemos json nas nossas requisições (tipando sempre como Json)
app.use(express.json()); //trata-se de um middleware

//Criando mais um middleware
app.use((req, res, next) => {
  console.log(`Request type: ${req.method}`) //Fala o tipo da requisição
  console.log(`Content Type: ${req.headers["content-type"]}`) //Seu conteúdo interno
  console.log(`Data: ${new Date()}`) //Tempo/data que a requisição está sendo feita



  next(); //Deixa o express seguir o rumo dele pós a requisição
})

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>hello world</h1>");
});

//Pega todos os usuários
app.get("/users", async (req, res) => {
  try {
    //Método .find() serve como um buscador ou como um filtro para achar determinado objeto.
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    //Estamos somente passando uma string
    return res.status(500).send(error.message);
  }
});

//End point para buscar um usuário por id
app.get("/users/:id", async (req, res) => {
  try {
    //para dar certo, precisamos que o :id tenha o mesmo nome da variável
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    //Usamoso return para garantir que ele não execute nada após o send
    return res.status(500).send(error.message);
  }
});

//Criando um usuário
//Usamos o post para criar alguma coisa.
app.post("/users", async (req, res) => {
  //Usamos o try e o catch para que ele tente executar. Se der erro, ele indica para o computador e não ficamos no escuro
  try {
    //o create trata-se de uma promisse, por isso podemos usar o async/await (precisamos na verdade)
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Atualizar um usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    //Passamos os campos que queremos atualizar com o req.body
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true }); //Precisamos passar um objeto como verdadeiro (o new), pois o findByIdAndUpdate não retorna o registro atualizado.

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Deletando um usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com o express na porta ${port}`));
