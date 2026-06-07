import type, { Request, Response } from "express";
import Project from "../models/Project";
import colors from "colors";

export class ProjectController {
  //Crear un nuevo proyecto
  static async createProject(req: Request, res: Response) {
    const project = new Project(req.body);
    try {
      await project.save();
      res.send("Proyecto creado correctamente");
    } catch (error) {
      console.log(error);
      console.log(colors.red.bold("Error al crear el proyecto"));
    }
  }

  //Obtener todos los proyectos
  static async getAllProject(req: Request, res: Response) {
    try {
      const projects = await Project.find({});
      res.json(projects);
    } catch (error) {
      console.log(error);
      console.log(colors.red.bold("Error al obtener los proyectos"));
    }
  }

  //Obtener un proyecto por su ID
  static async getProjectById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) {
        const error = new Error("Proyecto no encontrado");
        return res.status(404).json({ error: error.message });
      }
      res.json(project);
    } catch (error) {
      console.log(error);
      console.log(colors.red.bold("Error al obtener el proyecto"));
    }
  }

  //Actualizar un proyecto por su ID
  static async updateProject(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const project = await Project.findByIdAndUpdate(id, req.body);
      if (!project) {
        const error = new Error("Proyecto no encontrado");
        return res.status(404).json({ error: error.message });
      }
      await project.save();
      res.send("Proyecto actualizado correctamente");
    } catch (error) {
      console.log(error);
      console.log(colors.red.bold("Error al obtener el proyecto"));
    }
  }

  //Eliminar un proyecto por su ID
  static async deleteProject(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) {
        const error = new Error("Proyecto no encontrado");
        return res.status(404).json({ error: error.message });
      }
      await project.deleteOne();
      res.send("Proyecto eliminado correctamente");
    } catch (error) {
      console.log(error);
      console.log(colors.red.bold("Error al eliminar el proyecto"));
    }
  }
}
