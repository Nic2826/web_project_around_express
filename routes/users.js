// routes/users.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const {getUsers, createUsers} = require('../controllers/users');


// Ruta para obtener todos los usuarios
router.get('/', getUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', (req, res) => {
  const {id} = req.params;
});


router.post('/', createUsers);

module.exports = router;
