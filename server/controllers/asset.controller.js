import Asset from '../models/asset.model.js'

const findAll = (req, res) => {
  Asset.find({})
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

  Asset.findById(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error(err);
    })
}

const create = (req, res) => {
  if (!req.body) {
    console.error({ message: `can't be null` });
    res.status(500).send({ message: `can't be null` })
  }

  const asset = new Asset({
    name: req.body.name,
    description: req.body.description,
    assetNumber: req.body.assetNumber,
    price: req.body.price,
    custodian: req.body.custodian,
    vendor: req.body.vendor,
    direction: req.body.direction
  })

  Asset.create(asset)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error(err);
    })
}

const update = (req, res) => {
  const id = req.params.id

  Asset.findByIdAndUpdate(id, req.body, { new: true })
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      res.status(500).send({ message: `Can't update asset of id: ${id}` })
      console.error(err);
    })
}

const remove = (req, res) => {
  const id = req.params.id

  Asset.findByIdAndDelete(id)
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      res.status(500).send({ message: `Can't delete asset of id: ${id}` })
      console.error(err);
    })
}

export {
  findAll, getById, create, update, remove
}