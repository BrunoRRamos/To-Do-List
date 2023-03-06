import tasks from "../models/Task";
import { Request, Response } from "express"

class TaskController {

    //Get all tasks
    static getAllTasks = (req: Request, res: Response) => {
        tasks.find((err: any, tasks: JSON) => {
            res.status(200).json(tasks);
        });
    }

    //get by id
    static getTaskById = (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            tasks.findById(id, (tasks: JSON) => {
                res.status(200).json(tasks);
            });

        } catch (err) {
            res.status(400).json({ Message: `${err}` });
        }
    }

    static createTask = (req: Request, res: Response) => {
        let task = new tasks(req.body);

        try {
            task.save();
            res.status(201).json(task);
        } catch (err) {
            res.status(500).json({ Message: `${err}` });
        }
    }

}

export default TaskController;