const router = require('express').Router();
const {
  getUser, getUserById, createUser, updateUserProfile,
} = require('../controllers/users');

router.get('/', getUser);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.patch('/me', updateUserProfile);

module.exports = router;
