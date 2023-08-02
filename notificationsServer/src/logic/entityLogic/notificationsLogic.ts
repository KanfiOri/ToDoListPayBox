import { iDataProvider } from "../../logic/interfaces/dataProvider";

const TRIGGER = 1000;

const sendNotification = async () => {
    console.log('This function already been implemented');
}

export function createNotificationsLogic(dataProvider: iDataProvider) {
    setInterval(() => {
        notificationTrigger();
    }, TRIGGER);

    const getAll = async () => {
        return await dataProvider.NotificationDataProvider.getAll()
    }

    const notificationTrigger = async () => {
            const tasks = await getAll()
            const date = (new Date()).getTime()
            const promises = tasks.map(async (task) => {
                if(task.deadline <= date && !task.isExpired) {
                    try {
                        await sendNotification()
                    } catch(e) {
                        throw new Error(`sendNotification does not work: ${e.message}`)
                    }

                    try {
                        await dataProvider.NotificationDataProvider.updateIsExpired(task._id);
                    } catch(e) {
                        throw new Error(`isExpired cant be updated in DB: ${e}`);
                    }
                } 
            })
            
            await Promise.all(promises)
        }
}