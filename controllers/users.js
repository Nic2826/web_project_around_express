const User = require('../models/user');
const {generateToken} = require('../helper/generateToken');

// Definición de códigos de error
const ERROR_CODE_BAD_REQUEST = 400;
const ERROR_CODE_NOT_FOUND = 404;
const ERROR_CODE_SERVER_ERROR = 500;

async function getUsers(req, res) {
  try{const users = await User.find({});
  res.send(users);}
  catch (err) {
    if (err.name === 'ValidationError'){
      res.status(ERROR_CODE_SERVER_ERROR).send({ message: 'Error interno del servidor'});
    }
  }
};

async function createUsers(req, res) {
  try{
    console.log(req.body);
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password
    });
    res.send(newUser);
  }catch (err) {
    // Manejo de errores
    if (err.name === 'ValidationError') {
      // Error de validación para datos inválidos (400)
      return res.status(ERROR_CODE_BAD_REQUEST).send({ message: 'Datos inválidos al crear el usuario' });
    }
    // Error predeterminado (500)
    res.status(ERROR_CODE_SERVER_ERROR).send({ message: 'Error interno del servidor'});
  }
};

async function updateUser (req, res) {
  try {
    const { name, email } = req.body; // Asegúrate de que estos campos existan en el body
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, email },
      { new: true, runValidators: true } // Devuelve el nuevo documento y aplica validadores
    ).orFail(() => {
      const error = new Error("Usuario No encontrado");
      error.statusCode = ERROR_CODE_NOT_FOUND; // Establecer un código de estado 404
      throw error; // Arrojar el error para que sea manejado en el bloque catch
    });

    res.send(updatedUser);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(ERROR_CODE_BAD_REQUEST).send({ message: 'Datos inválidos al actualizar el perfil' });
    }
    res.status(ERROR_CODE_SERVER_ERROR).send({ message: 'Error interno del servidor' });
  }
};

async function updateAvatar(req, res) {
  try {
    const { avatar } = req.body; // Se espera que el body tenga un campo 'avatar'
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      { new: true, runValidators: true }
    ).orFail(() => {
      const error = new Error("Avatar No encontrado");
      error.statusCode = ERROR_CODE_NOT_FOUND; // Establecer un código de estado 404
      throw error; // Arrojar el error para que sea manejado en el bloque catch
    });

    res.send(updatedUser);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(ERROR_CODE_BAD_REQUEST).send({ message: 'Datos inválidos al actualizar el avatar' });
    }
    res.status(ERROR_CODE_SERVER_ERROR).send({ message: 'Error interno del servidor' });
  }
};

async function loginUsers(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(ERROR_CODE_BAD_REQUEST).send({ message: 'Usuario no encontrado' });
    }

    // Aquí generas el token si el usuario existe
    const token = generateToken(user);
    res.send({ token });

  } catch (err) {
     res.status(ERROR_CODE_SERVER_ERROR).send({ message: 'Error interno del servidor' });
  }

}

module.exports = { getUsers, createUsers, updateUser, updateAvatar, loginUsers}