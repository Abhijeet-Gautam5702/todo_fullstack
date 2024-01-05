
# Fullstack Todo App

This is a simple fullstack todo application built using React, Node/Express and MongoDB. It has the following features:-

1. Anyone can create a todo
2. Anyone can see all incomplete todos
3. Anyone can mark the todos as "Completed" (completed todos get vanished from the frontend)

**Note that this application is a demonstration of how a frontend can be connected to the backend in simple manner. This project doesn't contain any styling.**

  

## Installation and running the application

  

1. Clone the repository

```bash

git  clone  https://github.com/Abhijeet-Gautam5702/todo_fullstack.git

```

2. Navigate to "./backend" repository and run

```bash

npm  install

```

3. Create a .env file and copy the following code

```bash

DATABASE_CONNECTION_STRING  =  "Your own MongoDB Database Connection String"

```
**Note:** - Create your own MongoDB instance from the [official website](https://www.mongodb.com/). 

4. Run the locally hosted backend server 
```bash
	node index.js
```

5. Navigate to "./frontend" repository and run
```bash
	npm install
```
6. Open another terminal and run the frontend development server
```bash
	npm run dev
```
## Dependencies
### Frontend
- [Vite](https://vitejs.dev/)
### Backend
- [NodeJS](https://nodejs.org/en)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)