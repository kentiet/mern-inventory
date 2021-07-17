import React, { useState } from 'react'
import {Button, Form} from 'semantic-ui-react'

const LoginForm = () => {
  const [loginUser, setLoginUser] = useState({ 
    username: '',
    password: ''
  })

  const onChangeHandler = e => { 
    e.preventDefault()
    const { name , value } = e.target
    console.log(name, value)

    setLoginUser({ ...loginUser, 
      [name] : value })
    console.log(loginUser);
  }

  const handleLogin = (e) => { 
    console.log('Login',loginUser)
    e.preventDefault()

    fetch('http://localhost:3001/api/v1/accounts/login', { 
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginUser)
    })
    .then((res) => console.log(res))
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