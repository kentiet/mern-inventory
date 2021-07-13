import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'

class AssetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      assetNumber: 0,
      price: 0,
      custodian: '',
      vendor: '',
      direction: '',
      redirectToHome: false
    }
  }


  handleSubmit = event => {
    event.preventDefault()

    const { name, description, assetNumber, price, custodian, vendor, direction } = this.state

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
    console.log(data)
    fetch('http://localhost:3001/api/v1/assets', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => console.log(data))
      .catch(err => console.error(err))

    this.setState({ redirectToHome: true })
  }

  onChangeHandler = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const toHome = this.state.redirectToHome

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
                value={this.state.name}
                onChange={this.onChangeHandler}
                placeholder='Asset name' />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input
                name='description'
                value={this.state.description}
                onChange={this.onChangeHandler}
                placeholder='Description' />
            </Form.Field>
            <Form.Field>
              <label>Asset Number</label>
              <input
                type='number'
                value={this.state.assetNumber}
                onChange={this.onChangeHandler}
                name='assetNumber'
                placeholder='Asset Number' />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input
                type='number'
                value={this.state.price}
                onChange={this.onChangeHandler}
                name='price'
                placeholder='Price' />
            </Form.Field>
            <Form.Field>
              <label>Custodian</label>
              <input
                name='custodian'
                value={this.state.custodian}
                onChange={this.onChangeHandler}
                placeholder='Custodian' />
            </Form.Field>
            <Form.Field>
              <label>Vendor</label>
              <input
                name='vendor'
                value={this.state.vendor}
                onChange={this.onChangeHandler}
                placeholder='Vendor' />
            </Form.Field>
            <Form.Field>
              <label>In/Out</label>
              <input
                name='direction'
                value={this.state.direction}
                onChange={this.onChangeHandler}
                placeholder='Direction' />
            </Form.Field>
            <Button
              onClick={this.handleSubmit}
              type='submit'>Submit</Button>
          </Form>
        </div>
      )
    }
  }
}
export default AssetForm