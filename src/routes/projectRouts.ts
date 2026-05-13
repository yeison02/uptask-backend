import { Router } from "express";
import { ProjectController } from "../controller/ProjectController";

const router = Router();

router.get('/', ProjectController.getAllProject)

export default router;