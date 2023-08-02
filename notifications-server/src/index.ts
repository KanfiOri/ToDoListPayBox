import { createConsoleLogger } from "./details/logger/consoleLogger";
import { createMongoDal } from "./details/dal/mongo/mongo";
import { expressInit } from "./details/express/express";

const mongoDataProvider = createMongoDal();

expressInit(mongoDataProvider);