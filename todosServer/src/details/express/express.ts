import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Router } from "express";
import { iDataProvider } from "logic/interfaces/dataProvider";
import { createTaskRoutes } from "./routes/taskRoutes";

// For now dataProvider is in ? but i will handel it later.
export const  expressInit = (dataProvider: iDataProvider) => {
    const app = express()
    const router = Router()
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({ limit: '50mb' }))
    
    app.get('/check', (req, res) => {
        res.send('Hello World :)')
    })

    app.use('/task', createTaskRoutes(router, dataProvider))

    setupServer(app)
}

const setupServer = (app: Application) => {
    app.listen(5000, () => {
        console.log('Server is runing in port 5000 :)')
    })
}