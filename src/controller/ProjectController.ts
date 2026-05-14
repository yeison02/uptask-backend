import type, { Request, Response } from "express";
import Project from "../models/Project";
import colors from 'colors';

export class ProjectController {

    static async createProject(req: Request, res: Response) {
        const project = new Project(req.body)
        try {
            await project.save();
            res.send('Creando Proyecto');
        } catch (error) {
            console.log(error);
            console.log(colors.red.bold('Error al crear el proyecto'));
        }
    } 

    static async getAllProject(req: Request, res: Response) {
        res.send('Obtener todos los proyectos');
    } 
}  