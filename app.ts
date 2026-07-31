import express from 'express';
import userRouter from "./src/routers/userRouter"

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('pages'));

app.use("/api/user", userRouter)

export default app;