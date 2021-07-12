import Consumable from '../models/consumable.model.js'

const findAll = (req, res) => {
  Consumable.find({})
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

  Consumable.findById(id)
  .then(data => {
    res.send(data)
  })
  .catch(err => { 
    console.error(err);
  })
}

const create = (req, res) => {
  if(!req.body.name) {
    console.error({message: `can't be null`});
    res.status(500).send({message: `can't be null`})
  }

  const consumable = new Consumable({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    price: req.body.price,
    vendor: req.body.vendor,
  })
  
  Consumable.create(consumable)
  .then(data => {
    res.send(data)
  })
  .catch(err => { 
    console.error(err);
  })
}

const update = (req, res) => {
  const id = req.params.id

  Consumable.findByIdAndUpdate(id, req.body, { new: true })
  .then(response => {
    res.send(response)
  })
  .catch(err => { 
    res.status(500).send({message: `Can't update item of id: ${id}`})
    console.error(err);
  })
}

const remove = (req, res) => {
  const id = req.params.id

  Consumable.findByIdAndDelete(id)
  .then(response => {
    res.send(response)
  })
  .catch(err => { 
    res.status(500).send({message: `Can't delete item of id: ${id}`})
    console.error(err);
  })
}

export {
  findAll, getById, create, update, remove
}