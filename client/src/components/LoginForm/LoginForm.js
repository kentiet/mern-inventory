import React, { useState } from 'react'
import {Button, Form} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

const LoginForm = (props) => {
  const [loginUser, setLoginUser] = useState({ 
    username: '',
    password: ''
  })
  const [loggedIn, setLoggedIn] = useState(false)

  const onChangeHandler = e => { 
    e.preventDefault()
    const { name , value } = e.target
    console.log(name, value)

    setLoginUser({ ...loginUser, 
      [name] : value })
    console.log(loginUser);
  }

  const handleLogin = (e) => { 
    
    e.preventDefault()

    fetch('http://localhost:3001/api/v1/agents/login', { 
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginUser)
    })
    .then((res) => res.json())
    .then(data => {
        const { token, expiresIn } = data
        localStorage.setItem('token', token)
        localStorage.setItem('expires', expiresIn)
        setLoggedIn(true)
        console.log(props)
        props.history.push("/home")
    })
    .catch(err => console.error(err))
  }

    return (
      <Form>
        <Form.Field>
          <label>Username</label>
          <input type='text' name='username' placeholder='Username' onChange={onChangeHandler}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' name='password' placeholder='password' onChange={onChangeHandler} />
        </Form.Field>
        <Button type='submit' onClick={handleLogin}>Login</Button>
      </Form>
    )
}

export default LoginForm