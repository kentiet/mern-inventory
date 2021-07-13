import React, { useEffect, useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const EditAssetForm = ({ id, handleSubmit }) => {
  const [asset, setAsset] = useState({})
  console.log({ id });
  useEffect(() => {
    console.log('http://localhost:3001/api/v1/assets/' + id);
    fetch('http://localhost:3001/api/v1/assets/' + id)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAsset(data)
      })
  }, [id])


  function handleSubmit(event) {
    event.preventDefault()

  }

  function onChangeHandler(event) {
    const { value, name } = event.target
    setAsset({ 
      ...asset,
      [name]: value
    })
  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Name</label>
          <input
            name='name'
            type='text'
            value={asset.name}
            onChange={onChangeHandler}
            placeholder='Asset name' />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            name='description'
            value={asset.description}
            onChange={onChangeHandler}
            placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <label>Asset Number</label>
          <input
            type='number'
            value={asset.assetNumber}
            onChange={onChangeHandler}
            name='assetNumber'
            placeholder='Asset Number' />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input
            type='number'
            value={asset.price}
            onChange={onChangeHandler}
            name='price'
            placeholder='Price' />
        </Form.Field>
        <Form.Field>
          <label>Custodian</label>
          <input
            name='custodian'
            value={asset.custodian}
            onChange={onChangeHandler}
            placeholder='Custodian' />
        </Form.Field>
        <Form.Field>
          <label>Vendor</label>
          <input
            name='vendor'
            value={asset.vendor}
            onChange={onChangeHandler}
            placeholder='Vendor' />
        </Form.Field>
        <Form.Field>
          <label>In/Out</label>
          <input
            name='direction'
            value={asset.direction}
            onChange={onChangeHandler}
            placeholder='Direction' />
        </Form.Field>
        <Button
          onClick={handleSubmit}
          type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default EditAssetForm