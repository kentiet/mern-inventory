import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.Promise = global.Promise

const db = mongoose.connection

export default db