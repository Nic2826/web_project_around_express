// routes/users.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const {getUsers, createUsers, loginUsers} = require('../controllers/users');


// Ruta para obtener todos los usuarios
router.get('/', getUsers);

// Ruta para registrar usuarios
router.post('/signup', createUsers);

// Ruta para iniciar sesión de usuarios
router.post('/signin', loginUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', (req, res) => {
  const {id} = req.params;
});




module.exports = router;
