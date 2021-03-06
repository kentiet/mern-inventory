import express from 'express'
import { findAll, getById, create, update, remove } from '../controllers/asset.controller.js'

const assetRoutes = express.Router()

assetRoutes
.get('/', findAll)
.get('/:id', getById)
.post('/', create)
.put('/:id', update)
.delete('/:id', remove)

export default assetRoutes