# ToDoList
This repository contains the backend for the ToDoList application, which follows a microservices architecture. There are two microservices - the CRUD server and the notifications server. Each one of them communicates with MongoDB to store and retrieve data.

## Project Structure
The project follows a clean architecture with dependency inversion implemented through dependency injection and singleton patterns.

## Microservices
- **CRUD Server:** Responsible for handling tasks and managing the ToDoList data.
- **Notifications Server:** Handles sending notifications to users based on their tasks or other relevant events.

## Development Setup

1. Install dependencies for each server:
```bash
cd crud-derver
npm install

cd notifications-server
npm install
```
2. Connect MongoDB to the following connection string: `mongodb://127.0.0.1:27017/`
3. Create a new database named `ToDoList` and a collection named `Tasks`.

## Running the Servers

1. Start the CRUD server:
```bash
cd crud-server
npm run start
```
2. Start the Notifications server:
```bash
cd notification-server
npm run start
```
3. Now you can add tasks by sending POST requests to the CROD Server.