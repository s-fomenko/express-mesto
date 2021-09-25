const router = require('express').Router();
const {
  getUser, getUserById, createUser, updateUserProfile, updateUserAvatar,
} = require('../controllers/users');

router.get('/', getUser);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.patch('/me', updateUserProfile);
router.patch('/avatar', updateUserAvatar);

module.exports = router;
