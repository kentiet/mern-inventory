import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Icon, Table } from 'semantic-ui-react'
import jsonwebtoken from 'jsonwebtoken'

const Consumable = ({ id, name, description, quantity, price, vendor, deleteItem }) => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('token') === null) return
        const token = localStorage.getItem('token').split(" ")[1]
        const agentRole = jsonwebtoken.decode(token).role
    
        if(agentRole === 'admin') {
          setIsAdmin(true)
        }
      }, [])

  return (
        <Table.Row>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{quantity}</Table.Cell>
            <Table.Cell>{price}</Table.Cell>
            <Table.Cell>{vendor}</Table.Cell>
            <Table.Cell>
                { isAdmin 
                ?
                    <Grid columns={3} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Button basic color='violet' animated>
                                    <Link
                                        style={{ textDecorationColor: 'none', textDecoration: 'none' ,color: '#6435c9'}}
                                        to={`/items/${id}/edit`}
                                    >
                                        <Button.Content visible>Edit</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='edit outline' />
                                        </Button.Content>
                                    </Link>
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button basic color='yellow' animated>
                                    <Link
                                        style={{ textDecorationColor: 'none', textDecoration: 'none' ,color: '#fbbd08'}}
                                        to={`/transactions/${id}/checkout`}
                                    >
                                        <Button.Content visible>Check out!</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='opencart' />
                                        </Button.Content>
                                    </Link>
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button basic color='red' animated onClick={() => deleteItem(id)}>
                                    <Button.Content visible>Delete</Button.Content>
                                    <Button.Content hidden>
                                            <Icon name='trash alternate outline' />
                                    </Button.Content>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                :
                <></>
                }
            </Table.Cell>
        </Table.Row>
)
}

export default Consumable