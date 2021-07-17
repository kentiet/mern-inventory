import express from 'express'
import passport from 'passport'
import { findAll, getById, update, remove, signUp, logIn } from '../controllers/agent.controller.js'
import passportConfig from '../middleWares/passport.js'

passportConfig(passport)

const agentRoutes = express.Router()

agentRoutes
.get('', findAll)
.get('/:id', getById)
.put('/:id', update)
.delete('/:id', remove)
.post('/signup', signUp)
.post('/login', logIn)

export default agentRoutes