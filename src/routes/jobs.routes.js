import { Router } from "express";
import { getAllJobs, postJob } from "../controllers/jobs.controllers.js";

const router = Router();

router.route('/').get(getAllJobs);
router.route('/createopening').post(postJob);


export default router;