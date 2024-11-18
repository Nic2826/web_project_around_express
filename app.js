const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

app.use(cors());

app.use(express.json());


app.use((req, res, next) => {
  req.user = {
    _id: '67200dd2a9ca0d3e2980c321' // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});

// Usar las rutas definidas en /routes
app.use('/users', usersRoutes);
app.use('/cards', cardsRoutes);

// Ruta para manejar direcciones no existentes
app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/aroundb')
  .then(() => {
    console.log('conectado a la base de datos');
  })
  .catch((err) => {
    console.error('algo salio mal', err);
  });

