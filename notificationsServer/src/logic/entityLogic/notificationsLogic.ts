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
        try {
            const tasks = await getAll();
            const date = (new Date()).getTime();
            tasks.forEach((task) => {
                if (task.deadline < date && !task.isExpired) {
                    try {
                        sendNotification()
                        console.log('taskName: ', task.name)
                        console.log('task.isExpired: ', task.isExpired)
                    } catch(e) {
                        throw new Error(`sendNotification does not work: ${e.message}`)
                    }
                    try {
                        console.log('is Exoired happening')
                        dataProvider.NotificationDataProvider.updateIsExpired(task._id)
                    } catch(e) {
                        console.error('isExpired cant be updated in DB: ',(e))
                    }
                }
            })
        } catch(e) {
            console.error('All tasks cannot be fetched: ', (e))
        }
    }
}