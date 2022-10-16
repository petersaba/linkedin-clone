const { Router } = require('express');
const { signup, login, isEmailAlreadyUsed } = require('../controllers/auth.controller');

const router = Router();

router.post('/signup', signup);
router.post('/login', login)
router.get('/email', isEmailAlreadyUsed);

module.exports = router;