import bodyParser from "body-parser";
import cors from "cors";
import express, { Application } from "express";
import { createNotificationsLogic } from "../../logic/entityLogic/notificationsLogic";
import { iDataProvider } from "../../logic/interfaces/dataProvider";
import { appConfig } from "../../../config/appConfig";
import { ServerLogger } from "../../common/logger/logger";

export const  expressInit = (dataProvider: iDataProvider) => {
    const app = express()
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({ limit: '50mb' }))
    
    app.get('/check', (req, res) => {
        res.send({system: 'notifcations-server', status: 'ok'})
    })

    createNotificationsLogic(dataProvider);
    setupServer(app)
}


const setupServer = (app: Application) => {
    app.listen(appConfig.port, () => {
        ServerLogger.logger().log({
            message: `The Notification Server is runing in port ${appConfig.port} :)`,
            module: 'EXPRESS'
        });
    });
}