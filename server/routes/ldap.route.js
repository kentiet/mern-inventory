import express from 'express'
import { findAll } from '../middleWares/ldap.js'

const ldapRoute = express.Router()

ldapRoute
.get('/', findAll)

export default ldapRoute