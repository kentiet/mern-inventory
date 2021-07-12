import mongoose from 'mongoose'

const Schema = mongoose.Schema

const consumableSchema = new Schema({ 
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  vendor: {
    type: String,
    required: true
  }
},
{ timestamps: true})

const Consumable = mongoose.model('Consumable', consumableSchema)

export default Consumable;