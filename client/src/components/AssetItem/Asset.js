import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Asset.css'
import jsonwebtoken from 'jsonwebtoken'

import { Table, Button, Icon, Grid } from 'semantic-ui-react'


const Asset = ({ id, name, description, assetNumber, price, custodian, vendor, direction, deleteAsset }) => {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('token') === null) return
        const token = localStorage.getItem('token').split(" ")[1]
        const agentRole = jsonwebtoken.decode(token).role
    
        if(agentRole === 'admin') {
          setIsAdmin(true)
        }
      }, [])

    if (direction === 'out') { 
        return (
            <Table.Row disabled>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{assetNumber}</Table.Cell>
            <Table.Cell>{price}</Table.Cell>
            <Table.Cell>{custodian}</Table.Cell>
            <Table.Cell>{vendor}</Table.Cell>
            <Table.Cell>{direction}</Table.Cell>
        </Table.Row>
        )
    } else { 
    return (
            <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{assetNumber}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{custodian}</Table.Cell>
                <Table.Cell>{vendor}</Table.Cell>
                <Table.Cell>{direction}</Table.Cell>
                { isAdmin 
                ?
                    <Table.Cell>
                    <Grid columns={3} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Button basic color='violet' animated>
                                    <Link
                                        style={{ textDecorationColor: 'none', textDecoration: 'none' ,color: '#6435c9'}}
                                        to={`/assets/${id}/edit`}
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
                                        to={`/assets/${id}/checkout`}
                                    >
                                        <Button.Content visible>Check out!</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='opencart' />
                                        </Button.Content>
                                    </Link>
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button basic color='red' onClick={() => deleteAsset(id)} animated>
                                    <Button.Content visible>Delete</Button.Content>
                                    <Button.Content hidden>
                                            <Icon name='trash alternate outline' />
                                    </Button.Content>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </Table.Cell>
                :
                <></>
                }
            </Table.Row>
        )
    }
}

export default Asset