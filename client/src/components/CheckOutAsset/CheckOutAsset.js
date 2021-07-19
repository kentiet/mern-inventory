import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  Button, Container, Header, Icon, Label, Select } from 'semantic-ui-react'

const CheckOutAsset = () => { 
  const assetId = useParams().id

  const [custodians, setCustodians] = useState([])
  const [selectedCustodian, setSelectedCustodian] = useState('No selected custodian')
  const [selectedAsset, setSelectedAsset] = useState([])

  console.log(assetId);
  console.log(selectedAsset);
  const selectedCustodianHandler = (e) => { 
    e.preventDefault()

    setSelectedCustodian(e.target.textContent)
  }

  const submitHandler = (e) => { 
    e.preventDefault()

    const updatedAsset = { 
      ...selectedAsset,
      custodian: selectedCustodian,
      direction: 'out'
    }

    fetch(`http://localhost:3001/api/v1/assets/${assetId}`, { 
      method: 'PUT',
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedAsset)
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))

  }
  useEffect(() => { 
    fetch('http://localhost:3001/ldap')
    .then(res => res.json())
    .then(data => data.map((user, i) => { 
        return { text: user.cn, value: user.cn , key: i}
      })
    )
    .then(result => setCustodians(result))
  }, [])

  useEffect(() => { 
    fetch(`http://localhost:3001/api/v1/assets/${assetId}`)
    .then(res => res.json())
    .then(data => { 
      setSelectedAsset(data)
    })
  })

  return (
    <Container>
      <Header as='h3' icon textAlign='center' color='teal'>
        <Icon name='upload' circular />
        <Header.Content>Check Out Asset</Header.Content>
      </Header>
      <br />
      <Container textAlign='center'>
        Custodian: <Select
          search
          searchInput={{ type: 'string' }}
          selection
          options={custodians}
          placeholder='Select users'
          onChange={selectedCustodianHandler}
        />
      </Container>
      <br />
      <br />
      <Container fluid>
        <Button.Group>
          <Link to='/assets/'><Button color='red'>Cancel</Button></Link>
          <Button.Or />
          <Button icon color='green' onClick={submitHandler}>
            <Icon name='check circle outline'/>
            Check Out
          </Button>
          <Label as='a' basic pointing='left'>
            { selectedCustodian } is being assigned to { selectedAsset.name } with Asset Number: { selectedAsset.assetNumber }
          </Label>
        </Button.Group>
      </Container>
    </Container>
  )
}

export default CheckOutAsset