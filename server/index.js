import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './helpers/db.js'
import assetRoutes from './routes/asset.route.js'
import consumableRoutes from './routes/consumable.route.js'
import agentRoutes from './routes/agent.route.js'
import passport from 'passport'

dotenv.config()
const app = express()
const port = process.env.PORT


db.on('error', (err) => {
  console.error(err);
})

db.on('connected', () => {
  console.log('Mongodb is connected');
}).then(() => { 
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(passport.initialize())
  
  app.use('/api/v1/assets', assetRoutes)
  app.use('/api/v1/items', consumableRoutes)
  app.use('/api/v1/agents', agentRoutes)

  
  app.listen(port, () => {
    console.log(`API is running on ${port}`);
  })  
})


