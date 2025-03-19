import express from "express"
import { userRouter } from "./routes/user.route"
import dotenv from "dotenv"
import cors from "cors"
import { sendWhatsappMessage } from "./config/whatsappConfig"
import { sendMail } from "./config/mailConfig"


const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())


app.use('/api/v1', userRouter)


app.listen(3000, async () => {

  console.log("Server is running on port 3000")
  await sendWhatsappMessage("+918810300636wwww", "Hello from web3 SuperDm")
  // await sendMail()

})