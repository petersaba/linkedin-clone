const { Router } = require('express');
const { editProfile } = require('../controllers/users.controller');

const router = Router();

router.put('/', editProfile);

module.exports = router;