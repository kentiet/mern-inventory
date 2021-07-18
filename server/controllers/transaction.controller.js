import Transaction from '../models/transaction.model.js'

const findAll = (req, res) => {
  Transaction.find({})
  .then(
    data => { 
      if(!data) res.send([])

      res.send(data)
    }
  )
  .catch(err => console.error(err))
}

const getById = (req, res) => {
  const id = req.params.id

  Transaction.findById(id)
  .then(data => {
    res.send(data)
  })
  .catch(err => { 
    console.error(err);
  })
}

const create = (req, res) => {
  if(!req.body) {
    console.error({message: `can't be null`});
    res.status(500).send({message: `can't be null`})
  }

  const transaction = new Transaction({
    agent: req.body.agent,
    recipient: req.body.recipient,
    quantity: req.body.quantity,
    consumables: req.body.consumables
  })
  
  Transaction.create(transaction)
  .then(data => {
    res.send(data)
  })
  .catch(err => { 
    console.error(err);
  })
}

const update = (req, res) => {
  const id = req.params.id

  Transaction.findByIdAndUpdate(id, req.body, { new: true })
  .then(response => {
    res.send(response)
  })
  .catch(err => { 
    res.status(500).send({message: `Can't update transaction of id: ${id}`})
    console.error(err);
  })
}

const remove = (req, res) => {
  const id = req.params.id

  Transaction.findByIdAndDelete(id)
  .then(response => {
    res.send(response)
  })
  .catch(err => { 
    res.status(500).send({message: `Can't delete transaction of id: ${id}`})
    console.error(err);
  })
}

export {
  findAll, getById, create, update, remove
}