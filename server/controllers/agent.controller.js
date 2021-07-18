import Agent from "../models/agent.model.js"
import { hashPassword, comparePassword, issueJWT } from '../helpers/passwordUtils.js'

const signUp = (req, res) => {
  if (!req.body) {
    console.error({ message: `can't be null` });
    res.status(500).send({ message: `can't be null` })
  }

  const saltHash = hashPassword(req.body.password)

  const salt = saltHash.salt
  const hash = saltHash.hash

  const agent = new Agent({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    salt: salt,
    hash: hash,
    email: req.body.email,
    role: req.body.role
  })

  Agent.create(agent)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error(err);
    })
}

const logIn = (req, res, next) => {
  Agent.findOne({ username: req.body.username })
    .then((agent) => { 
      
      if(!agent) { 
        return res.status(401).json({ success: false, msg: "could not find user" })
      }

      const isValid = comparePassword(req.body.password, agent.hash)

      if(isValid) { 
        const tokenObj = issueJWT(agent)
       
        res.status(200).json({ success: true, agent: agent, token: tokenObj.token, expiresIn: tokenObj.expires })
      } else { 
        res.status(401).json({ success: false, msg: "you entered the wrong password" });
      }
    })
    .catch((err) => {
      next(err);
  });
}

const findAll = (req, res) => {
  Agent.find({})
    .then(
      data => {
        if (!data) res.send([])

        res.json(data)
      }
    )
    .catch(err => console.error(err))
}

const getById = (req, res) => {
  const id = req.params.id

  Agent.findById(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error(err);
    })
}

const update = (req, res) => {
  const id = req.params.id

  Agent.findByIdAndUpdate(id, req.body, { new: true })
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      res.status(500).send({ message: `Can't update Agent of id: ${id}` })
      console.error(err);
    })
}

const remove = (req, res) => {
  const id = req.params.id

  Agent.findByIdAndDelete(id)
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      res.status(500).send({ message: `Can't delete Agent of id: ${id}` })
      console.error(err);
    })
}

export {
  findAll, getById, update, remove, signUp, logIn
}