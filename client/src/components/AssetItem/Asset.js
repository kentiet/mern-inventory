import React from 'react'
import { Link } from 'react-router-dom'
import './Asset.css'

import { Table, Button, Icon } from 'semantic-ui-react'


const Asset = ({ id, name, description, assetNumber, price, custodian, vendor, direction, deleteAsset }) => {
    return (
        <>
            <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{assetNumber}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{custodian}</Table.Cell>
                <Table.Cell>{vendor}</Table.Cell>
                <Table.Cell>{direction}</Table.Cell>
                <Table.Cell>
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
                    <Button basic color='red' onClick={() => deleteAsset(id)} animated>
                        <Button.Content visible>Delete</Button.Content>
                        <Button.Content hidden>
                                <Icon name='trash alternate outline' />
                        </Button.Content>
                    </Button>
                </Table.Cell>
            </Table.Row>
        </>
    )
}

export default Asset