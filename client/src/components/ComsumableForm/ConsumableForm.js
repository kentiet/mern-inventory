import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

const ConsumableForm = (props) => {

  const [consumable, setConsumable] = useState({
    name: props.consumable ? this.props.name : '',
    description: props.consumable ? this.props.description : '',
    quantity: props.consumable ? this.props.quantity : 0,
    price: props.consumable ? this.props.price : 0,
    vendor: props.consumable ? this.props.vendor : '',
  })

  const [isEditing, setIsEditing] = useState(false)
  const [toHome, setToHome] = useState(false)

  const { name, description, quantity, price, vendor} = consumable

  const {id} = props.id

  useEffect(() => { 
    fetch('https://mern-inventory-api.herokuapp.com/api/v1/items/' + id)
    .then(res => { 
      return res.json()
    })
    .then(data => { 
      setConsumable(data)
      setIsEditing(true)
    })
    .catch(err => { 
      console.err(err)
    })
  }, [id])
  

  const onChangeHandler = (e) => { 
    e.preventDefault()

    const { name, value } = e.target

    setConsumable({ 
      ...consumable,
      [name] : value
    })
  }

  const handleSubmit = (e) => { 
    e.preventDefault()

    const data = { 
      name,
      description,
      quantity,
      price,
      vendor
    }
    

    if(isEditing) { 
      fetch('https://mern-inventory-api.herokuapp.com/api/v1/items/' + id, { 
        method: 'PUT',
        headers: { 
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
      })
      .then()
      .catch(err => console.error(err))
    } else { 
      fetch('https://mern-inventory-api.herokuapp.com/api/v1/items', { 
        method: 'POST',
        headers: { 
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
      })
      .then()
      .catch(err => console.error(err))
    }
    setToHome(true)
  }
  
  if(toHome) { 
    return <Redirect to="/items" />
  } 

  return (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input
          name='name'
          type='text'
          value={name}
          onChange={onChangeHandler}
          placeholder='Asset name' />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          name='description'
          value={description}
          onChange={onChangeHandler}
          placeholder='Description' />
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
      <Form.Field>
        <label>Price</label>
        <input
          type='number'
          value={price}
          onChange={onChangeHandler}
          name='price'
          placeholder='Price' />
      </Form.Field>
      <Form.Field>
        <label>Vendor</label>
        <input
          name='vendor'
          value={vendor}
          onChange={onChangeHandler}
          placeholder='Vendor' />
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
  )
}

export default ConsumableForm