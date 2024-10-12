const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

// Usar las rutas definidas en /routes
app.use('/users', usersRoutes);
app.use('/cards', cardsRoutes);

// Ruta para manejar direcciones no existentes
app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});