const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2');

// CAMBIO: Usamos 3001. Si el 3000 falla, este funcionará.
const port = process.env.PORT || 3000

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cafeteriadb', 
  password: '1234BD', 
});

app.use(express.json()); 
app.use(cors()) 

app.get('/', (req, res) => {
  res.send('🚀 El servidor funciona correctamente en el puerto ' + port);
});

app.get('/clientes', cors(), (req, res) => { 
  console.log(req.query);
  res.send('Hola Clientes!')
})

app.get('/alumnos', (req, res) => {
  connection.query(
    'SELECT * FROM inventario WHERE cantidad > 10',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
});

app.listen(port, () => {
  console.log(`--- SERVIDOR INICIADO ---`)
  console.log(`Entra aquí: http://localhost:${port}/alumnos`)
})