import { createConsoleLogger } from "./consoleLogger";

export type Module = 'DAL' | 'LOGIC' | 'EXPRESS';

export type LogData = {
    module: Module;
    message: string;
}

export interface Logger {
    log: (data: LogData) => void;
    warn: (logData: LogData) => void;
    error: (message: LogData) => void;
}


export const ServerLogger = (() => {
    let _logger: Logger | null = null;

    return {
        logger: () => {
            if (_logger === null) {
                _logger = createConsoleLogger();
            }
            return _logger;
        }
    };
})();