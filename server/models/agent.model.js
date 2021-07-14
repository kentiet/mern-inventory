import mongoose from 'mongoose'

const Schema = mongoose.Schema

const agentSchema = new Schema({
  username: { 
    type: String,
    required: true
  },
  firstname: { 
    type: String,
    required: true
  },
  lastname: { 
    type: String,
    required: true
  },
  password: { 
    type: String,
    required: true
  },
  email: { 
    type: String,
    required: true
  },
  role: { 
    type: String,
    required: true
  }
},
{ timestamps: true})

const Agent = mongoose.model('Agent', agentSchema)

export default Agent;