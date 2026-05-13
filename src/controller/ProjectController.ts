import type, { Request, Response } from "express";

export class ProjectController {

    static async getAllProject(req: Request, res: Response) {
        res.send('Obtener todos los proyectos');
    } 
}  