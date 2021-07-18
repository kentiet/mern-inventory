import express from 'express'
import { findAll, getById, create, update, remove } from '../controllers/consumable.controller.js'

const consumableRoutes = express.Router()

consumableRoutes
.get('/', findAll)
.get('/:id', getById)
.post('/', create)
.put('/:id', update)
.delete('/:id', remove)

export default consumableRoutes