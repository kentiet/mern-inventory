import mongoose from 'mongoose'

const Schema = mongoose.Schema

const transactionSchema = new Schema({
  
},
{ timestamps: true})

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction;