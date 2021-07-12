import mongoose from 'mongoose'

const Schema = mongoose.Schema

const assetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  assetNumber: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  custodian: {
    type: String,
    required: true
  },
  vendor: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    enum: ['in', 'out'],
    required: true
  }
},
{ timestamps: true})

const Asset = mongoose.model('Asset', assetSchema)

export default Asset;