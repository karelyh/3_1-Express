const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT||3000

app.use(express.json()) // Esta funcion parsear el body de la peticion y si trae JSON la agrega a prp body

app.get('/clientes', cors(), (req, res) => {
  console.log(req.headers); // Muestra los headers de la peticion en la consola
  res.send('Hello clientes!')
})

app.get('/', (req, res) => {
  console.log(req.query); // Muestra los parámetros de consulta en la consola
  res.send('Hello World!')
})

app.get('/docentes/:control', (req, res) => {
  console.log(req.params); // Muestra los parámetros de ruta en la consola
  res.send('Hello docentes!')
})

app.get('/directivos', (req, res) => {
  console.log(req.body); // Muestra los parámetros de consulta en la consola
  res.send('Hello directivos!')
})

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
