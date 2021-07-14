import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'

const AssetForm = (props) => {

  const [asset, setAsset] = useState({
      name: props.asset ? props.asset.name : '',
      description: props.asset ? props.asset.description : '',
      assetNumber: props.asset ? props.asset.assetNumber : 0,
      price: props.asset ? props.asset.price: 0,
      custodian: props.asset ? props.asset.custodian : '',
      vendor: props.asset ? props.asset.vendor : '',
      direction: props.asset ? props.asset.direction : 'in',
  })

  const [isEditing, setIsEditing] = useState(false)

  const [toHome, setToHome] = useState(false)
  const { name, description, assetNumber, price, custodian, vendor, direction } = asset
  const id = props.assetId

  useEffect(() => { 
    fetch('http://localhost:3001/api/v1/assets/' + id)
    .then(res => { 
      return res.json()
    })
    .then(data => { 
      setAsset(data)
      setIsEditing(true)
    })
  }, [id])

  const handleSubmit = event => {
    event.preventDefault()

    const iDirection = direction.toString().toLowerCase()

    const data = {
      name,
      description,
      assetNumber,
      price,
      custodian,
      vendor,
      direction: iDirection
    }

    if(isEditing) { 
      fetch('http://localhost:3001/api/v1/assets/'+ id, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(() => console.log(data))
        .catch(err => console.error(err))
    } else { 
      fetch('http://localhost:3001/api/v1/assets', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(() => console.log(data))
        .catch(err => console.error(err))
    }
    setToHome(true)
  }

  const onChangeHandler = event => {
    const { value, name } = event.target
    setAsset({ 
      ...asset, 
      [name]: value })
  }

    if (toHome === true) {
      return (
        <Redirect to='/assets' />
      )
    } else {
      return (
        <div>
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
              <label>Asset Number</label>
              <input
                type='number'
                value={assetNumber}
                onChange={onChangeHandler}
                name='assetNumber'
                placeholder='Asset Number' />
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
              <label>Custodian</label>
              <input
                name='custodian'
                value={custodian}
                onChange={onChangeHandler}
                placeholder='Custodian' />
            </Form.Field>
            <Form.Field>
              <label>Vendor</label>
              <input
                name='vendor'
                value={vendor}
                onChange={onChangeHandler}
                placeholder='Vendor' />
            </Form.Field>
            <Form.Field>
              <label>In/Out</label>
              <input
                name='direction'
                value={direction}
                onChange={onChangeHandler}
                placeholder='Direction' />
            </Form.Field>
            <Button.Group>
              <Link to='/assets/'><Button color='red'>Cancel</Button></Link>
              <Button.Or />
              <Button
                positive
                onClick={handleSubmit}
                type='submit'>Submit</Button>
            </Button.Group>
          </Form>
        </div>
      )
    }
}

export default AssetForm