import express from 'express'
import { findAll, getById, update, remove } from '../controllers/agent.controller.js'

const agentRoutes = express.Router()

agentRoutes
.get('', findAll)
.get('/:id', getById)
.put('/:id', update)
.delete('/:id', remove)

export default agentRoutes