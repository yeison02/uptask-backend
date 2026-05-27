import type, { Request, Response } from "express";
import Project from "../models/Project";
import colors from 'colors';

export class ProjectController {

    static async createProject(req: Request, res: Response) {
        const project = new Project(req.body)
        try {
            await project.save();
            res.send('Proyecto creado correctamente');
        } catch (error) {
            console.log(error);
            console.log(colors.red.bold('Error al crear el proyecto'));
        }
    } 

    static async getAllProject(req: Request, res: Response) {
        try {
            const projects = await Project.find({
                
            })
            res.json(projects);
        } catch (error) {
            console.log(error);
            console.log(colors.red.bold('Error al obtener los proyectos'))
        }
    } 
}  