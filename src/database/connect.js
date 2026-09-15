//Esse jeito não é igual ao jeito que o Felipe Rocha usou em seu curso, pois a partir da versão 7, o mongoose parou de receber callbacks, por isso essa estrutura
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projetonodejs.oatwjvo.mongodb.net/?appName=ProjetoNodeJs`,
    );
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error);
  }
};

module.exports = connectToDatabase;
/*Código de async e await que não funciona mais
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  //Aqui dentro colocaremos aquela url gigante e depois passeremos uma função para receber um parametro de erro, somente para verificar se tudo deu certo ou não.
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projetonodejs.oatwjvo.mongodb.net/?appName=ProjetoNodeJs`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o bando de dados: ",
          error,
        );
      }
      return console.log("Conexão com o banco de dados realizada com sucesso!");
    },
  );
};

module.exports = connectToDatabase;
*/
