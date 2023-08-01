import { iDataProvider } from "logic/interfaces/dataProvider";



const getAllDeadlines = async (dataProvider: iDataProvider) => {
    return await dataProvider.NotificationDataProvider.getAllDeadlines()
}

const notificationTrigger = async (dataProvider: iDataProvider) => {
    const deadLines = await getAllDeadlines(dataProvider);
    console.log('deadLines: ', deadLines)
}

export const notificationsLogic = { notificationTrigger }