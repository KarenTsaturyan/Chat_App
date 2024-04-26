import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connect-to-mongodb.js";
import { app, server } from "./socket/socket.js";

function bootstrap() {
    dotenv.config();
    app.use(express.json());
    app.use(cookieParser());

    // app.use(authMiddleware)
    const port = process.env.PORT || 3000

    // app.get('/', (req, res)=>{
    //     res.send("Hello World");
    // })

    app.use("/api/auth", authRoutes)
    app.use("/api/messages", messageRoutes)
    app.use("/api/users", userRoutes)


    server.listen(port, () => {
        connectToMongoDB();
        console.log(`our server on ${port}`);
    })
}

bootstrap()