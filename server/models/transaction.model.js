import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema({
  agent: { 
    type: Schema.Types.ObjectId, 
    ref: 'Agent',
    required: true
  },
  recipient: { 
    type: String,
    required: true
  },
  consumables: { 
    type: Schema.Types.ObjectId,
    ref: 'Consumable',
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