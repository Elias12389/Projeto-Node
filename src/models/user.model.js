const mongoose = require("mongoose");

//Usaremos esse como base para fazer o model em sí
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    //Se for false, o campo passa a NÃO ser obrigatório
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    //O mínimo de caracter é 7 para que seja salvo no banco
    minLength: 7,
  },
});

//Convenção que comecemos com letra maiúscula
const UserModel = mongoose.model("User", userSchema);

//Usaremos esse cara para fazer as alterações no banco
module.exports = UserModel;
