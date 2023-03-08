import tasks from "../models/Task";
import { Request, Response } from "express"

class TaskController {

    //Get all tasks
    static getAllTasks = async (req: Request, res: Response) => {
        try {
            const allTasks = await tasks.find().exec();
            res.status(200).json(allTasks);
        } catch (err) {
            res.status(500).json({ Message: `${err}` })
        }
    }

    //get by id
    static getTaskById = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const task = await tasks.findById(id).exec();
            res.status(200).json(task);

        } catch (err) {
            res.status(400).json({ Message: `${err}` });
        }
    }

    static createTask = async (req: Request, res: Response) => {
        let task = new tasks(req.body);

        try {
            await task.save();
            res.status(201).json(task);

        } catch (err) {
            res.status(500).json({ Message: `${err}` });
        }
    }

    static updateTask = async (req: Request, res: Response) => {
        const id = req.params.id;
        
        try {
            const updatedTask = await tasks.findByIdAndUpdate(id, { $set:req.body });
            res.status(200).json(updatedTask);

        } catch (err) {
            res.status(500).json( { Message: `${err}` });
        }
    }

    static deleteTask = async (req: Request, res: Response) => {
        const id = req.params.id;
        
        try {
            await tasks.findByIdAndDelete(id);
            res.status(200).json({ Message: `Task id: ${id};  Deleted Successfully` });

        } catch (err) {
            res.status(500).json({ Message: `${err}` })
        }
    }

    static compleatTask = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            
        }
    }
 
}

export default TaskController;