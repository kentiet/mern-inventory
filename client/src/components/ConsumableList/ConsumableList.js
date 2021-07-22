import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Table, Icon } from 'semantic-ui-react'
import Consumable from '../Comsumable/Consumable'
import jsonwebtoken from 'jsonwebtoken'

const ConsumableList = () => {

  const [consumable, setConsumable] = useState([])
  useEffect(() => {
    fetch('https://mern-inventory-api.herokuapp.com/api/v1/items')
    .then(res => res.json())
    .then(data => setConsumable(data))
  }, [])

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
      if(localStorage.getItem('token') === null) return
      const token = localStorage.getItem('token').split(" ")[1]
      const agentRole = jsonwebtoken.decode(token).role
  
      if(agentRole === 'admin') {
        setIsAdmin(true)
      }
    }, [])


  const deleteItem = (id) => { 
    fetch('https://mern-inventory-api.herokuapp.com/api/v1/items/' + id, { 
      method: 'DELETE'
    }).then(() => { 
      setConsumable(consumable.filter(c => c._id !== id))
    })
  }

  return (
        <Container>
            <h3 style={{ textAlign: 'center'}}><Icon name='tag' />Item List</h3>
            { isAdmin ? 
            <Button basic color='teal' animated>
              <Link to="/items/create" style={{ color: '#00b5ad'}}><Button.Content visible>Create</Button.Content>
                  <Button.Content hidden>
                      <Icon name='arrow right' />
                  </Button.Content>
              </Link>
            </Button>
            :
            <></>
            }

            <Table color="brown" selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Vendor</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {consumable.map((item, i) => { 
                      return <Consumable
                        id = { item._id }
                        key={ i }
                        name={ item.name }
                        description = { item.description }
                        quantity = { item.quantity }
                        price = { item.price }
                        vendor = { item.vendor }
                        deleteItem = { deleteItem }
                      />
                    })}
                </Table.Body>
            </Table>
      </Container>
  )
}

export default ConsumableList