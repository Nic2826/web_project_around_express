// routes/users.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const {getUsers, getUserInfo} = require('../controllers/users');
const {celebrate, Joi, errors} = require('celebrate');

// Función de validación personalizada para URLs
const validator = require('validator');
const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error('string.uri');
};


// Ruta para obtener todos los usuarios
router.get('/', getUsers);
router.get('/me', getUserInfo);



// Ruta para obtener un usuario por ID (validamos que el ID sea un número)
router.get('/:id', celebrate({
  params: Joi.object({
    id: Joi.number().integer().required().messages({
      'number.base': 'El ID debe ser un número',
      'number.integer': 'El ID debe ser un número entero',
      'any.required': 'El ID es obligatorio',
    }),
  }),
}), getUserById);




module.exports = router;
