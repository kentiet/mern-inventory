import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './helpers/db.js'
import assetRoutes from './routes/asset.route.js'
import consumableRoutes from './routes/consumable.route.js'

dotenv.config()
const app = express()
const port = process.env.PORT

// console.log(db)

db.on('error', (err) => {
  console.error(err);
})

db.on('connected', () => {
  console.log('Mongodb is connected');
}).then(() => { 
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  app.get('/', (req, res) => {
    res.send("Hello from Inventory API")
  })

  app.use('/api/v1/assets', assetRoutes)
  app.use('/api/v1/items', consumableRoutes)

  
  app.listen(port, () => {
    console.log(`API is running on ${port}`);
  })  
})


