const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello express api / GET")
});

app.post("/", (req, res) => {
  res.send("Hello express api / POST")
});

// Recibir query parametros en las peticiones
// query params /hola?param1="juan"&
app.get("/saludar", (req, res) => {
  //console.log(req);
  const nombre = req.query.nombre;
  res.send(`Hello ${nombre}`)
})

// Recibir parametros en el body
app.post("/saludar", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  res.send(`Hola ${nombre} tienes ${edad} años`)
})

// Recibir parametros en las peticiones
app.put("/saludar/:nombre/:edad", (req, res) => {
  const nombre = req.params.nombre;
  const edad = req.params.edad;
  res.send(`Hola ${nombre} tienes ${edad} años`)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
