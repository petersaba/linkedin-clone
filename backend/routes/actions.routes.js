const { Router } = require('express');
const { followCompany, unfollowCompany, applyForJob } = require('../controllers/actions.controller')

const router = Router();

router.post('/follow', followCompany);
router.delete('/follow', unfollowCompany);
router.post('/apply', applyForJob);

module.exports = router;