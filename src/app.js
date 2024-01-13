import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();


import jobRouter from "./routes/jobs.routes.js"

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', jobRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running at port http://localhost:${PORT}`);
})

