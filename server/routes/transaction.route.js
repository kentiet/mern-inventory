import express from 'express'
import { findAll, getById, create, update, remove } from '../controllers/transaction.controller.js'

const transactionRoutes = express.Router()

transactionRoutes
.get('/', findAll)
.get('/:id', getById)
.post('/:id', create)
.put('/:id', update)
.delete('/:id', remove)

export default transactionRoutes