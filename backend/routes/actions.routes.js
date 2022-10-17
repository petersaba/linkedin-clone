const { Router } = require('express');
const { followCompany, unfollowCompany } = require('../controllers/actions.controller')

const router = Router();

router.post('/follow', followCompany);
router.delete('/follow', unfollowCompany);

module.exports = router;