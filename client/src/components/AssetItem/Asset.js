import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'


const Asset = ({ id, name, description, assetNumber, price, custodian, vendor, direction, deleteAsset, updateAsset }) => {
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
                    <Button basic color='yellow' animated onClick={() => updateAsset(id)}>
                        <Button.Content visible>Edit</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    <Button basic color='red' onClick={() => deleteAsset(id)}>
                        <Button.Content>Delete</Button.Content>
                    </Button>
                </Table.Cell>
            </Table.Row>
        </>
    )
}

export default Asset