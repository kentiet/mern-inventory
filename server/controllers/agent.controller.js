import Agent from "../models/agent.model.js"



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
  findAll, getById, update, remove
}