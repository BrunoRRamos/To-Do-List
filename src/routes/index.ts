import express from "express";

const routes = (app: any) => {
    app.route('/').get((req: Request, res: any) => {
        res.status(200).send({ title: "Batata" })
    });

    app.use(
        express.json(),
    );
}

export default routes;