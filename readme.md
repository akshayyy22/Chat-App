
# Real-Time Social Platform

[Project Video](https://drive.google.com/file/d/1SMpVDGx3mXK62uaPK6kEFpnjLtVRMn4H/view?usp=drive_link)


## Overview

This project is a real-time social platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with [Socket.io](http://socket.io/) for messaging functionality. It features JWT authentication for secure user access, Zustand for state management, and TailwindCSS for styling.

## Features

- **Real-Time Messaging**: Instant messaging functionality powered by [Socket.io](http://socket.io/).
- **Authentication & Authorization**: Secure user access using JWT.
- **Online User Status**: Real-time updates on user online status.
- **Global State Management**: Efficient state management with Zustand.
- **Sleek UI Design**: Aesthetic appeal provided by TailwindCSS.
- **Error Handling**: Robust mechanisms for handling errors.

### Fronted 

<p align = "center">
 <a href="https://react.dev" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" height="50"/> &nbsp;&nbsp;&nbsp;&nbsp;
 </a>
<a href="https://tailwindcss.com/">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height="50"/>
</a>
</p>
 
### Backend

<p align = "center">
<a href="https://nodejs.org/en" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" height="50"/>
</a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://expressjs.com/" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" height="50" />
</a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.mongodb.com/" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" height="50"/>
</a>&nbsp;&nbsp;&nbsp;&nbsp;

</p>

### Real-Time Communication  
<p align = "center">
 <a href="https://socket.io/">
<img src="https://socket.io/images/logo.svg" width="50" >
</a>
</p>

### Authentication

<p align = "center">
 <a href="https://socket.io/">
<img src="https://jwt.io/img/pic_logo.svg" width="50" >
</a>
</p>



## Achievements

- Developed a feature-rich real-time social platform.
- Ensured secure user access with JWT authentication.
- Enhanced user engagement with real-time messaging and online status updates.
- Optimized performance and reliability with Zustand and error handling.

## Future Enhancements

- Integration of additional features for an enhanced user experience.
- Optimization for scalability and security enhancements.


## Project Setup

```bash
git clone https://github.com/akshayyy22/Chat-App.git
```

Now install all packages inside Frontend

```bash
cd frontend

npm i
```

Then switch to Backend and install packages.

```bash
cd backend/server

npm i
```

<br>

Now inside `Chat-app/backend` create `.env` file and add these environment variables and their values

```js
PORT = "";
MONGO_DB_URI = "";
JWT_SECRET = "";
NODE_ENV = development
```
Either you can use local mongodb or Online(MongoDb Atlas) just provide the link and you are done.

<br>

In terminal start backend first because fronted is fetching Database and Messages from backend.

```bash
cd backend
npm start or npm run server
```

```bash
cd frontend
npm run dev
```


