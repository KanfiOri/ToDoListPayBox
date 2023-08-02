import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Router } from "express";
import { iDataProvider } from "logic/interfaces/dataProvider";
import { createTaskRoutes } from "./routes/taskRoutes";
import { appConfig } from "../../../config/appConfig";
import { ServerLogger } from "../../common/logger/logger";


export const expressInit = (dataProvider: iDataProvider) => {
    const app = express();
    const router = Router();

    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({ limit: '50mb' }))

    app.get('/check', (req, res) => {
        res.send({ system: 'CRUD-Server', status: 'ok' })
    })

    app.use('/task', createTaskRoutes(router, dataProvider))

    setupServer(app)
}

const setupServer = (app: Application) => {
    app.listen(appConfig.port, () => {
        ServerLogger.logger().log({
            message: `The CRUD Server is runing in port ${appConfig.port} :)`,
            module: 'EXPRESS'
        });
    })
}