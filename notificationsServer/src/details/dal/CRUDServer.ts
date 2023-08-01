import { iDataProvider } from "logic/interfaces/dataProvider";
import { createTaskDataProvider } from "./notificationCRUDServer";

export const createCRUDServerDal = ():iDataProvider => {
    return {
        NotificationDataProvider: createTaskDataProvider()
    }
}