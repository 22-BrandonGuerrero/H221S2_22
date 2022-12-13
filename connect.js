
var express = require('express');
  

var app = express();


app.get('/', (req, res) => {
//res.send('Hello World with express!')
res.sendFile("/home/ubuntu/proyects/Lading-Servidor/index.html")
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

//Recursos
app.use(express.static(__dirname+'/'));






var mysql = require("mysql");

var cors = require("cors");

app.use(express.json());
app.use(cors());




  
