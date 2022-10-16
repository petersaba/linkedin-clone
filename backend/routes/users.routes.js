const { Router } = require('express');
const { editProfile, getUserData } = require('../controllers/users.controller');

const router = Router();

router.put('/', editProfile);
router.get('/', getUserData);

module.exports = router;