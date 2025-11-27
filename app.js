const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Se puede poner globalmente

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',      // o tu host remoto
  user: 'root',           // tu usuario
  password: '1234BD',// tu contraseña
  database: 'practica1_bd' // nombre de tu base de datos
});

// Conectarse a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener todos los clientes
app.get('/clientes', (req, res) => {
  const query = 'SELECT * FROM clientes'; // tabla clientes
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
