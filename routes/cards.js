
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Ruta para obtener todas las tarjetas
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/cards.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo de tarjetas' });
    }
    const cards = JSON.parse(data);
    res.json(cards);
  });
});

module.exports = router;
