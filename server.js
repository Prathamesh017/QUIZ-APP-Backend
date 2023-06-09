import express from 'express'
import colors from 'colors'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './Config/config.js'
import quizRouter from './Routes/quizRouter.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
await connectDB()

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
)

app.use("/api/user/quiz",quizRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.yellow)
})
