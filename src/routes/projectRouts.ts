import { Router } from "express";
import { body, param } from "express-validator"
import { ProjectController } from "../controller/ProjectController";
import { handleImputErrors } from "../middleware/validation";

const router = Router();

//Crear los proyectos
router.post('/', 
    body('projectName')
    .notEmpty().withMessage('El nombre del proyecto no puede ir vacio'),
    body('clientName')
    .notEmpty().withMessage('El nombre del cliente no puede ir vacio'),
    body('description')
    .notEmpty().withMessage('La descripcion no puede ir vacia'),
    handleImputErrors,
    ProjectController.createProject
)

//Obtener todos los proyectos
router.get('/', ProjectController.getAllProject)
router.get('/:id',
    param('id')
    .isMongoId().withMessage('El ID no es valido'),
    handleImputErrors,
    ProjectController.getProjectById
)

export default router;