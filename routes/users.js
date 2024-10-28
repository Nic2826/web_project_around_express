// routes/users.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
import User from '../models/user';

// Ruta para obtener todos los usuarios
router.get('/', async function (req, res) {
  const users = await User.find({});
  res.send(users);
  });

// Ruta para obtener un usuario por ID
router.get('/:id', (req, res) => {
  const {id} = req.params;
});


router.post('/', async function (req, res) {
const newUser = await User.create({
  name: req.body.name,
  about: req.body.about,
  avatar:req.body.avatar
});
res.send(newUser);
});

module.exports = router;
