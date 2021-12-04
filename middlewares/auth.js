// const jwt = require('jsonwebtoken');
//
// module.exports.auth = (req, res, next) => {
//   const { authorization } = req.cookies;
//
//   if (!authorization || !authorization.startsWith('Bearer ')) {
//     return res
//       .status(401)
//       .send({ message: 'Необходима авторизация' });
//   }
//
//   const token = authorization.replace('Bearer ', '');
//   let payload;
//
//   try {
//     // попытаемся верифицировать токен
//     payload = jwt.verify(token, 'some-secret-key');
//   } catch (err) {
//     // отправим ошибку, если не получилось
//     return res
//       .status(401)
//       .send({ message: 'Необходима авторизация' });
//   }
// };
