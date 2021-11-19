// module.exports.auth = (req, res, next) => {
//   const { jwt } = req.cookies;
//
//   if (!jwt || !jwt.startsWith('Bearer ')) {
//     return res
//       .status(401)
//       .send({ message: 'Необходима авторизация' });
//   }
//
//   const token = jwt.replace('Bearer ', '');
// };
