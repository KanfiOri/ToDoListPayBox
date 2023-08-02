import { iDataProvider } from "../../logic/interfaces/dataProvider";

const TRIGGER = 1000;

export function createNotificationsLogic(dataProvider: iDataProvider) {

    setInterval(() => {
        notificationTrigger();
    }, TRIGGER);

    const getAllDeadlines = async () => {
        return await dataProvider.NotificationDataProvider.getAll()
    }

    const notificationTrigger = async () => {
        try {
            const tasks = await getAllDeadlines();
            const date = (new Date()).getTime();
            // Promise.all(tasks).then((values) => {
            //     values.
            // })
            tasks.forEach((task) => {
                if (task.deadline < date && !task.isExpired) {
                    dataProvider.NotificationDataProvider.sendNotification()
                    dataProvider.NotificationDataProvider.updateIsExpired(task.id)
                }
            })
        } catch {

        }

    }
}