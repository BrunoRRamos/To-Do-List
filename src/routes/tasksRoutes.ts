import express from "express";
import TaskController from "../controllers/tasksController";

const router = express.Router();

router
    .get("/tasks", TaskController.getAllTasks)
    .get("/tasks/:id", TaskController.getTaskById)
    .post("/tasks", TaskController.createTask);

export default router;