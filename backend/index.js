import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// nodemon index: youtube: https://youtu.be/es9_6RFR7wk?si=Ouo1Rog2rYlive0Y , 4:50 mins
app.listen(5000, () => console.log("Server up and running..."));
