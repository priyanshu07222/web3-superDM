import express from "express"
import { userRouter } from "./routes/user.route"
import dotenv from "dotenv"
import cors from "cors"


const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())


app.use('/api/v1', userRouter)


app.listen(3000, () => {
  console.log("Server is running on port 3000")
})