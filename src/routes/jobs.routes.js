import { Router } from "express";
import { getDashboard,sendSampleData } from "../controllers/jobs.controllers.js";

const router = Router();

router.route('/intern/dashboard').get(getDashboard);

export default router;