const User = require('../models/user');
const { validationErrorStatus, notFoundErrorStatus } = require('../errors/errors');

module.exports.getUser = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        res.status(notFoundErrorStatus).send({ message: 'Пользователь по указанному _id не найден' });
        return;
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(validationErrorStatus).send({ message: 'Невалидный id' });
        return;
      }
      res.status(500).send({ message: err.message });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(validationErrorStatus).send({ message: 'Переданы некорректные данные при создании пользователя' });
        return;
      }
      res.status(500).send({ message: err.message });
    });
};

module.exports.updateUserProfile = (req, res) => {
  const { name, about } = req.body;
  const id = req.user._id;

  User.findOneAndUpdate(id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        res.status(notFoundErrorStatus).send({ message: 'Пользователь с указанным _id не найден' });
        return;
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(validationErrorStatus).send({ message: 'Переданы некорректные данные при обновлении профиля' });
        return;
      }
      if (err.name === 'ValidationError') {
        res.status(validationErrorStatus).send({ message: 'Некорректные данные' });
        return;
      }
      res.status(500).send({ message: err.message, name: err.name });
    });
};

module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  const id = req.user._id;

  User.findOneAndUpdate(id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        res.status(notFoundErrorStatus).send({ message: 'Пользователь с указанным _id не найден' });
        return;
      }
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(validationErrorStatus).send({ message: 'Переданы некорректные данные при обновлении аватара' });
        return;
      }
      if (err.name === 'ValidationError') {
        res.status(validationErrorStatus).send({ message: 'Некорректные данные' });
        return;
      }
      res.status(500).send({ message: err.message, name: err.name });
    });
};
