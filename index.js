// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

//Tudo que for colocado com require que tenha relação com o banco, tem que ser colocado depois dessa tag
dotenv.config();

connectToDatabase();
//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
require("./modules/express");

// const person = new Person("Filipe");
