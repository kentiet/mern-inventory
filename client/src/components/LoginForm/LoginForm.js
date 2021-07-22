import React, { useState } from 'react'
import {Button, Container, Form, Grid, Message} from 'semantic-ui-react'
import moment from 'moment'
import './LoginForm.css'

const LoginForm = (props) => {
  const [loginUser, setLoginUser] = useState({ 
    username: '',
    password: ''
  })
  // const [loggedIn, setLoggedIn] = useState(false)
  const [validLogin, setValidLogin] = useState(true)

  const onChangeHandler = e => { 
    e.preventDefault()
    const { name , value } = e.target

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

    fetch('https://mern-inventory-api.herokuapp.com/api/v1/agents/login', { 
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginUser)
    })
    .then((res) => res.json())
    .then(data => {
        if(data.success) {
          const { token, expiresIn } = data
          const expires = moment().add(expiresIn)
    
          localStorage.setItem('token', token)
          localStorage.setItem('expires', expires)
          // setLoggedIn(true)
          window.location.replace('/')
          // props.history.push("/home")
        } else {
          setValidLogin(false)
        }
    })
    .catch(err => console.error(err))
  }

  return (
    <Container>
      <div className='login-form-header'>
        <h1 className='login-header'>Inventory Management</h1>
      </div>
      <div id='login-wrapper'>
        <h3 style={{ textAlign: 'center'}}>Login</h3>
        <Grid columns={3} >
          <Grid.Row stretched>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              { !validLogin ? 
                <Message
                  error
                  header='Action Forbidden'
                  content='Login failed. Please check your username and password.'
                />
                :
                <></>
              } 
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
    </Container>
  )
}

export default LoginForm

