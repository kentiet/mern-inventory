import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema({
  agent: { 
    type: String,
    required: true
  },
  recipient: { 
    type: String,
    required: true
  },
  note: String,
  consumable: { 
    type: String,
    required: true
  },
  quantity: { 
    type: Number,
    required: true
  }
},
{ timestamps: true})

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction;