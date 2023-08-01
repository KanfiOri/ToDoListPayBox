import { createCRUDServerDal } from "details/dal/CRUDServer";
import { expressInit } from "./details/express/express";

const CRUDServerDataProvider = createCRUDServerDal()
expressInit(CRUDServerDataProvider)