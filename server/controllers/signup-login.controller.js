import Agent from "../models/agent.model.js"
import bcrypt from 'bcrypt'
const salt = 9

const signUp = (req, res) => {
  if (!req.body) {
    console.error({ message: `can't be null` });
    res.status(500).send({ message: `can't be null` })
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, salt)

  const agent = new Agent({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: hashedPassword,
    email: req.body.email,
    role: req.body.role,
  })

  Agent.create(agent)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error(err);
    })
}

const logIn = (req, res) => {
  if (!req.body) {
    console.error({ message: `can't be null` });
    res.status(500).send({ message: `can't be null` })
  }

  Agent.findOne({ 'username' : req.body.username }).then(user => { 
    let isSuccess = bcrypt.compareSync(req.body.password, user.password)
    isSuccess ? res.send({ login: 'success'}) : res.status(500).send({ login: `Login Failed` })
  })
  .catch(err => console.error(err))
}

export { signUp, logIn }