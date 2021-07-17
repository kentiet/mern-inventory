import Agent from '../models/agent.model.js'

import bcrypt from 'bcrypt'
import fs from 'fs'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import passportJWT from 'passport-jwt'

const JwtStrategy = passportJWT.Strategy
const ExactJWT = passportJWT.ExtractJwt

const keyPath = path.join(__dirname, '..', 'id_rsa_2048_pub.pem')
const PUB_KEY = fs.readFileSync(keyPath, 'utf8')

const options = { 
  jwtFromRequest: ExactJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
}

export default (passport) => { 
  passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    Agent.findOne({_id: jwt_payload.sub}, function(err, agent) {
        if (err) {
            return done(err, false);
        }
        if (agent){
            return done(null, agent);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
  }));
}