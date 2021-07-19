import React, { useEffect, useState } from 'react'
import {Button, Container, Form, Grid, Segment} from 'semantic-ui-react'
import moment from 'moment'
import './LoginForm.css'

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
  }


  // const getExpirationToken = () => { 
  //   const expiration = localStorage.getItem('expires')
  //   const expiresAt = JSON.parse(expiration)
  //   return moment(expiresAt)
  // }

  // const isLoggedIn = () => { 
  //   return moment().isBefore(this.getExpirationToken())
  // }
  
  // const isLoggedOut = () => { 
  //   return !this.isLoggedIn();
  // }

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
        const expires = moment().add(expiresIn)
  
        localStorage.setItem('token', token)
        localStorage.setItem('expires', expires)
        setLoggedIn(true)
        window.location.replace('/home')
        // props.history.push("/home")
    })
    .catch(err => console.error(err))
  }

  return (
    <div id='login-wrapper'>
      <h3 style={{ textAlign: 'center'}}>Login</h3>
      <Grid columns={3} >
        <Grid.Row stretched>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
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
          </Grid.Column>
          <Grid.Column></Grid.Column>
          
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default LoginForm

