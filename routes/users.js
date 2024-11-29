// routes/users.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const {getUsers, getUserInfo} = require('../controllers/users');


// Ruta para obtener todos los usuarios
router.get('/', getUsers);
router.get('/me', getUserInfo);



// Ruta para obtener un usuario por ID
router.get('/:id', (req, res) => {
  const {id} = req.params;
});


module.exports = router;
