import express from "express";
import { Request, Response } from "express";
import tasksRouter from "./tasksRoutes";

const routes = (app: any) => {
    app.route('/').get((req: Request, res: Response) => {
        res.status(200).send({ title: "Batata" })
    });

    app.use(
        express.json(),
        tasksRouter,
    );
}

export default routes;