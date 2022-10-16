const { Router } = require('express');
const { isEmailAlreadyUsed } = require('../controllers/users.controller');

const router = Router();

router.get('/email', isEmailAlreadyUsed);

module.exports = router;