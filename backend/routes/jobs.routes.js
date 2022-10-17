const Router = require('express');
const { createJob, deleteJob, getAllJobs, getJobById, getAllApplicants, searchJob } = require('../controllers/jobs.controller');

const router = Router();

router.post('/', createJob);
router.delete('/', deleteJob);
router.get('/', getAllJobs);
router.get('/job/', getJobById);
router.get('/applicants', getAllApplicants);
router.get('/search', searchJob);

module.exports = router;