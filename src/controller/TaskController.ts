import {Request, Response} from 'express';
import colors from 'colors';

export class TaskController{
    
    //Crear una nueva tarea
    static createProject = async (req: Request, res: Response) => {
        const { projectId } = req.params;
        console.log(projectId);
        try{

        }catch(error){
            console.log(error);
            console.log(colors.red.bold("Error al crear la tarea"));
        }       
    }
}