import { Router } from "express";
import { getAllJobs, postJob, getByJobTitle } from "../controllers/jobs.controllers.js";

const router = Router();

router.route('/').get(getAllJobs);
router.route('/createopening').post(postJob);
router.route('/:id').get(getByJobTitle);

export default router;