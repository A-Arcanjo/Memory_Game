import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import registerRouter from "./routes/register.js"
import loginRouter from "./routes/login.js"

const app = express();

dotenv.config();

// Connect to mongodb
mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.d6tvf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

mongoose.connection.on("open", () =>
  console.log("Database connection established!")
);
mongoose.connection.on("error", () => console.error);

// use cors
app.use(cors());

// use express .json method to parse JSON data received
app.use(express.json());

// use morgan to make a small log everytime a request is received
app.use(morgan("tiny"));

// register post
app.use("/register", registerRouter)

// login post
app.use("/login", loginRouter)

// use a global error handler
app.use(globalErrorHandler)

app.listen( process.env.PORT || 3001, () => {
        console.log(`Server has started on port  ${process.env.PORT || 3001}!`)
})
