import debug from "debug";
import * as bodyParser from "body-parser";
import express from "express";

// Creates and configures an ExpressJS web server.
class App {
    // ref to Express instance
    public express: express.Application;

    // Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        const router = express.Router();

        router.post("/receive", (req: express.Request, res: express.Response) => {
            console.log(req.body);
            res.send();
        });

        this.express.use("/", router);
    }
}

export default new App().express;
