import { Router } from "express";
import { ProjectController } from "../controller/ProjectController";

const router = Router();

router.post('/', ProjectController.createProject)
router.get('/', ProjectController.getAllProject)

export default router;