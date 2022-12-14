
var express = require('express');
  

var app = express();


app.get('/', (req, res) => {
//res.send('Hello World with express!')
res.sendFile("/home/ubuntu/proyects/H221S2_22/index.html")
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

//Recursos
app.use(express.static(__dirname+'/'));



//De acuerdo a lo que hemos instalado

var mysql = require("mysql");

var cors = require("cors");
 
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/'));
 
//Verficar si esta informacion es correcta de acuerdo a tu localhost
var conexion = mysql.createConnection({
  host: "35.172.131.125",
  user: "brandon",
  password: "1234",
  database: "dbRestaurante"
});
 
//Verificar si la conexion a base de datos fue exitosa ,de lo contrario te devolvera un error
conexion.connect(function (error) {
  if (error) {
    console.log(error)
    throw error;
  } else {
    console.log("Conexión exitosa");
  }
});



 
//El contrato entre el servidor y el cliente para permitir la inserción de registros en la tabla
app.post("/api/pedido", (req, res) => {
	let data = {
    	userped: req.body.USERPED,
    	emausped: req.body.EMAUSPED,
    	celusped: req.body.CELUSPED,
    	foodped: req.body.FOODPED,
    	msgped: req.body.MSGPED
	};
	let sql = "INSERT INTO pedido SET ?";
	conexion.query(sql, data, function (error, results) {
  	if (error) {
    	throw error;
  	} else {
    	console.log(data);
    	res.send(data);
  	}
	});
  });
 



  
