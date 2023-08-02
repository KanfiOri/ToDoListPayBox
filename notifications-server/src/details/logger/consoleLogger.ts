import { LogData, Logger } from "../../common/logger/logger";

export const createConsoleLogger = (): Logger => {

    const log = (logData: LogData) => {
        console.log(logData)
    }

    const warn = (logData: LogData) => {
        console.warn(logData)
    }

    const error = (logData: LogData) => {
        console.error(logData)
    }


    return {
        log, warn, error
    }
}