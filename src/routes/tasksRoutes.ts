import express from "express";
import TaskController from "../controllers/tasksController";

const router = express.Router();

router
    .get("/tasks", TaskController.getAllTasks)
    .get("/tasks/:id", TaskController.getTaskById)
    .post("/tasks", TaskController.createTask)
    .put("/tasks/:id", TaskController.updateTask)
    .delete("/tasks/:id", TaskController.deleteTask)
    .put("/tasks/complete/:id", TaskController.completeTask);
    
export default router;