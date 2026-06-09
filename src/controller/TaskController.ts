import { Request, Response } from "express";
import colors from "colors";
import Task from "../models/Task";

export class TaskController {
  //Crear una nueva tarea
  static createTask = async (req: Request, res: Response) => {
   
    try {
        const task = new Task(req.body);
        task.project = req.project._id;
        req.project.tasks.push(task._id);
        await task.save();
        await req.project.save();
        res.send("Tarea creada correctamente");
    } catch (error) {
      console.log(error);
      console.log(colors.red.bold("Error al crear la tarea"));
    }
  };
}
