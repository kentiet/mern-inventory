import React, { Component } from 'react'

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
      direction: ''
    }
  }


  handleSubmit = event => {
    event.preventDefault()

    const { name, description, assetNumber, price, custodian, vendor, direction } = this.state

    const data = {
      name,
      description,
      assetNumber,
      price,
      custodian,
      vendor,
      direction
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
  }

  onChangeHandler = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          New Asset
        </div>
        <div className="items-center mb-6">
          <label for="required-name" className="text-gray-700">
            Name:
            <span className="text-red-500 required-dot">
              *
            </span>
          </label>
          <input value={this.state.name} onChange={this.onChangeHandler} type="text" id="required-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" placeholder="Asset Name" />
        </div>
        <div className="items-center mb-6">
          <label for="required-desc" className="text-gray-700">
            Description:
            <span className="text-red-500 required-dot">
              *
            </span>
          </label>
          <input value={this.state.description} onChange={this.onChangeHandler} type="text" id="required-desc" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="description" placeholder="Asset Description" />
        </div>
        <div className="items-center mb-6">
          <label for="required-price" className="text-gray-700">
            Price:
            <span className="text-red-500 required-dot">
              *
            </span>
          </label>
          <input value={this.state.price} onChange={this.onChangeHandler} type="number" id="required-price" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="price" placeholder="price" />
        </div>
        <div className="items-center mb-6">
          <label for="required-assetNumber" className="text-gray-700">
            Asset Number:
            <span className="text-red-500 required-dot">
              *
            </span>
          </label>
          <input value={this.state.assetNumber} onChange={this.onChangeHandler} type="number" id="required-assetNumber" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="assetNumber" placeholder="Asset Number" />
        </div>
        <div className="items-center mb-6">
          <label for="required-custodian" className="text-gray-700">
            Custodian:
            <span className="text-red-500 required-dot">
              *
            </span>
          </label>
          <input value={this.state.custodian} onChange={this.onChangeHandler} type="text" id="required-custodian" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="custodian" placeholder="Custodian" />
        </div>
        <div className="items-center mb-6">
          <label for="required-vendor" className="text-gray-700">
            Vendor:
            <span className="text-red-500 required-dot">
              *
            </span>
          </label>
          <input value={this.state.vendor} onChange={this.onChangeHandler} type="text" id="required-vendor" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="vendor" placeholder="Asset's Vendor" />
        </div>
        <div className="items-center mb-6">
          <label for="required-direction" className="text-gray-700">
            Direction:
            <span className="text-red-500 required-dot">
              *
            </span>
          </label>
          <input value={this.state.direction} onChange={this.onChangeHandler} type="text" id="required-direction" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="direction" placeholder="In / Out?" />
        </div>
        <div className="flex w-full">
          <button type="submit" onClick={this.handleSubmit} className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Login
          </button>
        </div>
      </div>
    )
  }
}
export default AssetForm