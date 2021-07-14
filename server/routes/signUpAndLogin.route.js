import express from 'express'
import {signUp, logIn } from '../controllers/signup-login.controller.js'

const signUpLoginRoutes = express.Router()

signUpLoginRoutes
.post('/signup', signUp)
.post('/login', logIn)

export default signUpLoginRoutes