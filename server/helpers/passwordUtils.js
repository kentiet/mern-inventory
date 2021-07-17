import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const privateKeyPath = path.join(__dirname, '..', 'id_rsa_2048_private.pem')
const PRIVATE_PUB = fs.readFileSync(privateKeyPath)

const saltRounds = 10;


const hashPassword = (pwd) => { 
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(pwd, salt)

  return { 
    salt: salt,
    hash: hash
  }
}

const comparePassword = (pwd, hash) => {
  return bcrypt.compare(pwd, hash).then((err, result) => {
    if(err) console.error(err);
    return result
  });
} 

const issueJWT = (agent) => { 
  const _id = agent._id

  const expiresIn = '1d'

  const payload = { 
    sub: _id,
    issueAt: Date.now()
  }

  const signedToken = jsonwebtoken.sign(payload, PRIVATE_PUB, { expiresIn: expiresIn, algorithm: 'RS256'})

  return { 
    token: "Bearer "+ signedToken,
    expires: expiresIn
  }
}

export { hashPassword, comparePassword, issueJWT }