import express from 'express'
import { findAll, getById, signUp, logIn, update, remove } from '../controllers/agent.controller.js'

const agentRoutes = express.Router()

agentRoutes
.get('/', findAll)
.get('/:id', getById)
.post('/signup', signUp)
.post('/login', logIn)
.put('/:id', update)
.delete('/:id', remove)

export default agentRoutes