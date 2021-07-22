import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Container, Form, Header, Icon, Select } from 'semantic-ui-react'
import jsonwebtoken from 'jsonwebtoken'

const TransactionForm = () => {
  const consumableId = useParams().id
  const [currentAgent, setCurrentAgent] = useState([])
  const [recipient, setRecipient] = useState([])
  const [selectedItem, setSelectedItem] = useState([])
  const [selectedRecipient, setSelectedRecipient] = useState([])
  const [transaction, setTransaction] = useState({ 
    recipient: '',
    note: '',
    quantity: 0,
    agent: ''
  })

  const {  note, quantity } = transaction

  useEffect(() => { 
    fetch('https://mern-inventory-api.herokuapp.com/ldap')
    .then(res => res.json())
    .then(data => data.map((user, i) => { 
        return { text: user.cn, value: user.cn , key: i}
      })
    )
    .then(result => setRecipient(result))
  }, [])

  useEffect(() => { 
    fetch(`https://mern-inventory-api.herokuapp.com/api/v1/items/${consumableId}`)
    .then(res => res.json())
    .then(data => { 
      setSelectedItem(data)
    })
  }, [consumableId])

  const token = localStorage.getItem('token').split(" ")[1]
  const agentId = jsonwebtoken.decode(token).sub
  useEffect(() => { 
    fetch(`https://mern-inventory-api.herokuapp.com/api/v1/agents/${agentId}`)
    .then(res => res.json())
    .then(data => {
      setCurrentAgent(data)
    })
  }, [agentId])


  const onChangeHandler = (e) => { 
    e.preventDefault()
    const { name, value} = e.target

    setTransaction({ 
      ...transaction,
      [name]: value
    })
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    
    let agent = `${currentAgent.firstname} ${currentAgent.lastname}`

    const transaction = { 
      recipient: selectedRecipient,
      note: note,
      quantity: quantity,
      agent: agent,
      consumable: selectedItem.name
    }

    fetch(`https://mern-inventory-api.herokuapp.com/api/v1/transactions/${consumableId}`, { 
      method: 'POST',
      headers: { 
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(transaction)
    }).then(res => console.log(res))
    .catch(err => console.error(err))

    const updatedItem = { 
      ...selectedItem,
      quantity: Number.parseInt(selectedItem.quantity) - quantity
    }

    console.log(updatedItem)

    fetch(`https://mern-inventory-api.herokuapp.com/api/v1/items/${consumableId}`, { 
      method: 'PUT',
      headers: { 
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(updatedItem)
    }).then(res => console.log(res))
    .catch(err => console.error(err))

  }

  const selectRecipientHandler = (e) => {
    e.preventDefault()
    setSelectedRecipient(e.target.textContent)
  }

  return (
    <Container>
    <Header as='h3' icon textAlign='center' color='violet'>
      <Icon name='upload' circular />
      <Header.Content>Check Out Item</Header.Content>
    </Header>
    <Form>
      <Form.Field>
        <Select
          placeholder='Select recipient'
          fluid
          selection
          options={recipient}
          onChange={selectRecipientHandler}
        />
      </Form.Field>
      <Form.Field>
        <label>Note</label>
        <input
          name='note'
          value={note}
          onChange={onChangeHandler}
          placeholder='Note' />
      </Form.Field>
      <Form.Field>
        <label>Quantity</label>
        <input
          type='number'
          value={quantity}
          onChange={onChangeHandler}
          name='quantity'
          placeholder='Quantity' />
      </Form.Field>
      <Button.Group>
        <Link to='/items/'><Button color='red'>Cancel</Button></Link>
        <Button.Or />
        <Button
          positive
          onClick={handleSubmit}
          type='submit'>Submit</Button>
      </Button.Group>
    </Form>
    </Container>
  )
}

export default TransactionForm