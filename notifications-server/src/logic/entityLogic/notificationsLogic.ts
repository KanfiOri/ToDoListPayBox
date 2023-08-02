import { ServerLogger } from "../../common/logger/logger";
import { iDataProvider } from "../interfaces/dataProvider";
import { Task } from "common/entites/entities";

const TRIGGER = 1000;

const sendNotification = (task: Task) => {
    ServerLogger.logger().log({
        message: `The notification: ${task.name} of taskId: ${task._id} has been sent!`,
        module: "LOGIC"
    });
}

export function createNotificationsLogic(dataProvider: iDataProvider) {
    setInterval(() => {
        notificationTrigger();
    }, TRIGGER);

    const getShouldBeNotificated = async () => {
        return await dataProvider.notificationDataProvider.getShouldBeNotificated();
    }

    const notificationTrigger = async () => {
        const shouldNotificationTasks = await getShouldBeNotificated();

        const promises = shouldNotificationTasks.map(async (task) => {
            try {
                sendNotification(task);
                await dataProvider.notificationDataProvider.updateIsNotificated(task._id);
            } catch (error) {
                const message = `'sendNotification' has failed, the error: ${error}`;
                ServerLogger.logger().error({
                    message,
                    module: 'LOGIC'
                });
            }
        })

        await Promise.all(promises);
    }
}
