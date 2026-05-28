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

//Obtener un proyecto por su ID
router.get('/:id',
    param('id')
    .isMongoId().withMessage('El ID no es valido'),
    handleImputErrors,
    ProjectController.getProjectById
)

//Actualizar un proyecto por su ID
router.put('/:id',
    param('id')
    .isMongoId().withMessage('El ID no es valido'),
     body('projectName')
    .notEmpty().withMessage('El nombre del proyecto no puede ir vacio'),
    body('clientName')
    .notEmpty().withMessage('El nombre del cliente no puede ir vacio'),
    body('description')
    .notEmpty().withMessage('La descripcion no puede ir vacia'),
    handleImputErrors,
    ProjectController.updateProject
)

//Eliminar un proyecto por su ID
router.delete('/:id',
    param('id')
    .isMongoId().withMessage('El ID no es valido'),
    handleImputErrors,
    ProjectController.deleteProject
)


export default router;